import React, { useState } from 'react'
//import { useNavigate } from 'react-router-dom';

function Login() {

  const [useremail, setuseremail]=useState('');
  const [password,setpassword]=useState('');
 // const navigate =useNavigate();


  const handleform=(event)=>
  {
    event.preDefault();
    if(useremail===''|| password==='')
    {
      alert('please enter all email and password')

    }
    else
    {
      alert(`Email :${useremail} \n password: ${password}`);
      // navigate('/',{state: { email: useremail} });
    }
    
    setuseremail('');
    setpassword('');

  }
  return (
    
      <div>
       <form className="container" id="container" onSubmit={handleform} >
          <div className="mb-3">
            <label htmlFor="useremail" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="useremail"
              aria-describedby="emailHelp"
            
              placeholder="Enter Your Email"
              value={useremail} onChange={(event)=>{setuseremail(event.target.value)}}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password"placeholder="Enter your password" value={password} onChange={(event)=>{setpassword(event.target.value)}}/>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
         </form>
    </div>
    
  )
}

export default Login
