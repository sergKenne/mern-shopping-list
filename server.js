const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mern_shopping', {useNewUrlParser: true});
const db = mongoose.connection;

db.once("open", err => {
    if(err) console.log(err);
    console.log("database is connecting ..... ");
});

const PORT = process.env.PORT || 5000;
const items = require("./routes/api/items")

const app = express();

app.use(bodyParser.json());

app.use("/api/items", items)

app.listen(PORT, () => {
    console.log(`server is running on the port ${PORT}...`);
});

