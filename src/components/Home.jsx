import React from 'react'
import { useNavigate } from "react-router-dom";
import '../css/Home.css';
import { useEffect,useRef,useState } from 'react';
const Home = () => {
    const navigate=useNavigate();
    const [showalert, setShowalert] = useState(false);
    const inputref = useRef(null);
    const handleKeyDown = () => {
      inputref.current.blur();
    };
    useEffect(() => 
      {
         const display = document.getElementById('displaynav');
        display.value='Login'; 
      }, []);
   
   const handleClick = () => {
      setShowalert(true);
      //setTimeout(() => 
      //setShowalert(false), 4000);

      setTimeout(() => navi(), 4000);
    };
    async function navi() {
      navigate('/petfantasy');  
    };
    
    const styles = {
       
          alertBox: {
          padding: '15px',
          color: 'black',
          borderRadius: '30px', 
          position:'absolute', 
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)', // center horizontally & vertically
          height: '150px',
          width: '500px',
          textalign: 'center',
          backgroundColor: 'black',
          opacity: '0.8',
          color: 'red',
          border: '1px solid red',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
          alignitems:'center',
          // optional for nice appearance 
        },
        spinner: {
        display: 'inline-block',
        top: '50%',
        left: '50%',
        width: '24px',
        height: '24px',
        border: '3px solid red',
        borderTop: '3px solid transparent',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        marginRight: '10px',
        alignitems: 'center', // optional for nice appearance 
    
    },
      };
    
  return (
    <div className='homepage' ref={inputref}>
      <br></br>
      <nav>
        <h1 style={{position:'fixed', marginLeft:'5%', cursor:'pointer',color:'black',fontSize:'xx-large',color:'Red'}}><i>Car <i style={{color:'black'}}>Fantasys</i></i></h1><br></br>
        <input id='displaynav'style={{ marginLeft:'25%', cursor:'pointer',padding:'25px',color:'red'}
      }onClick={() => navigate('/login') } readOnly/>  
      </nav>
      <div className='home'>
        <h1 style={{fontWeight:'bolder',fontSize:'xxx-large'}}><em>Welcome to Car Fantasys</em></h1>
        <p><i>Discover Your Fantasy Premium car suits Your Life style</i></p>
        <div className='startbtn'>
          <h3  onClick={() =>{handleClick(); handleKeyDown();}}>Get Started</h3>
        </div>
        </div>
        {showalert && (
            <div style={styles.alertBox} className="alert-box" >
              <br></br>
              <div style={styles.spinner}></div>
            <h2>Re-directing To Car cards........</h2>
            </div>)}
           
    </div>
  )
};

export default Home;
