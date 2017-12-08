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
    console.log('database connected');
})

passport.use(new Auth0Strategy({
        domain: process.env.AUTH0_DOMAIN,
        clientID: process.env.AUTH0_CLIENT_ID,
        clientSecret: process.env.AUTH0_CLIENT_SECRET,
        callbackURL: process.env.AUTH0_CALLBACK_URL
    },
    (accessToken, refreshToken, extraParams, profile, done) => {
        const db = app.get('db');
        console.log(profile);
        console.log(profile.identities);
        console.log('PROFILE YO',profile);
        db.find_user(profile._json.identities[0].id)
        .then(  (user)=>{
            if(user[0]) return done(null,user[0].id);
            else{
                const user = profile._json;
                db.create_user([user.name, user.password,user.user_id])
                .then(user=>(null,user[0].id))
                .catch(err=>{console.log('that didntwork',err)})
            }

        })
        

        return done(null, profile);
    
}));



passport.serializeUser((id, done)=>{
    done(null,id);
})

passport.deserializeUser((id, done)=>{
    done(null, id);
})

app.get('/auth', passport.authenticate('auth0'));

console.log(process.env.port); 
app.get('/auth/callback', passport.authenticate('auth0', 
    
    { successRedirect: `http://localhost:${process.env.SERVER_PORT || 3008}` 
    // failureRedirect:  `http://localhost:/`  
    
}))

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






