import React from 'react'
const Default = require('../layout/Default')

function Index({fruits}) {
  return (
    <Default title ={"Fruits Index Page"}>
    <nav>
      <a href="/fruits/new" >Create New Fruit </a>
    </nav>
    <div>
      {
        fruits.map((fruit, i) =>{
            return (
                <li key={i}>
                <a href={`fruits/${fruit.id}`}>
                    {fruit.name} 
                    </a>
                    is {fruit.color} <br />
                    {
                    
                    fruit.readyToEat ? "Is ready to eat!" : "Is not safe to eat."
                
                            }
                            <form action={`/fruits/${fruit._id}?_method=DELETE`} method="POST" >
                              <input type="submit" value="DELETE" />
                            </form>
                            <a href={`/fruits/${fruit._id}/edit`}>Edit This Fruit</a>
                </li>
             
            )
        } )
      }
    </div>
    </Default>
  )
}

module.exports = Index