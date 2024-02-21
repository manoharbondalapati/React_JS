import React, { useState } from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';
import './todolist.css';

import axios from 'axios';

const Edit = () => {
    const location=useLocation();
    const {id,title}=location?.state;
   
    const navigate =useNavigate();
    const [updatedtitle,setupdatedtitle]=useState(title ?? "");
    const handlupdatetitle=(event)=>
{
       event.preventDefault();     
    
      axios.put(`http://localhost:3002/posts/${id}`,{title:updatedtitle})
      .then((response)=>{
        if(response.status===200)
        {
         navigate('/')
         
        }
      
     })
     .catch((error)=>console.log(error))
  
    }

  return (
    <div>
       <form id='editcontainer' onSubmit={handlupdatetitle}>
        <input type='text' id='editinput' value={updatedtitle} onChange={(e)=>setupdatedtitle(e.target.value)}
        placeholder='Enter title'/>
        <button type='submit' id='editbutton'>Update Title</button>
      </form>
    </div>
  )
}

export default Edit;
