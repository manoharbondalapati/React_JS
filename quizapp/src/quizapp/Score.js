import React from "react";
import { useNavigate } from "react-router-dom";
import './App.css';

const Score = ({ score }) => {

    const navigate =useNavigate();
    const gotohome=()=>
    {
        navigate('/homepage');
    }
    return (
        <div className="scorebox">
            <h2>Results</h2>
            <h4 id="score">Your score: {score}</h4><hr></hr>
            <h1 className="thank">Thank You!...</h1>
            <h5>Back to <span><button onClick={gotohome}>Home</button></span></h5>
         </div>
    );
};

export default Score;
