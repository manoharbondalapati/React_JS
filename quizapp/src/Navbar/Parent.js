// import React from 'react';
// import Child from './Child';


// const Parent = () => {

//     const myname="manohar"
//   return (
//     <div>
//       <h1>Parent</h1>
//       <Child name={myname}/> 
    
//     </div>
//   )
// }

// export default Parent



import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [initail,afterbuton]=useState("")


    const buttonclicking=(msg)=>
    {
        afterbuton(msg);
    }
  return (
    <div>
      <h1>parent</h1>
      <p>when button click:{initail}</p>
      <Child sendmsg={buttonclicking}/>
    </div>
  )
}

export default Parent
