/**
 * Created by LocNT on 10/27/2014.
 */
var express = require('express');
var router = express.Router();

//get all
router.get('/get_all', function(req,res){
    console.log("get all log");
    res.write("get all action");
});

module.exports = router;