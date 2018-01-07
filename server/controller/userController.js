module.exports = {

    updateQualities: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {
            firstname,
            lastname,
            gender,
            haircolor,
            eyecolor,
            hobby,
            birthmonth,
            birthday,
            birthyear
        } = req.body;
        console.log(req.params.id, firstname, lastname, gender, haircolor, eyecolor, hobby, birthmonth,birthday,birthyear);

        dbInstance.find_userfromlist([req.params.id])
            .then(response => {
                let currentUser = response[0];
                console.log('Current User Before Change', currentUser);
                if (firstname)
                    currentUser.firstname = firstname;
                if (lastname)
                    currentUser.lastname = lastname;
                if (gender)
                    currentUser.gender = gender;
                if (haircolor)
                    currentUser.haircolor = haircolor;
                if (eyecolor)
                    currentUser.eyecolor = eyecolor;
                if (hobby)
                    currentUser.hobby = hobby;
                if (birthmonth)
                    currentUser.birthmonth = birthmonth;
                if (birthday)
                    currentUser.birthday = birthday;
                if (birthyear)
                    currentUser.birthyear = birthyear;
                console.log('Current User AFTER Change', currentUser);

                dbInstance.update_user([req.params.id, currentUser.firstname, currentUser.lastname, currentUser.gender, currentUser.haircolor, currentUser.eyecolor, currentUser.hobby, currentUser.birthmonth, currentUser.birthday, currentUser.birthyear])
                    .then(response => {
                        console.log('response from update', response)
                        res.status(200).send('yah we got updated');
                    })
                    .catch(err => {
                        console.log('error updating', err);
                        res.status(500).send(err);
                    });
            });

        // dbInstance.updateUser([req.params.id,firstname,lastname,gender,haircolor,eyecolor,hobby,birthday,birthmonth,birthyear])
        // .then(response=>{
        //     console.log('what response is',req.body);
        //     res.status(200).send('Yah we got yu updated');
        // })
        // .catch(err=>{
        //     console.log('update error',err);
        //     res.status(500).send(err);
        // })

    },

    getUserList: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const page = req.query.page;
        let offset = (page - 1) * 24;
        dbInstance.read_userlist_paginate([offset])
            .then(users => {
                dbInstance.userlist_count([])
                .then(userCount => {
                    let numPages = Math.ceil(userCount[0].count / 24);
                    let response = {
                        userList: users,
                        userCount: userCount[0].count,
                        totalPages: numPages
                    }
                    res.status(200).send(response);
                });
            })
            .catch(err => {
                res.status(500).send(err);
            });
    },

    findUsers:(req,res,next)=>{
        const dbInstance = req.app.get('db');
        const { firstName, lastName } = req.query;
        dbInstance.find_matching_users([firstName, lastName])
        .then(matchedUsers => {
            res.status(200).send(matchedUsers);
        })
        .catch(err=> {
            res.status(500).send(err);
        });
    },
}