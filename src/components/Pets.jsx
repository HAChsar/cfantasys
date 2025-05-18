import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/pets.css';          
import Dcard from '../components/Dcard';
const Pets = () => 
{   
  return (
    <div className='pethome'>
      <h1 style={{position:'static', marginLeft:'5%', cursor:'pointer',color:'black',float:'left'}}><i>Car Fantasys</i></h1>
      <br></br>
        <div className='Dcard'>
        <br></br><br></br><br></br>
            <Dcard/>
        </div>
    </div>
  )
};

export default Pets;
