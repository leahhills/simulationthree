require('dotenv').config();//this helps load environment variables from a .env file into process.env
//always create a .env file in the root directory of your project.add environemnet specif. variables 
//on new lines in the form of NAME=VALUE for example. Now process.env has the keys and valuues you 
//defined in your .env file
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');

//2 things we implement in order to use auth0
const passport = require('passport');//what were using so we can implement auth0 with our server and with our application
const Auth0Strategy = require('passport-auth0');
//passport uses the concept of strategies to authenticate requests
// here passport's strategy that we use is auth0.


var app = express();

app.use(bodyParser.json());//take in our requests. it gets passed into 
//bodyparser.json who finds the body formats it for us into a JS object and puts it on req.body 
//for everyone else in the chain.
//summary:will parse the body of the request and make it easily accessible as req.body 
//to the next function

app.use(bodyParser.urlencoded({ extended:true }));
app.use(cors());



//session here is where we implement session.important to use otherwise no way to store 
//userdata on session
//when client opens app server will give
//session id then its stored in users browser

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SECRET
}));

//that way when user logs in client makes http request along with session id to server. 
//the server will then store that session id inside the session store .then user will be routed
//to auth0 user will now be on auth0's website. user then can be authenticated with google, facebook 
//or whoever you choose to have user authenticate with.
//once user is authenticated auth0 takes the userdata sends it back to the server.
//the server then can take that userdata and store it on the session store. Userdata only 
//contains information like name or email but not password .
//NOW CLIENT HAS ACCESS TO USER data through their sessionid at any point.


// The .initialize is what is starting passport and connecting and making sure credentials and 
//everything are there. passport.session is telling passport that you’re using sessions
app.use(passport.initialize());
app.use(passport.session());

passport.use(new Auth0Strategy({
        domain: process.env.AUTH_DOMAIN ,
        clientID: process.env.AUTH_CLIENT_ID,
        clientSecret: process.env.AUTH_CLIENT_SECRET,
        callbackURL: process.env.AUTH_CALLBACK_URL
    },
    (accessToken, refreshToken, extraParams, profile, done) => {
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
    console.log(`listening on ${process.env.SERVER_PORT}`)
})






