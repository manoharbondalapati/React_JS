// import React from 'react'

// const Child = (p) => {
//   return (
//     <div>
//       <h1>Child</h1>
//       <p>{p.name}</p>
//     </div>
//   )
// }

// export default Child



import React from 'react'

const Child = (props) => {

const handlebutton =()=>
{
    props.sendmsg("hello");
}
  return (
    <div>
      <h2>Child</h2>
      <button onClick={handlebutton}>click me</button>
    </div>
  )
}

export default Child
