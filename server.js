require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const fruits = require('./models/fruits.js');
const vegetables = require("./models/vegetables.js")
const Fruit = require('./models/fruit.js')
const Vegetable = require('./models/vegetable.js')
const methodOverride = require('method-override')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    // useCreateIndex: true,
    //Create user index was depecrated.
})

mongoose.connection.once('open', () =>{
    console.log('connected to mongoDB')
})

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
//method override
app.use(methodOverride('_method'))
//ROUTES
//index
app.get('/fruits', async function (req, res) {
    const foundFruits = await Fruit.find({})
    res.render("fruits/index", {
        fruits: foundFruits
    })
})
//New 
app.get('/fruits/new', (req, res) => {
    res.render('fruits/New')
})

//Create = Post
app.post('/fruits', async (req, res) =>{
   console.log(req.body)
   if(req.body.readyToEat === 'on'){
    req.body.readyToEat = true;
   } else {
    req.body.readyToEat = false;
   }
//    fruits.push(req.body)
//    console.log()
//     res.redirect('/fruits')
   const createdFruit = await Fruit.create(req.body)
   console.log(createdFruit)
    res.redirect('/fruits')
})


//Show
app.get('/fruits/:id', async (req, res) =>{
   const oneFruit = await Fruit.findById(req.params.id)
   res.render('fruits/Show', {
    fruit: oneFruit
   })
});

//Edit
app.get('/fruits/:id/edit', async(req, res) =>{
    const foundFruit = await Fruit.findById(req.params.id)
    res.render('fruits/Edit', {
        fruit: foundFruit
    })
})
//Update 
app.put('/fruits/:id', async (req, res) => {
    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true;
      } else {
        req.body.readyToEat = false;
      }
      if (req.body.isItGood === "on") {
        req.body.isItGood = true;
      } else {
        req.body.isItGood = false;
      }
    
    //fond the fruit and update by id
const updatedFruit = await Fruit.findByIdAndUpdate(req.params.id, req.body)
console.log(updatedFruit)
res.redirect(`/fruits/${req.params.id}`)
})


//Delete 
app.delete('/fruits/:id', async (req, res) =>{
    await Fruit.findByIdAndRemove(req.params.id)
    res.redirect('/fruits')
})

//Veggie App Post
app.post('/vegetables', async (req, res) =>{
    console.log(req.body)
    if(req.body.readyToEat === 'on'){
     req.body.readyToEat = true;
    } else {
     req.body.readyToEat = false;
    }
    // vegetables.push(req.body)
    // console.log()
    //  res.redirect('/vegetables')
    const createdVegetable = await Vegetable.create(req.body)
    console.log(createdVegetable)
     res.redirect('/veggies')
 })


 app.get('/vegetables', async function (req, res) {
    const foundVegetables = await Vegetable.find({})
    res.render("veggies/index", {
        vegetables: foundVegetables
    })
})
 app.get('/vegetables/new', (req, res) => {
    res.render('veggies/New')
})
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