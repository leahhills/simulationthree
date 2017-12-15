import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './ducks/reducer';

export default createStore( reducer,initialState, applyMiddleware(promiseMiddleware()) );

//first and most important piece of app is store.
//store is where we maintain state, handle actions and dispatch changes
// in order to create store you need 2 things a reducer and an initial state



function reducer(state){
    return state;
}


// initialState anything application is going to keep track of using redux i need to put inside of intialstate.

var initialState ={
    _friendsList:[
        {
            id: 1,
            name: 'Margarat Jamiesrs'
        }, {
            id: 2,
            name: 'Xena Ryan'
        }, {
            id: 3,
            name: 'Tim Boner'
        }, {
            id: 4,
            name: 'Jackal Manners'
        }, {
            id: 5,
            name: 'Pizza Bob'
        }, {
            id: 6,
            name: 'Larry Man Dan'
        }, {
            id: 7,
            name: 'Puipy The Xena2'
        }, {
            id: 8,
            name: 'Kitty Yes'
        }, {
            id: 9,
            name: 'Jackal Manners'
        }, {
            id: 10,
            name: 'Pizza Bob'
        }, {
            id: 11,
            name: 'Larry Man Dan'
        }, {
            id: 12,
            name: 'Puipy The Xena2'
        }, {
            id: 13,
            name: 'Puipy The Xena2'
        }, {
            id: 14,
            name: 'Kitty Yes'
        }, {
            id: 15,
            name: 'Jackal Manners'
        }, {
            id: 16,
            name: 'Pizza Bob'
        }, {
            id: 17,
            name: 'Larry Man Dan'
        }, {
            id: 18,
            name: 'Puipy The Xena2'
        }, {
            id: 19,
            name: 'Margarat Jamiesrs'
        }, {
            id: 20,
            name: 'Xena Ryan'
        }, {
            id: 21,
            name: 'Tim Boner'
        }, {
            id: 22,
            name: 'Jackal Manners'
        }, {
            id: 23,
            name: 'Pizza Bob'
        }, {
            id: 24,
            name: 'Larry Man Dan'
        }, {
            id: 25,
            name: 'Puipy The Xena2'
        }, {
            id: 26,
            name: 'Kitty Yes'
        }, {
            id: 27,
            name: 'Jackal Manners'
        }, {
            id: 28,
            name: 'Pizza Bob'
        }, {
            id: 29,
            name: 'Larry Man Dan'
        }, {
            id: 30,
            name: 'Puipy The Xena2'
        }, {
            id: 31,
            name: 'Puipy The Xena2'
        }, {
            id: 32,
            name: 'Kitty Yes'
        }, {
            id: 33,
            name: 'Jackal Manners'
        }, {
            id: 34,
            name: 'Pizza Bob'
        }, {
            id: 35,
            name: 'Larry Man Dan'
        }, {
            id: 36,
            name: 'Puipy The Xena2'
        }
    ],
    searchText: '',
    baseFriendsList: _friendsList,
    friendsList: _friendsList,
    selectOption: ["First Name","Last Name"]

}
