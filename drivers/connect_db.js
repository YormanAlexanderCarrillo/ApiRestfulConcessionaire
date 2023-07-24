const mongoose = require('mongoose')
require('dotenv').config()



const URI = process.env.DB_URI
//console.log('url mongoAtlas: '+URI)
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(URI, options)
    .then(()=>{
        console.log('Successful connection to the DataBase')
    })
    .catch((error)=>{
        console.error(`Error connecting to DataBase ${error} `)
    })
