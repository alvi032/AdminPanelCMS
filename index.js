const express = require('express')
const mongoose = require('mongoose')


// IMPORT MODELS
require('./Models/login')


const app = express()

//Express get data
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//IMPORT ROUTES
require('./Routes/loginRoutes')(app)


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })

}


const db = 'mongodb://localhost:27017/adminPanel'
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDb connected'))
    .catch(err => console.log(err))

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> {
    console.log( `Server running on ${PORT}`)
})






