/*
    ENDPOINT: '/api/recommended'
*/
const express = require('express');
const router = express.Router();

module.exports= {

findRec:(req,res,next)=>{
    const dbInstance = req.app.get('db')
    
    }
}
router.get('/', function(req, res, next) {
    res.send('POOP');
});