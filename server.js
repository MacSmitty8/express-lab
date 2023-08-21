const express = require('express')
const app = express()

const fruits = require('./models/fruits.js');
const vegetables = require("./models/vegetables.js")

//Setting up view engine

app.set('views',__dirname + '/views');
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


//ROUTES
//index
app.get('/fruits', (req, res) => {
    res.render("fruits/index", {
        fruits: fruits
    })
})

app.get('/fruits/:index', (req, res) =>{
    res.render('fruits/Show',{
        fruit: fruits[req.params.index]
    }
    
)}

)


app.get('/vegetables', (req, res) => {
    res.render("veggies/index", {
        vegetables: vegetables
    })
})

app.get('/vegetables/:index', (req, res) =>{
    res.render('veggies/Show',{
        vegetables: vegetables[req.params.index]
    }
    
)}

)


app.listen(3000, () =>{
    console.log('Listening at port 3000')
})