import React from 'react'
import p1img from '../assets/Dog1.png';
import '../css/details.css';
import { useNavigate } from 'react-router-dom';
const P1details = () => {
    const navigate=useNavigate();
  return (
    <div className='Detailspage'>
       <h1 style={{position:'relative', marginLeft:'5%', float:'left',cursor:'pointer',color:'black'}} onClick={()=>navigate('/petfantasy')}><i>Car</i><i style={{color:'red'}}>Fantasys</i></h1>
        <br></br>
        <div className='pd1bx'>
      <img src={p1img} width={700} height={400} alt='Dog'/>
      <div className='c1'>
         <h3>Ford Mustang</h3>
          <p>Shelby GT500</p>
          <p>Price: 71.7lacs</p>
          <p>Location: Hyderabad</p>
          <div className='rating'>
          <p style={{color:'black' ,cursor:'pointer'}} onClick={()=>navigate('/cart')}>Add to cart</p>
          </div>
        </div>
    </div>
    </div>
  )
};

export default P1details;

