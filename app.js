const express = require('express')
const app = express()

app.set('PORT', process.env.PORT || 3000)

app.use(express.json())

app.listen(app.get('PORT'), ()=>{
   console.log( `Server running to port: ${app.get('PORT')}`)
})

require('./drivers/connect_db')
app.use('/customers', require('./routes/customers'))
app.use('/cars', require('./routes/cars'))