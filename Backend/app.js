const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
const mongoose = require('mongoose');
var cors = require('cors')
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

mongoose.connect('mongodb+srv://admin123:admin123@cluster0-0tqob.mongodb.net/todolist', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
app.use(cors())
var data = {};
const itemsSchema = new mongoose.Schema({
    name: String,
    number: Number
});
const Item = mongoose.model("item", itemsSchema);

//item1.save();
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.get("/a", function (req, res) {

    Item.find(function (err, data) {
        if (err) {
            console.log(err);

        } else {
            // console.log(data);

        }
        res.send(data);
        return (data);
    });
});
app.delete("/delete",function(req,res){
    const delId=req.body.name;
   // console.log(delId);
    
    Item.findOneAndDelete({name:delId},function(err,data){
        if(err){
            console.log(err);
            
        }else{
           // console.log("deleted :"+data);
            
        }
    });

});

app.post("/add", function (req, res) {

    var itemName = req.body.username;
    console.log(itemName);
    const item1 = new Item({
        name: itemName
    });
    item1.save()
        .then(() => res.json('added'))
        .catch(err => res.status(400).json('error :' + err));
    return (req.body);
});
app.listen(process.env.PORT, function () {
    console.log("server is running at 3001 port");

});