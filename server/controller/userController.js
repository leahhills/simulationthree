module.exports={
    updateQualities:(req,res,next)=>{
        const dbInstance = req.app.get('db');
        const {firstname,lastname,gender,haircolor,eyecolor,hobby,birthday,birthmonth,birthyear} = req.body;
     console.log(req.params.id,firstname,lastname,gender,haircolor,eyecolor,hobby,birthday,birthmonth,birthyear);
    dbInstance.updateUser([req.params.id,firstname,lastname,gender,haircolor,eyecolor,hobby,birthday,birthmonth,birthyear])
    .then(response=>{
        console.log('what response is',response);
        res.status(200).send('Yah we got yu updated');
    })
    .catch(err=>{
        console.log('update error',err);
        res.status(500).send(err);
    })

    }

}