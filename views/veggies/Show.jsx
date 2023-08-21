import React from 'react'

function Show ({vegetable}) {
  return (
    <div>
      <h1>The {vegetable.name} is {vegetable.color} </h1>
    {
      vegetable.readyToEat? "Can be consumed" : "Throw it away"
    }
    </div>
  )
}

module.exports = Show
