import React, { use, useState } from 'react';
import '../css/sellcss.css';
const Sell = () => {

  const [image, setImageURL] = useState(null);
  const [image1, setImageURL1] = useState(null);

  const [brandname, setBrandname] = useState(null);
  const [model, setModel] = useState(null);
  const [price, setPrice] = useState(null);
  const [location, setLocation] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type.startsWith('image/')) {
      const imagePreviewURL = URL.createObjectURL(file);
      setImageURL(imagePreviewURL);
      console.log('Preview URL:', imagePreviewURL);
    }
    else {
      alert('Please select a valid image file.');
    }
  }
  const handleImageChange1 = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const imagePreviewURL1 = URL.createObjectURL(file);
      setImageURL1(imagePreviewURL1);
    }
  }
  async function handleForm(event) {
    event.preventDefault();
    if (!brandname || !model || !price || !location || !image || !image1) {
      alert('Please fill in all fields and upload images.');
      return;
    }
    try {
      const response = await fetch('http://localhost:8080/home/sell', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          brandname,
          model,
          price,
          location,
          image,
          image1
        }),
      });
      if (response.ok) {
        alert('Car details submitted successfully!');
      } else {
        alert('Failed to submit car details.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form.');
    }

  }
  return (
    <div className='sell-container'>
      <h1 style={{ position: 'fixed', marginLeft: '3%', cursor: 'pointer', color: 'black', fontSize: 'xx-large', color: 'Red' }}><i style={{ textDecoration: 'underline black' }}>Cars<i style={{ color: 'black', textDecoration: 'underline red' }}>Fantasy</i></i></h1><br></br>
      <form className="sell-form">
        <h2 style={{ textAlign: 'left', marginLeft: '10%' }}>Sell Your Premium Car</h2>
        <input type="text" className="sell-input" placeholder='Brandname' value={brandname} onChange={(event) => { setBrandname(event.target.value) }} />
        <br></br>
        <input type="text" className="sell-input" placeholder='Model' value={model} onChange={(event) => { setModel(event.target.value) }} />
        <br></br>
        <input type="integer" className="sell-input" placeholder='Price' value={price} onChange={(event) => { setPrice(event.target.value) }} />
        <br></br>
        <input type="text" className="sell-input" placeholder='Location' value={location} onChange={(event) => { setLocation(event.target.value) }} />
        <button onClick={handleForm} style={{
          width: '150px', height: '40px', borderRadius: '5px',
          marginLeft: '90%', marginTop: '5%', fontSize: 'large', border: '1px solid red', cursor: 'pointer'
        }}>SELL</button>
      </form>
      <div className='sell-image-container'>
        <h2>Upload the Frontview of Car</h2>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {image && (
          <div>
            <img src={image} alt="Selected" style={{ width: '300px', borderRadius: '10px' }} />
          </div>)}
        <h2>Upload the Backview of Car</h2>
        <input type='file' accept='image/*' onChange={handleImageChange1} />
        {image1 && (<div>
          <img src={image1} alt="Selected" style={{ width: '300px', borderRadius: '10px' }} />
        </div>)}

      </div>
    </div>
  )
}

export default Sell
