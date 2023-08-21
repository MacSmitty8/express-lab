import React from 'react'

function Index({fruits}) {
  return (
    <div>
      {
        fruits.map((fruit, i) =>{
            return (
                <li key={i}>
                <a href={`fruits/${i}`}>
                    {fruit.name} 
                    </a>
                    is {fruit.color} <br />
                    {
                    
                    fruit.readyToEat ? "Is ready to eat!" : "Is not safe to eat."
                
                            }
                </li>
             
            )
        } )
      }
    </div>
  )
}

module.exports = Index