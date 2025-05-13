import React from 'react'
import { useNavigate } from "react-router-dom";
import '../css/Home.css';
const Home = () => {
    const navigate=useNavigate();
  return (
    <div className='homepage'>
      <nav>
        <h1 style={{position:'fixed', marginLeft:'5%', cursor:'pointer',color:'black',fontSize:'xx-large'}}><i>Cars Fantasy</i></h1>
         <h1 style={{ marginLeft:'25%', cursor:'pointer',padding:'25px'}}onClick={() => navigate('/login') }><i>LOGIN</i></h1>     
      </nav>
      <div className='home'>
        <h1 style={{fontWeight:'bolder',fontSize:'xxx-large'}}><em>Welcome to Cars Fantasy</em></h1>
        <p><i>Discover Your Fantasy car suits Your Life style</i></p>
        <div className='startbtn'><i>
          <h3  onClick={() => navigate('/petfantasy')}>Get Started</h3>
        </i>
        </div>
        </div>
    </div>
  )
};

export default Home;
