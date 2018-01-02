/* ENDPOINT: '/api/recommended' */

// friend service - this needs to be removed eventually when you get stuff from postgresql
const service = require('../services/friendsService');

module.exports = {
    getRecommended: (req, res, next) => {
        const friendsList = service.friendsList;
        res.send(friendsList);
    },
    addToFriendsList:(req, res, next)=>{
        // get request body
        const body = req.body;
        const name = body.name;
        // get access to databaseInstance


        // attempt to insert a new record into the database using the request body and the database instance

        // if this was all successful, return a 201

        // if it was not successful, return a 500 (or a 400 if the request body data was bad)

        // placeholder code
        return res.status(201).send('pooooooodoo');
    }
};
 


// module.exports= {
    
//     // findRec:(req,res,next)=>{
//         //     const dbInstance = req.app.get('db')
//         //     const { firstname, lastname, gender, haircolor, eyecolor, hobby, birthday } = req.body
        
//         //     dbInstance.findRec([ firstname, lastname, gender, haircolor, eyecolor, hobby, birthday,auth_id])
//         //         .then(()=>res.status(200).send('poop was posted'))
//         //         .catch(err => res.status(500).send(err))
        
        
        
//         //     }
//     }
