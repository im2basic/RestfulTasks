//-----------------MONGOOSE MODEL SETUP---------------------
const mongoose = require('mongoose')

//----Change vvvv------
const AnimalSchema = new mongoose.Schema({
    //--Created model/Change to accomodate needs--
    name:{
        type: String,
        required: [true, "Must have a name!"]
    },
    color:{
        type: String,
        required: [true, "What is your color?" ]
    },
    favoriteFood:{
        type: String,
        required: [true, "what is your favorite food?"]
    }
//--CreatedAT vvv UpdatedAt--
},{timestamps:true})

// const TasksSchema = new mongoose.Schema({
//     //--Created model/Change to accomodate needs--
//     name: String,
//     job: String
// //--CreatedAT vvv UpdatedAt--
// },{timestamps:true})


//Action is what your model will be called in your controller
//              Collection Name vvv
const Action = mongoose.model('Animal', AnimalSchema)
// const Task = mongoose.model('Task', TasksSchema)

module.exports = Action;