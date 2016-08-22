var express = require('express');
var router = express.Router();

/* GET home page. */
///res.render 渲染模板views下的html的文件
router.get('/', function(req, res, next) {
  res.render('res', { title: 'Express' });
  //res.send('你是小狗')
});


module.exports = router;
