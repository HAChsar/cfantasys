import { useNavigate } from "react-router-dom";
import  { useState, useEffect } from "react";
import imageR1 from '../assets/Dog4.png';
import imageR3 from '../assets/Dog4.1.png';
import imageR4 from "../assets/Dog4.2.png";
import imageR5 from "../assets/Dog4.3.png"; 
import imageR6 from "../assets/Dog4.4.png";      

const Cimg1 = () =>
{
    const navigate=useNavigate();
    const im = [
      { id: 1, image: imageR1 },
     
      { id: 2, image: imageR3 },
      { id :3, image: imageR4},
      { id :4, image: imageR5},
      { id :5, image: imageR6},
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          goToNextSlide();
        }, 3000); // Change slide every 3 seconds
    
        return () => clearInterval(interval);
      }, [currentIndex]);
    
      const goToNextSlide = () => {
        const nextIndex = (currentIndex + 1) % im.length;
        setCurrentIndex(nextIndex);
      };
    return(
    <>
    <div className="carousel-container"> 
      <div className="carousel">
        {im.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? "active" : ""}`}
          >
            {index === currentIndex && (
              <img src={slide.image} alt={`Slide ${index + 1}`} className="d-block w-100" width={700} height={400}/>
            )}
          </div>
        ))}
      </div>
      <div className="carousel-indicators">
        {im.map((_, index) => (
          <span 
            key={index}
            className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
            onClick={()=>goToNextSlide()}
          ></span>
        ))}
      </div>
    </div>
  </>
   );
};
export default Cimg1;