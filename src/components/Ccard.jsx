import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/pets.css';
import dog1 from '../assets/Dog1.jpg';
import dog2 from '../assets/Dog2.jpg';
import dog3 from '../assets/Dog3.jpg';
import dog4 from '../assets/Dog4.jpg'; 
const Ccard = () => {
    const navigate=useNavigate();
  return (
    <div>
      <div className='Dcard'>
                < div className='petmg'>
                    <div className='petimg1'>
                         <img src={dog1} width={150} height={200} alt='Dog'/>
                        <div className='petbx' onClick={()=>navigate('/p1details')}>
                            <h1>Dog</h1>
                            <p>Breed: Labrador</p>
                            <p>Age: 2 years</p>
                            <p>Price: $500</p>
                            <p style={{color:'black',textDecoration:'underline'}} onClick={()=>navigate('/cart')}>Add to cart</p>
                    </div>
                        
                    </div> 
                    <div className='petimg1' onClick={()=>navigate('/p2details')}>
                         <img src={dog2} width={150} height={200} alt='Dog'/>
                        <div className='petbx'>
                            <h1>Dog</h1>
                            <p>Breed: Beagle</p>
                            <p>Age: 3 years</p> 
                            <p>Price: $400</p>
                            <p style={{color:'black',textDecoration:'underline'}} onClick={()=>navigate('/cart')}>Add to cart</p>
                        </div>
                    </div> 
                    <div className='petimg1' onClick={()=>navigate('/p3details')}>
                         <img src={dog3} width={150} height={200} alt='Dog' />
                        <div className='petbx'>
                            <h1>Dog</h1>
                            <p>Breed: Bulldog</p>
                            <p>Age: 4 years</p>
                            <p>Price: $600</p>
                            <p style={{color:'black',textDecoration:'underline'}} onClick={()=>navigate('/cart')}>Add to cart</p>
                        </div>
                    </div> 
                    <div className='petimg1' onClick={()=>navigate('/p4details')}>
                         <img src={dog4} width={150} height={200} alt='Dog'/>
                        <div className='petbx'>
                            <h1>Dog</h1>
                            <p>Breed: Poodle</p>
                            <p>Age: 1 year</p>
                            <p>Price: $700</p>
                            <p style={{color:'black',textDecoration:'underline'}} onClick={()=>navigate('/cart')}>Add to cart</p>
                        </div>
                    </div> 
                </div>
            </div>
    </div>
  )
};

export default Ccard;
