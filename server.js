const express = require("express")
const app = express()

app.get("/", function(req, res){
    res.sendFile("/public/UpdateSnowBuddy.html", {
        root: __dirname
    });
})
app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 5000)
//app.listen(3000);