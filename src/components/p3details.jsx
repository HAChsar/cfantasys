import React from 'react'
import p3img from '../assets/Dog3.png';
import '../css/details.css';
import { useNavigate } from 'react-router-dom';
const P3details = () => {
    const navigate=useNavigate();
  return (
    <div className='Detailspage'>
<h1 style={{position:'relative', marginLeft:'5%', float:'left',cursor:'pointer',color:'black'}} onClick={()=>navigate('/petfantasy')}><i style={{textDecoration:'underline red'}}>Car</i><i style={{color:'red',textDecoration:'underline black'}}>Fantasys</i></h1>        <br></br>
        <div className='pd1bx'>
      <img src={p3img} width={800} height={400} alt='Dog'/>
      <div className='c1'>
        <h3>Audi</h3>
        <p>Q5 SUV</p>
        <p>Price: 86.5lacs</p>
        <p>Location: Mysore</p>
          <div className='rating'>
          <p style={{color:'black' ,cursor:'pointer'}} onClick={()=>navigate('/cart')}>Add to cart</p>
          </div>
        </div>
    </div>
    </div>
  )
};

export default P3details;