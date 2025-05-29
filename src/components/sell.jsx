import React, { useState } from 'react';
import '../css/sellcss.css';
const Sell = () => {

    const [image, setImageURL] = useState(null);

  const handleImageChange = (e) => 
  {
    const file = e.target.files[0];
     if (file && file.type.startsWith('image/')) 
    {
      const imagePreviewURL = URL.createObjectURL(file);
      setImageURL(imagePreviewURL);
      console.log('Preview URL:', imagePreviewURL);
    } 
    else 
    {
      alert('Please select a valid image file.');
    }
  }
  return (
    <div className='sell-container'>
      <h1 style={{position:'fixed', marginLeft:'5%', cursor:'pointer',color:'black',fontSize:'xx-large',color:'Red'}}><i style={{textDecoration:'underline black'}}>Car <i style={{color:'black' ,textDecoration:'underline red'}}>Fantasys</i></i></h1><br></br>
        <form className="sell-form">
        <input type="text" className="sell-input" placeholder='Brandname'/>
        <br></br>
        <input type="text" className="sell-input" placeholder='Model'/>
        <br></br>
        <input type="integer"className="sell-input" placeholder='Price'/>
        <br></br>   
        <input type="text" className="sell-input" placeholder='Location'/>

      </form>
      <div style={{ textAlign: 'center' }}>
      <h2>Select Image</h2>
      <input type="file" accept="image/*" onChange={handleImageChange}/>
      {image && (
        <div style={{ marginTop: '20px' }}>
          <img src={image} alt="Selected" style={{ width: '300px', borderRadius: '10px' }} />
        </div>
      )}
    </div>
    </div>
  )
}

export default Sell
