//-------------------ROUTES SETUP------------------
//uses mongoose db connection vvv
const mongoose = require('mongoose'),
//links "actions" to your controller of changes
actions = require('../controllers/changes')

module.exports = (app) => {
//----ROUTES----
//---Actions is used from the 'actions const we made from top that links to the controller---
app.get('/home', (req, res) => actions.index(req,res))

app.get('/:id', (req,res) => actions.show (req,res))

app.post('/create', (req,res) => actions.create (req,res))

app.post('/update/:id', (req,res) => actions.update (req,res))

app.get('/destroy/:id', (req,res) => actions.destroy(req,res))
}