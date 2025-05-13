import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/pets.css';
import dog1 from '../assets/Dog1.jpg';
import dog2 from '../assets/Dog2.jpg';
import dog3 from '../assets/Dog3.jpg';
import dog4 from '../assets/Dog4.jpg'; 
const Dcard = () => {
    const navigate=useNavigate();
  return (
      <div className='Dcard'>
                <h2><em>Choose your Fantasy Car</em></h2>
                < div className='petmg'>
                    <div className='petimg1'  onClick={()=>navigate('/p1details')}>
                         <img src={dog1} width={150} height={200} alt='Dog'/>
                        <div className='petbx'>
                        <h2>Labrador</h2>
                        <p>Age: 2 years</p>
                        <p>Price: $500</p>
                        <p>Location: Hyderabad</p>
                        <p id='d' style={{color:'black'}} onClick={()=>navigate('/cart')}>Add to cart</p>
                    </div>
                    </div> 
                    <div className='petimg1' onClick={()=>navigate('/p2details')}>
                         <img src={dog2} width={150} height={200} alt='Dog'/>
                        <div className='petbx'>
                        <h2>Spitz</h2>
                        <p>Age: 2 years</p>
                        <p>Price: $500</p>
                        <p>Location: Hyderabad</p>
                 
                        <p id='d' style={{color:'black'}} onClick={()=>navigate('/cart')}>Add to cart</p>
                        </div>
                    </div> 
                    <div className='petimg1' onClick={()=>navigate('/p3details')}>
                         <img src={dog3} width={150} height={200} alt='Dog' />
                        <div className='petbx'>
                        <h2>Poodle</h2>
                        <p>Age: 2 years</p>
                        <p>Price: $500</p>
                        <p>Location: Hyderabad</p>
                        <p id='d' style={{color:'black'}} onClick={()=>navigate('/cart')}>Add to cart</p>
                        </div>
                    </div> 
                    
                    <div className='petimg1' onClick={()=>navigate('/p4details')}>
                         <img src={dog4} width={150} height={200} alt='Dog'/>
                        <div className='petbx'>
                            <h2>Labradoodle</h2>
                            <p>Age: 2 years</p>
                        <p>Price: $500</p>
                        <p>Location: Hyderabad</p>
                  
                        <p id='d' style={{color:'black'}} onClick={()=>navigate('/cart')}>Add to cart</p>
                        </div>
                    </div> 
                </div>
            </div>
  )
};

export default Dcard;
