import React from 'react'
import { useNavigate } from "react-router-dom";
import '../css/Home.css';
import { useEffect } from 'react';
const Home = () => {
    const navigate=useNavigate();
      useEffect(() => {
    const display = document.getElementById('displaynav');
    display.value='Login'; 
  }, []);
  return (
    <div className='homepage'>
      <nav>
        <h1 style={{position:'fixed', marginLeft:'5%', cursor:'pointer',color:'black',fontSize:'xx-large',color:'Red'}}><i>Car Fantasys</i></h1>
        <input id='displaynav'style={{ marginLeft:'25%', cursor:'pointer',padding:'25px',color:'Red',fontWeight:'bold'}
      }onClick={() => navigate('/login') } readOnly/>  
      </nav>
      <div className='home'>
        <h1 style={{fontWeight:'bolder',fontSize:'xxx-large'}}><em>Welcome to Car Fantasys</em></h1>
        <p><i>Discover Your Fantasy Premium car suits Your Life style</i></p>
        <div className='startbtn'>
          <h3  onClick={() => navigate('/petfantasy')}>Get Started</h3>
        </div>
        </div>
    </div>
  )
};

export default Home;
