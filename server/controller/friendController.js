
module.exports={
    getFriendsOfUser:(req,res,next)=>{
        console.log('this is req.user',req.user);
        const currentUserId = req.user.id;
        const dbInstance = req.app.get('db');

        dbInstance.find_friends_of_user([currentUserId])
        .then(response => {
         res.status(200).send(response);   
        })
        .catch(err => {
            console.log('error getting friends', err);
            res.status(500).send(err);
        });
    },
    addFriend:(req, res, next) => {
        const currentUserId = req.user.id;
        //const currentUserId = 429;
        const friend_id = req.body.friend_id;
        const dbInstance = req.app.get('db');

        dbInstance.add_friend([currentUserId, friend_id])
        .then(response => {
            res.status(201).send('Successfully added friend.');
        })
        .catch(err => {
            console.log('error adding friend', err);
            res.status(500).send(err);
        });
    },

    removeFriend:(req,res,next)=>{
        const currentUserId = req.user.id;
        const friend_id = req.body.friend_id;
        const dbInstance = req.app.get('db');

        dbInstance.remove_friend([currentUserId,friend_id])
        .then(response=>{
            res.status(200).send(response);
        
        })
        .catch(err=>{
            console.log('error removing friend',err);
            res.status(500).send(err);

        })


    }
}