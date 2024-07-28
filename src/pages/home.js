import "slick-carousel/slick/slick.css";
// import React from "react";
import Slider from "react-slick";

import '../styles/home.css'
import '../../src/App.css'
// import img01 from '../imagenes/img01.jpg'
// import img02 from '../imagenes/img02.jpg'
// import img03 from '../imagenes/img03.jpg'


const Home = (props) => {

  var settings = {
    arrows: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="contenedor">
      <h3>Abrigate bien este invierno!</h3>
      <div className="carrusel">
      <Slider {...settings} className="carrusel">
        <img src="https://via.placeholder.com/228x343" alt="Img 01" />
        <img src="https://via.placeholder.com/228x343" alt="Img 02" />
        <img src="https://via.placeholder.com/228x343" alt="Img 03" />
      </Slider>
      <Slider {...settings} className="carrusel">
        <img src="https://via.placeholder.com/228x343" alt="Img 01" />
        <img src="https://via.placeholder.com/228x343" alt="Img 02" />
        <img src="https://via.placeholder.com/228x343" alt="Img 03" />
      </Slider>

      </div>
      <h3>No te quedes con las ganas</h3>
    </div>

  );
}


export default Home