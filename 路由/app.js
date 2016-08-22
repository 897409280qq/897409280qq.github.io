var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

////引入arttemplate模板
var template = require('art-template');
template.config('base', '');
template.config('extname', '.html');
app.engine('.html', template.__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.get('/',function(req,res){
res.render('res',{title:"Express"})
})
////get 是访问客户端的地址
app.get('/list/tom',function(req,res){
res.send('客户端的app.get')
})


/////use是调用routes下的JA
//app.use('/dog',require('这里是字符串'))
app.use('/dog',require('./routes/animals/dog'))


app.use('/',require('./routes/animals/cat/file'))



app.listen(3001,(req,res)=>{
  console.log("running....")
})

