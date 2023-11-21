const express = require("express")
const app = express()
const path = require("path")
const bodyparser = require("body-parser")
const port = 3000

app.use(express.static("Code"))
app.use("/static", express.static("static"))
app.use(express.urlencoded())

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

var mysql = require("mysql")
var connection = mysql.createConnection({
    host: 'localhost',
    database: 'portfolio',
    user: 'root',
    password: 'rushikesh',
});

connection.connect(function (err) {
    if (err)
        console.log(err);
    console.log("Connected")
});

app.post("/", (req, res) => {

    var sql = "insert into user values('" + req.body.name + "','" + req.body.email + "','" + req.body.subject + "','" + req.body.message + "')"
    connection.query(sql, function (err) {
        if (err)
            console.log(err);
        res.sendFile(path.join(__dirname, "index.html"))
    });
    connection.end();

})

app.listen(port, () => {
    console.log("Server is started on port 3000")
})























