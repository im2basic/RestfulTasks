//-----------------------------MONGOOSE SETUP---------------------
//Uses mongoose servervvv
const mongoose = require('mongoose')
//Connects to mongoose/MongoDB  CHANGE DB NAME vvvv
mongoose.connect('mongodb://127.0.0.1/mongoose-dashboard', {useNewUrlParser:true});
const path = require('path')
const fs = require('fs')

//Connects your DB to your models to create a collection within your DB 
//-----------------------File Name vv--Model Path vvv
const models_path = path.join(__dirname, './../models')

fs.readdirSync(models_path).forEach((file) => {
    if(file.indexOf('.js') >= 0){
        require(models_path + '/' + file)
    }
})