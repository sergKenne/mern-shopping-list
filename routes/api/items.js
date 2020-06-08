const express = require('express');
const router = express.Router();

const Item = require("../../models/Item");

router.get("/", (req, res) => {
    Item.find({}, (err, items) => {
        if(err) return console.log(err);
        res.json(items);
    })
    // .sort({date:-1})
    // .then(items => res.json(items));
});

router.post("/", (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    //newItem.save().then(item => res.json(item));
    newItem.save((err, item) => {
        if(err) return console.log(err);
        res.json(item);
    })
});

router.delete("/:id", (req, res) => {
    Item.findByIdAndDelete(req.params.id, (err, item) => {
        if(err) return console.log(err);
        res.json(item);
    })
})

module.exports = router;