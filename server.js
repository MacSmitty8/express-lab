const express = require('express')
const app = express()

const fruits = require('./models/fruits.js');
const vegetables = require("./models/vegetables.js")

//Setting up view engine

app.set('views',__dirname + '/views');
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
//Middleware
app.use((req, res, next) =>{
    console.log("I run for all routes!")
    next();
})
//this allows the body of a post request
app.use(express.urlencoded({extended: false}))
//ROUTES
//index
app.get('/fruits', (req, res) => {
    res.render("fruits/index", {
        fruits: fruits
    })
})
//New 
app.get('/fruits/new', (req, res) => {
    res.render('fruits/New')
})

//Create = Post
app.post('/fruits', (req, res) =>{
   console.log(req.body)
   if(req.body.readyToEat === 'on'){
    req.body.readyToEat = true;
   } else {
    req.body.readyToEat = false;
   }
   fruits.push(req.body)
   console.log()
    res.redirect('/fruits')
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