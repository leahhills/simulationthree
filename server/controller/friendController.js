
module.exports={
    getFriendsOfUser:(req,res,next)=>{
        const currentUserId = req.session.passport.user;
        const dbInstance = req.app.get('db');

        dbInstance.find_friends_of_user([currentUserId])
        .then(response => {
         res.status(200).send(response[0]);   
        })
        .catch(err => {
            console.log('error updating', err);
            res.status(500).send(err);
        });
    },

    addFriendtoUser:(req,res,next)=>{
        const dbInstance = req.app.get('db')
    }



}