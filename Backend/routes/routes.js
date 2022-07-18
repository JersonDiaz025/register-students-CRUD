const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');


router.get('/', (req, res) => {
    res.send('klk con klk')
});


router.get('/getAllTo_do', (req, res) => {
    Todo.find()
    .then(data => {
        res.json({response: "success", data});
    }) 
} )

router.post('/add', (req, res) => {
    const firsLetter = req.body.text.charAt(0);
    const resultName = firsLetter.toUpperCase() + req.body.text.slice(1);

    const todo = new Todo({text: resultName, completed: false})
    todo.save()
    // .then(data => console.log(data))
});






module.exports = router;