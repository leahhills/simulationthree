// where I will put the different controllers also need to put the sql methods that will be executed here.
// const recommended = require('./controller/recommendedController');
module.exports = {
    buildEndPoints: (app)=>{
       
        //Reccomended endpoints
        app.post('/api/recommended', recommendedController.findRec);
        //app.post('/api/recommended/add', recommendedController.)

/*
        //User endpoints
        app.patch('/api/user/patch/:id', userController.)
        app.get('/api/user/list', userController.)
        app.get('/api/user/search', userController. )

        //Friend endpoints
        app.get('/api/friend/list', friendController.)
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


