const recommendedController = require('./controller/recommendedController');
const userController = require('./controller/userController');
const friendController = require('./controller/friendController');
// where I will put the different controllers also need to put the sql methods that will be executed here.
// const recommended = require('./controller/recommendedController');
module.exports = {
    buildEndPoints: (app) => {
       
        //Recommended endpoints
        app.post('/api/recommended', recommendedController.getRecommended);
            //still need to finish recommended one
        app.post('/api/recommended/add', recommendedController.addToFriendsList);

        //User endpoints
        app.patch('/api/user/patch/:id', userController.updateQualities);
        app.get('/api/user/list', userController.getUserList);
        app.get('/api/user/search', userController.findUsers);
        app.get('/api/user', userController.getCurrentUser);
    
        //Friend endpoints
        app.get('/api/friend/list', friendController.getFriendsOfUser);
        app.post('/api/friend/add', friendController.addFriend);
        app.post('/api/friend/remove', friendController.removeFriend);
    }
}
