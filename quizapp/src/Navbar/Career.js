//import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Career = () =>{
// ({onDataFetch}) => {
 
//const [data, setData]=useState([]);
const navigate =useNavigate();

const fetchData=()=>
{


  axios.get("https://jsonplaceholder.typicode.com/posts")
  .then((response)=>{
    // setData(response.data);
    // onDataFetch(response.data);
     navigate('/home',{
      state:{
        data:response.data,
      }
     });
   
  })
  .catch((error)=>
  {
    console.log(error)
  });

};
 return (
    <div>
      <h1>List of posts</h1>
      <button onClick={()=>fetchData()} className='btn btn-warning'>Get Data</button>
    </div>
  )
}

export default Career




// const fetchData = async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();
//     onDataFetch(data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };using fetch method;
