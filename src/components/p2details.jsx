import React from 'react';
import p2img from '../assets/Dog2.png';
import '../css/details.css';
import { useNavigate } from 'react-router-dom';
const P3details = () => {
    const navigate=useNavigate();
  return (
    <div className='Detailspage'>
       <h1 style={{position:'relative', marginLeft:'5%', float:'left',cursor:'pointer',color:'black'}} onClick={()=>navigate('/petfantasy')}><i>Car Fantasys</i></h1>
        <br></br>
        <div className='pd1bx'>
      <img src={p2img} width={700} height={400} alt='Dog'/>
      <div className='c1'>
        <h3>Range Rover</h3>
        <p>Evoque</p>
        <p>Price: 66.lacs</p>
        <p>Location: Hyderabad</p>  <div className='rating'>
          <p style={{color:'black' ,cursor:'pointer'}} onClick={()=>navigate('/cart')}>Add to cart</p>
          </div>
        </div>
    </div>
    </div>
  )
};

export default P3details;