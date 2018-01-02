// Reducer gets called with state and an action
//action.type is usually going to be a string.better be string constant in CAPITALS
const SEARCH_TEXT = 'searchText/SEARCH_TEXT';
const BASE_FRIENDSLIST = 'baseFriendsList/BASE_FRIENDSLIST';


// example State looks lik this:
// var state ={
//     chores:['walk dog','poop xena']
// }



export default function reducer(state, action){
    switch(action.type){
        case SEARCH_TEXT:
        // this will return new state
        var newState = {};
        //example spread operator used and combine them with new chores. WHERE Is new chore coming from?
        //that comes along with the action.payload. 
        //var newChore = action.payload;
        //var newChores= [...state.chores, newChores] now can return 
        //object where chores is new chores

        // need to return a completely new state from reducer then last thing u need is default in case none of the action.types match.
        // return {
        //     chores:newChores
        // }
        //default:
        //return state
        var newSearchText = action.payload,
        var newSearchTexts = [...state.searchText, newSearchText]

        return {
            searchText: newSearchTexts
        }

        case: BASE_FRIENDSLIST:



        default:
            return state

    }
}