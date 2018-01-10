/* ENDPOINT: '/api/recommended' */

// friend service - this needs to be removed eventually when you get stuff from postgresql
// const service = require('../services/friendsService');

module.exports = {

    getRecommended: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const auth_id = req.body;
        const hobby = req.body;
        dbInstance.get_recommended([auth_id,hobby])
        .then((response)=>{
            res.status(201).send('wahoo here is rec list');
        })
        .catch((err)=>{
            res.status(500).send(err);
        })
    },

    addToFriendsList:(req, res, next)=>{
        // get request body
        // get access to databaseInstance
        const dbInstance = req.app.get('db');
        const {firstname,lastname,gender,haircolor,eyecolor,hobby,birthday,birthmonth,birthyear} = req.body;
        console.log('i am the req for add',req.body);
        // attempt to insert a new record into the database using the request body and the database instance
        dbInstance.add_friendtouserlist([firstname,lastname,gender,haircolor,eyecolor,hobby,birthday,birthmonth,birthyear])
        .then(response => {
            console.log('response', response);
            res.status(201).send('yay we have another one on friendlist');
        })
        .catch(err => {
            console.log(' add error', err);
            res.status(500).send(err);
        });
    }
        // if this was all successful, return a 201

        // if it was not successful, return a 500 (or a 400 if the request body data was bad)

        // placeholder code
        // return res.status(201).send('pooooooodoo');
    }

 


// module.exports= {
    
//     // findRec:(req,res,next)=>{
//         //     const dbInstance = req.app.get('db')
//         //     const { firstname, lastname, gender, haircolor, eyecolor, hobby, birthday } = req.body
        
//         //     dbInstance.findRec([ firstname, lastname, gender, haircolor, eyecolor, hobby, birthday,auth_id])
//         //         .then(()=>res.status(200).send('poop was posted'))
//         //         .catch(err => res.status(500).send(err))
        
        
        
//         //     }
//     }
