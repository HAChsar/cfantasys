import React from 'react'
import p1img from '../assets/Dog1.jpg';
import '../css/details.css';
import { useNavigate } from 'react-router-dom';
const P1details = () => {
    const navigate=useNavigate();
  return (
    <div className='Detailspage'>
       <h1 style={{position:'relative', marginLeft:'5%', float:'left',cursor:'pointer',color:'black'}} onClick={()=>navigate('/petfantasy')}><i>Car Fantasys</i></h1>
        <br></br>
        <div className='pd1bx'>
      <img src={p1img} width={600} height={400} alt='Dog'/>
        <h1>Labrador</h1>
        <p>Age: 2 years</p>
        <p>Price: $500</p>
        <p>Location: Hyderabad</p>
        <p style={{color:'black',textDecoration:'underline' ,cursor:'pointer'}} onClick={()=>navigate('/cart')}>Add to cart</p>
        < div className='desc'>
        <h2>Description</h2>
        <p>The Labrador Retriever is a friendly and outgoing breed known for its intelligence and loyalty. They are great family pets and are often used as service dogs due to their gentle nature.</p>
    
        </div>
    </div>
    </div>
  )
};

export default P1details;

