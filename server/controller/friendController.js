const friendsList = require('./../services/friendsService');

module.exports={
    getFriendsOfUser:(req,res,next)=>{
        const dbInstance = req.app.get('db')
        dbInstance.find_userfriendlist(user_id)
        .then(()=>res.status(200).send('wahoo found people')
        .catch((err)=>res.status(500).send(err))

    }


}