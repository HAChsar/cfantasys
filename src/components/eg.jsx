import React from "react";
import { Carousel } from "react-responsive-carousel";

const ImageCarousel = () => {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="d-block w-100 p-5 bg-primary text-white text-center">Slide 1</div>
      </div>
      <div className="carousel-item">
        <div className="d-block w-100 p-5 bg-success text-white text-center">Slide 2</div>
      </div>
      <div className="carousel-item">
        <div className="d-block w-100 p-5 bg-danger text-white text-center">Slide 3</div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span className="carousel-control-next-icon"></span>
    </button>
  </div>
  );
};

export default ImageCarousel;