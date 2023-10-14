
import React from 'react'

const CarrouselDetails = () => {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
    <div className="carousel-inner rounded-md">
      <div className="carousel-item active">
        <img src="/image/maleta1.png" className="d-block w-100" alt="maleta1" />
      </div>
      <div className="carousel-item">
        <img src="/image/maleta2.png" className="d-block w-100" alt="maleta2" />
      </div>
      <div className="carousel-item">
        <img src="/image/maleta3.png" className="d-block w-100" alt="maleta3" />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default CarrouselDetails