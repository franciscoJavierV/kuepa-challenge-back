const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://fran:1234@francluster.x8k69.mongodb.net/ChatApp?retryWrites=true&w=majority" , { useNewUrlParser: true , 
useUnifiedTopology: true})
var db = mongoose.connection

db.on('error', function(err){
  console.log('connection error', err)
})

db.once('open', function(){
  console.log('Connection to DB successful')
})



