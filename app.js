express = require('express')
bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.urlencoded({
  extended: true
}));
text = "Hello World!"

app.post('/', function(req,res){
	text = req.body.name;
	res.redirect('/')
})

app.get('/',function(req,res){
	res.send(text)
})



app.listen(process.env.PORT || 3000, function(){
	console.log('Server Started')
})