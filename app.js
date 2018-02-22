express = require('express')
bodyParser = require('body-parser')
var app = express()
var mongoose = require('mongoose');
mongoose.connect('mongodb://husainhz7:undertale@ds143388.mlab.com:43388/bulletin');

app.use(bodyParser.urlencoded({
  extended: true
}));
text = "Hello World!"

var noticeSchema = new mongoose.Schema({
	name: String
});
var Notice = mongoose.model("Notice",noticeSchema);

app.post('/', function(req,res){
	Notice.create({
		name: text
	},function(err, notice){
		if(err){
			console.log(err);
		}else{
			text = req.body.name;
			console.log(notice);
			res.redirect('/')
		}
	})
})

app.get('/',function(req,res){
	
	// Notice.find({},function(err,notices){
	// if(err){
	// 	console.log("ERRR000");
	// 	console.log(err);
	// } else {
	// 	console.log(notices)
	// }
	// // res.send(text)
	// })
	res.send(text)
})

// mongodb://husainhz7:undertalek@ds143388.mlab.com:43388/bulletin


app.listen(process.env.PORT || 3000, function(){
	console.log('Server Started')
})