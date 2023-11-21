const express = require("express")
const path = require("path")
const bodyparser = require("body-parser")
const app = express();
const port = 3000;

app.use(express.static("Code"))
app.use('/static', express.static("static"));
app.use(express.urlencoded())

const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/Portfolio", { useNewUrlParser: true }).then(() =>
{
    console.log("Connected to DB")
}).catch((error) =>
{
    console.log(error)
})

const portfolioSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String
});

const portfolio = mongoose.model('portfolio', portfolioSchema);

app.get("/", (req, res) =>
{
    res.sendFile(path.join(__dirname,"code/index.html"))
})

app.post("/", (req, res) =>
{
    var userData=new portfolio(req.body)
    res.sendFile(path.join(__dirname, "code/index.html"))
    userData.save()
})

app.listen(port, () =>
{
    console.log("Server is started on port 3000")
})