const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');


router.get('/', (req, res) => {
    res.send('klk con klk')
});

// view all todos
router.get('/getAllTo_do', (req, res) => {
    Todo.find()
    .then(data => {
        res.json({response: "success", data});
    })
} )

// get params from form
router.post('/add-todo', async (req, res) => {

    const firsLetter = req.body.text.charAt(0);
    const resultName = firsLetter.toUpperCase() + req.body.text.slice(1);

    const todo = new Todo({text: resultName, completed: false})
    await todo.save()
});



module.exports = router;