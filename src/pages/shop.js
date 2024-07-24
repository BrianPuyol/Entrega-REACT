import { useState } from 'react'; //carrusel
import Carousel from 'react-bootstrap/Carousel'; //carrusel
import Ejemplo from '../imagenes/Ejemplo.png'
import '../styles/shop.css'

const Shop = (props) => {

    const [index, setIndex] = useState(0); //carrusel poner primero

    const handleSelect = (selectedIndex) => { //carrusel poner primero
        setIndex(selectedIndex);
    };


    return (
        <div className='contenedor'>
            <Carousel activeIndex={index} onSelect={handleSelect}>

                <Carousel.Item>
                    <img style={{ maxHeight: "100vh" }} className="d-block w-100" src={Ejemplo} alt='First slide' />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdu.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img style={{ maxHeight: "100vh" }} className="d-block w-100" src={Ejemplo} alt='Second slide' />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img style={{ maxHeight: "100vh" }} className="d-block w-100" src={Ejemplo} alt='Third slide' />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Shop