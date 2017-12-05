Here are my notes as I did this project to understand more fully what is going on here in my app.


//DOTENV

-dotenv helps load environment variables from a .env file into process.env
always create a .env file in the root directory of your project.add environemnet specif. variables 
on new lines in the form of NAME=VALUE for example. Now process.env has the keys and valuues you 
defined in your .env file




//2 THINGS WE IMPLEMENT IN ORDER TO USE AUTH0

-passport  what were using so we can implement auth0 with our server and with our application
-Auth0strategy

passport uses the concept of strategies to authenticate requests
here passport's strategy that we use is auth0.
passport is designed to serve a single purpose: authenticate requests.
its authentic. middleware for node.





app.use(bodyParser.json())

//take in our requests. it gets passed into 
//bodyparser.json who finds the body formats it for us into a JS object and puts it on req.body 
//for everyone else in the chain.
//summary:will parse the body of the request and make it easily accessible as req.body 
//to the next function





session here is where we implement it 
important to use otherwise no way to store userdata on session when client opens app server will give session id then its stored in users browser


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




//WHAT IS A REDUCER???
A reducer is a function that returns a piece of the application state. they produce the value of our state. The keys can be whatever you want.the reducer is only really concerned about the value of the state.
Since app can have many diff. pieces of state it can also have many differnt reducers

STEP 1

Create reducer

STEP 2

wire it into application


//Container

A container is just a component that has direct access to the state that's produced by redux.