express = require('express')
var app = express()

app.get('/',function(req,res){
	res.send("Hello World!")
})

app.listen(3000|process.env.PORT, function(){
	console.log('Server Started')
})