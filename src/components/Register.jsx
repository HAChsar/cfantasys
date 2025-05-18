import React from "react";
import { useState } from "react";
import '../css/logincss.css';
import img1 from '../assets/loginarrw.png';
import { useNavigate } from "react-router-dom";
import '../css/regcss.css';
import axios from "axios";
const Reg =() => 
{
    const navigate=useNavigate();
    const [username,setUsername]=useState("");
    const [userid,setUserid]=useState("");
    const [userpw,setUserpw]=useState("");

    async function save(event) {
        event.preventDefault();
        try {
          const response = await axios.post("http://localhost:8080/home/register", {
            username: username,
            userid: userid,
            userpw: userpw,
          });
          // Save user's name to local storage
          localStorage.setItem('username', username);
          localStorage.setItem('userid',userid);
          alert("Registration Successful");
          navigate('/');  // Navigate to home page or any other page you want
          return response;
        } catch (err) {
          alert(err);
        }
      }
    return (
        <div className="rpage">
           <div className="curtain">
        <div className="left-curtain"></div>
        <div className="right-curtain"></div>
        </div>
           <h1 onClick={()=> navigate('/')} style={{position:'fixed', marginLeft:'5%', cursor:'pointer'}} className='title'><i>Car Fantasys</i></h1>
           <div className='lbox'>
            <img id='ig1'src={img1} width={25} height={25}/>
            <h2>Register to Car Fantasys</h2>
            <p><i>Discover Your Fantasy car suits Your Life style</i></p>
            <input id='username' type='text' placeholder="Enter your name" required="*" 
            value={username} onChange={(event) =>{setUsername(event.target.value);}}/>
            <br></br><br></br>
            <input id='userid' type='email' placeholder=" Enter your mail Email" required="*"
            value={userid} onChange={(event) => {setUserid(event.target.value);}}/>
            <br></br><br></br>
            <input id='userpw' type='password' placeholder="Password" required="*"
            value={userpw} onChange={(event)=> {setUserpw(event.target.value)}}/>
            <br></br>
            <br></br>        
            <button id="st" onClick={save}>Register</button>
           </div>
        </div>
    );
};
export default  Reg;