// import React, { useState } from 'react'
// import Aboutus from './Aboutus'
// //import { useLocation } from 'react-router-dom'

// const Home = () => {

//   const [name,setname]=useState('');
//   const handlevalue =(value)=>
//   {
//     setname (value);
//   }
 
//   return (
//     <div>
//       Home
//       <h1>Name from child :{name }</h1>
//       <Aboutus  handlevalue={handlevalue}/>
//     </div>
//   )
// }

// export default Home



import React, { useState } from 'react'
//import Career from './Career';
import  {Table} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';


const Home = () => {
  const location = useLocation();
  console.log(location);
  const [postdata]=useState(location?.state?.data ?? []);
 
  // const handledata=(data)=>
  // {
  //   setpostdata(data);
  // };
  return (
    <div>
      <h1>getting the data from career</h1>
      {/* <Career onDataFetch={handledata}/> */}
      <h2>Post Data</h2>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>User ID</th>
          <th>Post ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {postdata.map((post)=>(
          <tr key={post.id}>
          <td>{post.id}</td>
          <td>{post.id}</td>
          <td>{post.title}</td>
          <td>{post.body}</td>
        </tr>
        ))}
        
        </tbody>
      </Table>
    </div>
  )
}

export default Home
