const express = require('express');

require('dotenv').config();
const mongoose =  require("mongoose");
const articles = require("./server/routes/article.route");
const bodyParser =  require("body-parser");

const app = express();
const port = 8000;

mongoose.connect('mongodb+srv://EnthCliff:anoc2022@cluster0.gwz0y0u.mongodb.net/?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Connected')
    }
});


//body-parser config;
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.use(articles)

app.get("/", (req, res) => {
    res.send(`<h1>Hello!</h1>`)
});

app.listen(port, () => {
    console.log(`Application is listening at port ${port}`);
});