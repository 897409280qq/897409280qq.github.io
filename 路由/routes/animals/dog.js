var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('这是小狗')
});
router.get('/cat',function(req,res,next){
    res.send('这是小猫')
})
router.get('/aa',function(req,res,next){
    res.render('xx/zz/aa',{titile:'连续'},{h1:"say hello"})
})
module.exports = router;
