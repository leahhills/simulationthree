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






//REDUX


//WHAT IS A REDUCER???
A reducer is a function that returns a piece of the application state. they produce the value of our state. The keys can be whatever you want.the reducer is only really concerned about the value of the state.
Since app can have many diff. pieces of state it can also have many different reducers

STEP 1

Create reducer

STEP 2

wire it into application


//Container

A container is just a component that has direct access to the state that's produced by redux.

Which one should we make a container?

In general you want the most parent component that cares about a particular piece of state to be a container.


//Store 

What is the store?
 
Can be thought of as a place where all of our data is kept track of. Like a massive JS object that has all the keys and values associated with our app.

//example situation
Say if one of our components initiates a change. Our store is notified of the changes and then it tells those components that have subscribed to the store to change that are concerned with those changes.

How does it do this exactly?

Component initiating change informs the store. In order to    reflect that change or how that data should change the store uses a special function called a REDUCER(To be contn below).

reducer takes current state of application, it must take an action(indicates the change that has occured) and how should that state change? And what will be our new state?

It's job is to take the state of the application and an action which will indicate the  that has occured and then will return an entirely new state that reflects the changes in the application. Pure function in js.

STORE
store will keep track of those changes, and when something has changed, it will also notify components that something has changed and you should update to reflect that.

REDUCER
IN an app that uses redux to control state. THe reducer is where are all the changes occur. It's a function that takes  the state of our application and figures out what changes should occur.

Going to be called with state of our application and then some  sort of action. the state here is the old state of application.
function reducer(state,action){}

JS action should be a js object that has a type and the type should be a string that describes the action.



 
Then the reducer figures out the action.type and return a new state based off of whatever the action is. a nice clean way of doing this is a switch statement.

