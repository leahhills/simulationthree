
module.exports={
    getFriendsOfUser:(req,res,next) => {
        console.log('this is req.user',req.user);
        const currentUserId = req.user.id;
        const dbInstance = req.app.get('db');

        dbInstance.find_friends_of_user([currentUserId])
        .then(response => {

        console.log('this is current user of getfriendsofuser',currentUserId);

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
        const friendId = req.body.friendId;
        const dbInstance = req.app.get('db');

        dbInstance.add_friend([currentUserId, friendId])
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
        const friendId = req.body.friendId;
        const dbInstance = req.app.get('db');
        console.log('going to remove friends', currentUserId, friendId)
        dbInstance.remove_friend([currentUserId,friendId])
        .then(response=>{
            res.status(200).send(response);
        
        })
        .catch(err=>{
            console.log('error removing friend',err);
            res.status(500).send(err);

        })


    }
}