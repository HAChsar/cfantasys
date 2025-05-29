import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/pets.css';
import dog1 from '../assets/Dog1.png';
import dog2 from '../assets/Dog2.png';
import dog3 from '../assets/Dog3.png';
import Cimg from './c1-carousel';
const Dcard = () => {
    const navigate=useNavigate();
  return (
      <div className='Dcard'>
                <h2><em>Choose your <i style={{color:'red'}}>Fantasy Car</i></em></h2>
                < div className='petmg'>
                    <div className='petimg1'  onClick={()=>navigate('/p1details')}>
                         <img src={dog1} width={150} height={200} alt='Dog'/>
                        <div className='petbx'>
                        <h3 typeof='input'>Ford Mustang</h3>
                        <p>Shekby GT500</p>
                        <p>Price: 71.7lacs</p>
                        <p>Location: Hyderabad</p>
                        <br></br>
                        <p id='d' style={{color:'silver'}} onClick={()=>navigate('/cart')}>Add to cart</p>
                    </div>
                    </div> <br></br>
                    <div className='petimg1' onClick={()=>navigate('/p2details')}>
                         <img src={dog2} width={150} height={200} alt='Dog'/>
                        <div className='petbx'>
                        <h3>Range Rover</h3>
                        <p>Evoque</p>
                        <p>Price: 66.lacs</p>
                        <p>Location: Hyderabad</p>
                        <br></br>
                        <p id='d' style={{color:'silver'}} onClick={()=>navigate('/cart')}>Add to cart</p>
                        </div>
                    </div> <br></br>
                    <div className='petimg1' onClick={()=>navigate('/p3details')}>
                         <img src={dog3} width={150} height={200} alt='Dog' />
                        <div className='petbx'>
                        <h3>Audi</h3>
                        <p>Q5 SUV</p>
                        <p>Price: 86.5lacs</p>
                        <p>Location: Mysore</p>
                        <br></br>
                        <br></br>
                        <p id='d' style={{color:'silver'}} onClick={()=>navigate('/cart')}>Add to cart</p>
                        </div>
                    </div><br></br>
                    <div className='petimg1' onClick={()=>navigate('/p4details')}>
                        <Cimg/>
                        <div className='petbx'>
                        <h3>Audi</h3>
                        <p>A5 SEDAN</p>
                        <p>Price: 47.1</p>
                        <p>Location: Trichy</p>
                        <br></br>
                        <br></br>
                        <p id='d' style={{color:'silver'}} onClick={()=>navigate('/cart')}>Add to cart</p>
                        </div>
                    </div> 
                </div>
            </div>
  )
};

export default Dcard;
