require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');


const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(cors());

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SECRET
}));

app.use(passport.initialize());
app.use(passport.session());

massive(process.env.CONNECTION_STRING).then((db)=>{
    app.set('db',db);
})

passport.use(new Auth0Strategy({
        domain: process.env.AUTH0_DOMAIN,
        clientID: process.env.AUTH0_CLIENT_ID,
        clientSecret: process.env.AUTH0_CLIENT_SECRET,
        callbackURL: process.env.AUTH0_CALLBACK_URL
    },
    (accessToken, refreshToken, extraParams, profile, done) => {
        const db = app.get('db');
        const userData = profile._json;

        return done(null, profile);
    
}));



passport.serializeUser((user, done)=>{
    done(null,user);
})

passport.deserializeUser((user, done)=>{
    done(null, user);
})

app.get('/auth', passport.authenticate('auth0'));


app.get('/auth/callback', passport.authenticate('auth0', { successRedirect: `http://localhost:${process.env.SERVER_PORT || 3008}/` }))

//an endpoint that returns a 404 if theres no user and 200 if there is.
app.get('/api/user',(req, res)=>{
    if(!req.user){
        res.sendStatus(404);
    }
    else{
        res.status(200).send(req.user);
    }
})
//logout










app.listen(process.env.SERVER_PORT, function(){
    console.log(`listening on port ${process.env.SERVER_PORT}`)
})






