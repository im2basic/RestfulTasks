//--ROUTE ACTION QUERIES

const Action = require('../models/change')
module.exports= {
    //Looks through DB and displays whats in the collection
    index:  (req, res) => {
        Action.find()
            .then(result => res.json({results: result}))
            .catch(err =>{res.json({errors: err.errors})})
    },
    //Shows specific data saved from the DB
    show: (req, res) => {
        Action.findOne({_id: req.params.id})
        .then(result => res.json({results : result}))
        .catch(err => res.json({errors: err.errors}));
    },
    //Creates data to save into the DB
    create: (req,res) => {
        Action.create(req.body)
            .then(result => res.json({results : result}))
            .catch(err => res.json({errors: err.errors}));
    },
    //Updates info in the DB
    update: (req,res) => {
        Action.findOneAndUpdate({_id: req.params.id}, req.body,{useFindAndModify: false})
            .then(result => res.json({results : result}))
            .catch(err=> res.json({errors: err.errors}));
    },
    //Delets the data from DB
    destroy: (req,res) => {
        Action.deleteOne({_id: req.params.id})
            .then (result => res.json({results : result}))
            .catch(err => res.json({errors: err.errors}));
    }


}