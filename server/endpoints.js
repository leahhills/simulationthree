const recommendedController = require('./controller/recommendedController');
const userController = require('./controller/userController');
const friendController = require('./controller/friendController');
// where I will put the different controllers also need to put the sql methods that will be executed here.
// const recommended = require('./controller/recommendedController');
module.exports = {
    buildEndPoints: (app)=>{
       
        //Reccomended endpoints
        app.post('/api/recommended', recommendedController.getRecommended);
        app.post('/api/recommended/add', recommendedController.addToFriendsList);


        //User endpoints
         app.patch('/api/user/patch/:id', userController.updateQualities);
         app.get('/api/user/list', userController.getUserList);
         app.get('/api/user/search', userController.findUsers)
    
         //Friend endpoints
         app.get('/api/friend/list', friendController.getFriendsOfUser)
         /* 
        app.post('/api/friend/add', friendController.)
        app.post('/api/friend/remove', friendController.)

        //Don't know if i need this here but here is auth endpoints
        app.get('/api/auth/login', authController.)
        app.get('/api/auth/setUser', authController.)
        api.get('/api/auth/authenticated', authController.)
        app.post('/api/auth/logout', authController.)
*/
        

        






    }
 
}


