
module.exports={
    getFriendsOfUser:(req,res,next)=>{
        const dbInstance = req.app.get('db')
        const { username, password }= req.body;
        const { session} =req.body;
        const { user } = session ;
        console.log('i am the user ..', user);
        dbInstance.find_friends_of_user(req.user)
        .then((response)=>{
            console.log('i am user id...',req.user);
         res.status(200).send('wahoo found people');   
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