// Reducer gets called with state and an action
//action.type is usually going to be a string.better be string constant in CAPITALS
const SEARCH_TEXT = 'searchText/SEARCH_TEXT';


// example State looks lik this:
// var state ={
//     chores:['walk dog','poop xena']
// }



export default function reducer(state, action){
    switch(action.type){
        case SEARCH_TEXT:
        // this will return new state
        var newState = {};
        //example spread operator used
        //var newChores= [...state.chores]

    }
}