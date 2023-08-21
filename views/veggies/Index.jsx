import React from 'react'

function Index({vegetables}) {
    return (
      <div>
        {
          vegetables.map((vegetables, i) =>{
              return (
                  <li key={i}>
                  <a href={`vegetables/${i}`}>
                      {vegetables.name} 
                      </a>
                       is {vegetables.color} <br />
                      {
                      
                      vegetables.readyToEat ? "Is ready to eat!" : "Is not safe to eat."
                  
                              }
                  </li>
               
              )
          } )
        }
      </div>
    )
  }
  
  module.exports = Index