import React from 'react'

function Show({fruit}) {
    console.log(fruit)

  return (
    <div>
    <h1>The {fruit.name} is {fruit.color} </h1>  
    {
        fruit.readyToEat ? "Is ready to eat!" : "Is not safe to eat."
    }
    
    </div>
  )
}

module.exports = Show