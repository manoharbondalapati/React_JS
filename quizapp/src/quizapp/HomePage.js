import React from 'react';
import './quizapp.css'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

  const navigate=useNavigate();

  const pagechange=()=>
  {
    navigate('/app');
  }
  return (
    
    <div className="container">
    <div className="content">
      <h1 id="heading">Welcome!..</h1>
      <h2>Quiz ApP</h2>
      <p>Quizzes help one gain a broad or specialized understanding 
      of a subject. Quizzes are intended to encourage funlearning 
      methods while also enhancing general knowledge. 
      Students can "think outside the box" or from diverse 
      perspectives by participating in quiz tournaments.
      </p>
      <div>
        <a href="https://www.w3schools.com/">Gain knowledge</a>
        <button onClick={pagechange}>Get Started</button>
      </div>
    </div>
    {/* <img src="https://res.cloudinary.com/dpfnyv0ut/image/upload/v1707980683/zce8lfyhmsrnz190yyub.png" alt="logo"></img> */}
  </div>
  
   
  )
}

export default HomePage
