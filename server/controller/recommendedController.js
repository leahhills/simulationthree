module.exports = {
    getRecommended: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const userId = req.user.id;
         const field = req.body.field;
        
        dbInstance.find_user([userId])
        .then(user => {
            const value = user[0][field];
            console.log('hit endpoint',userId, value, field)

            dbInstance.get_recommended([userId, value, field])
            .then(recommendedFriends => {
                console.log('promise successful',recommendedFriends);
                res.status(200).send(recommendedFriends);
            })
            .catch(err => {
                res.status(500).send(err);
            });
        })
        .catch(err=>{
            res.status(500).send(err);
        })

    },
    addToFriendsList:(req, res, next)=>{
        // get request body
        // get access to databaseInstance
        const dbInstance = req.app.get('db');
        const {user_id,friend_id} = req.body;
        console.log('i am the req for add',req.body);
        // attempt to insert a new record into the database using the request body and the database instance
        dbInstance.add_to_friendlist_table([user_id,friend_id])
        .then(response => {
            console.log('response', response);
            res.status(201).send('yay we have another one on friendlist');
        })
        .catch(err => {
            console.log(' add error', err);
            res.status(500).send(err);
        });
    
        }
}

