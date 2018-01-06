module.exports={
    updateQualities:(req,res,next)=>{
        const dbInstance = req.app.get('db');
        const {firstname,lastname,gender,haircolor,eyecolor,hobby,birthday,birthmonth,birthyear} = req.body;
     console.log(req.params.id,firstname,lastname,gender,haircolor,eyecolor,hobby,birthday,birthmonth,birthyear);

    dbInstance.find_user([req.params.id])
    .then(response => {
        let currentUser = response[0];
        console.log('Current User Before Change', currentUser);
        if(firstname)
            currentUser.firstname = firstname;
        if(lastname)
            currentUser.lastname = lastname;
        if(gender)
            currentUser.gender = gender;
        if(haircolor)
            currentUser.haircolor = haircolor;
        if(eyecolor)
            currentUser.eyecolor = eyecolor;
        if(hobby)
            currentUser.hobby = hobby;
        if(birthday)
            currentUser.birthday = birthday;
        if(birthmonth)
            currentUser.birthmonth = birthmonth;
        if(birthyear)
            currentUser.birthyear = birthyear;
        console.log('Current User AFTER Change', currentUser);
            
        dbInstance.update_user([req.params.id, currentUser.firstname, currentUser.lastname, currentUser.gender, currentUser.haircolor, currentUser.eyecolor, currentUser.hobby, currentUser.birthday, currentUser.birthmonth, currentUser.birthyear])
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

        getUserList:(req,res,next)=>{
            const dbInstance = req.app.get('db');
            console.log('here is the request',req)
            const { id }= req.body;
            dbInstance.read_userslist([req.params.id,id])
            .then(users=>res.status(200).send(users))
            .catch(err=> res.status(500).send(err));
            

},
    

}