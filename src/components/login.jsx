import React from "react";
import '../css/logincss.css';
import img1 from '../assets/loginarrw.png';
import { useNavigate } from "react-router-dom";
import { useRef ,useState} from "react";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const Login =() => 
{
    const [showalert, setShowalert] = useState(null);
    const style=0;
    const navigate=useNavigate();
   
   
  
  const inputref = useRef(null);
  const handleKeyDown = () => {
    inputref.current.focus();
  };
  
    return (
        <div className="page">
            <h1 style={{position:'fixed', marginLeft:'5%', cursor:'pointer'}}
             className='title'><i style={{ color:'red',textDecoration:'underline black'}}>Cars</i><i style={{color:'black',textDecoration:'underline red'}}>Fantasy</i></h1>
            <div className='lbox' style={{marginleft:'10%'}}>
            <br></br>
            <img id='ig1'src={img1} width={25} height={25}/>
            <br></br>
            <h2><em>Sign in into Car Fantasys</em></h2>
            <p><i>Discover Your Fantasy car suits Your Life style</i></p>
            <input id='userid' type='text' placeholder=" Enter your mail Email"/>
            <br></br><br></br>
            <input id='userpw' type='password' placeholder="Password" ref={inputref}/>
            <br></br>
            <p style={{display: "inline", cursor:"pointer", float:'left', margin:'auto', marginLeft:'5%',textDecoration:'underline',color:'brown'}} onClick={ () => navigate('/register') }>Sign up</p>
            <p id="fp" style={{display: "inline", float:'right',textDecoration:'underline',color:'brown'}}>Forget password?</p>      
            <br></br><br></br>
            <button id="st" onClick={()=>{handleKeyDown();}}>Sign In</button>
            
        </div>
        </div>
    );
};
export default  Login;
