import React from 'react'

export const Hoisting3 = () => {

   function bigBrother(){
      function littleBrother(){
         return "it is me!"
      }

      return littleBrother()

      function littleBrother(){
         return "no me!"
      }
   }

   console.log(bigBrother())

   return (
      <div>
         
      </div>
   )
}
