import React from 'react';
import './Assignment.css'; // Import the CSS file
import {  useNavigate } from 'react-router-dom';

export default function Assignment() {

const navigate= useNavigate() ;


const handleEasy = ()=>{
    navigate('/easyAssignment')
}


const handleMedium = ()=>{
   navigate('/mediumAssignment')
}


const handleHard = ()=>{
   navigate('/hardAssignment')
}


  return (
    <div className="assignment-container">
      <div className="difficulty"  onClick={handleEasy}>Easy</div>
      <div className="difficulty" onClick={handleMedium}>Medium</div>
      <div className="difficulty" onClick={handleHard}>Hard</div>
    </div>
  );
}
