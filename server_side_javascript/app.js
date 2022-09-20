var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');
//정적으로 파일 지정하는 것 같다.
app.use(express.static('public'));

app.get('/topic/:i', function(req, res){
  var topics = [
    'javascript is ...',
    'Nodejs is ...',
    'Express is ....'
  ];
    var output = `
      <a href="/topic/0">JavaSCript</a><br>
      <a href="/topic/1">Nodejs</a><br>
      <a href="/topic/2">Expriss</a><br><br>
      ${topics[req.params.id]}
    `
  res.send(output);
});


app.get('/topic/:id/:mode', function (req, res) {
  res.send(req.params.id+','+req.params.mode);
});

app.get('/form', function (req, res) {
  res.render('form');
});

app.get('/form_receiver', function(req,res){
  var title = req.query.title;
  var description = req.query.description;
  res.send(title+','+description);
});
app.use(bodyParser.urlencoded({extended: false}));

app.post('/form_receiver', function(req,res){
  var title = req.body.title;
  var description = req.body.description;
  res.send(title+','+description);
});

app.get('/template', function(req, res){
  res.render('temp',{time:Date(),_title:'Jade'});
});

app.get('/', function(req, res){
  res.send('Hello Home Page');
});

app.get('/route', function(req, res){
  res.send('Hello Router, <img src = "/temp.png">');
});

app.get('/dynamic', function(req, res){
  var lis ='';
  var time = Date();
  for(var a =0;a<5;a++){
    lis = lis + '<li>coding</li>';
  }
  var output = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
      Hello, dynamic!
      <ul>
      ${lis}
      </ul>
      ${time}
    </body>
  </html>
`;
  res.send(output);

});


app.get('/login', function(req, res){
  res.send('Login Please');

});

app.listen(3000, function(){
  console.log('Conneted 3000 port!');
});
