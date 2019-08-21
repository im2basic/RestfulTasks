const express = require("express")
const app = express()
const bodyParser= require('body-parser')


app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(express.urlencoded({ extended: true }));

//--CONNECTTS TO ROUTES/DB--
require('./server/config/database')
require('./server/config/routes.js')(app)

//--OUTPUT PORT--
app.listen(8000, () => console.log("listening on port 8000"));