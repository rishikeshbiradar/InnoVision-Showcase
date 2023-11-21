const express = require("express")
const path = require("path")
const app = express();
const port = 3000;

app.use(express.static("Code"))
app.use('/static', express.static("static"));

const mongoose = require("mongoose")
const dbUrl = "mongodb+srv://rushisb55:rushikesh@users.nvyog12.mongodb.net/portfolio?retryWrites=true&w=majority"

const connectionParams = {
    useNewUrlparser: true,
    useUnifiedTopology: true,
}
const start = () =>
{
    mongoose.connect(dbUrl, connectionParams).then(() =>
    {
        console.info("Connected to db")
    }).catch(() =>
    {
        console.log(error)
    })
}
    start()

const portfolioSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String
});

const portfolio = mongoose.model('Users', portfolioSchema);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "code/index.html"))
})

app.post("/", (req, res) => {
    var userData = new portfolio(req.body)
    res.sendFile(path.join(__dirname, "code/index.html"))
    userData.save()
})

app.listen(port, () => {
    console.log(`Server is started on port ${port} `)
});
