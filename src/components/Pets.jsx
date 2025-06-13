import React from 'react';
import '../css/pets.css';          
import Dcard from '../components/Dcard';
const Pets = () => 
{   
  return (
    <div className='pethome'>
<h1 style={{position:'relative', marginLeft:'5%', float:'left',color:'black'}} > <i style={{color:'red',textDecoration:'underline black'}}>Cars</i><i style={{color:'black',textDecoration:'underline red'}}>Fantasy</i></h1> <br></br>
        <div className='Dcard'>
        <br></br><br></br><br></br>
            <Dcard/>
        </div>
    </div>
  )
};

export default Pets;
