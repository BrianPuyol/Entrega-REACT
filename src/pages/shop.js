import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import React from "react";

import Form from 'react-bootstrap/Form';

import '../styles/shop.css'
import '../../src/App.css'
// import img01 from '../imagenes/img01.jpg'
// import img02 from '../imagenes/img02.jpg'
// import img03 from '../imagenes/img03.jpg'


const Shop = (props) => {

  var settings = {
    arrows: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="contenedor">

      <div className="busqueda">
        <h3>Busca lo que más te guste</h3>
        <Form className="buscador">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="camperas, pantalones, etc." />
          </Form.Group>
        </Form>
      </div>

      <div className="carrusel_shop">
        <Slider {...settings} className="carrusel">
          <img src="https://via.placeholder.com/225x300" alt="Img 01" />
          <img src="https://via.placeholder.com/225x300" alt="Img 02" />

        </Slider>
        </div>

    </div>
  );
}

export default Shop