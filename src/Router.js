import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import LandingPage from './components/LandingPage/LandingPage';
import Profile from './components/Profile/Profile';
import Search from './components/Search/Search';

export default(
    <Switch>
        <Route exact path='/' component ={ Login  } />
        <Route path='/landingpage' component ={ LandingPage } />
        <Route path='/profile' component ={ Profile } />
        <Route path='/search' component ={ Search  } />
    </Switch>
)