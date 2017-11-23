require('dotenv').config();//this helps load environment variables from a .env file into process.env
//always create a .env file in the root directory of your project.add environemnet specif. variables 
//on new lines in the form of NAME=VALUE for example. Now process.env has the keys and valuues you 
//defined in your .env file
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(cors());


