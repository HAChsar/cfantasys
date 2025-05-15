import React from "react";
import '../css/logincss.css';
import img1 from '../assets/loginarrw.png';
import { useNavigate } from "react-router-dom";
const Login =() => 
{
    const navigate=useNavigate();
    const handleClick = () => {
    alert('Loggin in');
    navigate('/petfantasy');
  }
    return (
        <div className="page">
            <h1 style={{position:'fixed', marginLeft:'5%', cursor:'pointer'}} className='title'><em>Car Fantasys</em></h1>
            <div className='lbox'>
            <div className='img1'> 
            </div>
            <br></br>
            <img id='ig1'src={img1} width={25} height={25}/>
            <br></br>
            <h2><em>Sign in into Car Fantasys</em></h2>
            <p><i>Find your perfect pet whether it's a loyal dog, a charming cat, or a vibrant bird.</i></p>
            <input id='userid' type='text' placeholder=" Enter your mail Email"/>
            <br></br><br></br>
            <input id='userpw' type='password' placeholder="Password"/>
            <br></br>
            <p style={{display: "inline", cursor:"pointer", float:'left', margin:'auto', marginLeft:'5%',textDecoration:'underline'}} onClick={ () => navigate('/register') }>Sign up</p>
            <p id="fp" style={{display: "inline", float:'right',textDecoration:'underline'}}>Forget password?</p>      
            <br></br><br></br>
            <button id="st" onClick={handleClick}>Get started</button>
           </div>
        </div>
    );
};
export default  Login;
