import React from 'react'
import p4img from '../assets/Dog4.png';
import '../css/details.css';
import { useNavigate } from 'react-router-dom';
import Cimg1 from './cimg1';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const P4details = () => {
    const navigate=useNavigate();
  return (
    <div className='Detailspage'>
<h1 style={{position:'relative', marginLeft:'5%', float:'left',cursor:'pointer',color:'black'}} onClick={()=>navigate('/petfantasy')}><i style={{textDecoration:'underline red'}}>Car</i><i style={{color:'red',textDecoration:'underline black'}}>Fantasys</i></h1>        <br></br>
        <div className='pd1bx'>
     <Cimg1/>
      <div className='c1'>
        <h3>Audi</h3>
        <p>A5 SEDAN</p>
        <p>Price: 47.1</p>
        <p>Location: Trichy</p>
        <div className='rating'>
          <p style={{color:'black' ,cursor:'pointer'}} onClick={()=>navigate('/cart')}>Add to cart</p>
          </div>

      </div>
    </div>
    </div>
  )
};

export default P4details;

