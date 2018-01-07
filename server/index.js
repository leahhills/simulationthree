require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');
const endpoints = require('./endpoints');

const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use(session({resave: true, saveUninitialized: true, secret: process.env.SECRET}));

app.use(passport.initialize());
app.use(passport.session());

// endpoints.buildEndpoints(app);

massive(process.env.CONNECTION_STRING).then((db) => {
    app.set('db', db);
    console.log('database connected');
})

passport.use(new Auth0Strategy({
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL: process.env.AUTH0_CALLBACK_URL
}, (accessToken, refreshToken, extraParams, profile, done) => {
    const db = app.get('db');
    // console.log(profile); console.log(profile.identities); console.log('PROFILE
    // YO',profile);
    console.log('profile stuff', profile.identities[0].user_id);
    db
        .find_auth_user([profile.identities[0].user_id])
        .then(user => {
            if (user[0]) 
                return done(null, user[0].id);
            else {
                const user = profile._json;
                console.log('what even is profile', profile);
                db
                    .create_user([user.name, user.password, profile.identities[0].user_id])
                    .then(user => done(null, user[0].id))
                    .catch(err => {
                        console.log('ERROR: Could not create user', err);
                    })
            }

        })

    return done(null, profile);
}));

// app.get("/auth", passport.authenticate("auth0")); app.get( "/auth/callback",
//  passport.authenticate("auth0", {     successRedirect:
// "http://localhost:3000/landingpage", //redirecting to dashboard
// failureRedirect: "/auth"   }) ); app.get("/auth/me", (req, res) => {   if
// (!req.user) {     return res.status(404).send("User Not Found");   } else {
// return res.status(200).send(req.user);   } }); app.get("/auth/logout", (req,
// res) => {   req.logOut();   res.redirect(200, "http://localhost:3000"); });

app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: `http://localhost:3000/landingpage`,
    failureRedirect: `http://localhost:3000/`
    // successRedirect: `http://localhost:${process.env.SERVER_PORT || 3008}`
    // failureRedirect:  `http://localhost:/`
}));

//an endpoint that returns a 404 if theres no user and 200 if there is.
app.get('/api/user', (req, res) => {
    if (!req.user) {
        res.sendStatus(404);
    } else {
        res
            .status(200)
            .send(req.user);
    }
});

//logout
app.get("/auth/logout", (req, res) => {
    req.logOut();
    res.redirect(302, 'http://localhost:3000/');
});

passport.serializeUser((id, done) => {
    done(null, id);
})

passport.deserializeUser((id, done) => {
    const _id = id.identities[0].user_id;
    console.log("DO I EVEN HAD A REAL ID", _id);
    app
        .get('db')
        .find_auth_user([_id])
        .then((user) => {
            console.log("DID I FIND USER?", user);
            done(null, _id);
        });
});



//reccomended endpoint check to see if work

endpoints.buildEndPoints(app);



app.listen(process.env.SERVER_PORT, function () {
    console.log(`listening on port ${process.env.SERVER_PORT}`)
})
