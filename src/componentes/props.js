import React, { useState } from 'react';

const PalermoCaballito = () => {
    const [location, setLocation] = useState('Palermo');

    const toggleLocation = () => {
        setLocation(prevLocation => (prevLocation === 'Palermo' ? 'Caballito' : 'Palermo'));
    };

    const getLocationDetails = (location) => {
        if (location === 'Palermo') {
            return {
                mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26271.37140689085!2d-58.4264174!3d-34.5917888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb577e0c5827d%3A0xe35d7ebc08b7f9bb!2sPalermo%2C%20CABA!5e0!3m2!1ses!2sar!4v1625656365041!5m2!1ses!2sar',
                Contenido: 'Nuestra sucursal principal donde siempre contamos con stock. Visitanos cuando quieras!'
            };
        } else {
            return {
                mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52558.28462988318!2d-58.445856069662515!3d-34.62075054970973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca536fd5d2a1%3A0xd9bbcf3ae8c5b8b!2sCaballito%2C%20CABA!5e0!3m2!1ses!2sar!4v1625656446907!5m2!1ses!2sar',
                Contenido: 'Inaguramos outlet con las mejores ofertas! Si querés ropa de abrigo a mitad de precio, ya sabes ;)'
            };
        }
    };

    const { mapSrc, Contenido } = getLocationDetails(location);

    return (
        <div id="content" className='contenedor'>
            <h1>Estamos en <span id="location" onClick={toggleLocation} style={{ cursor: 'pointer', textDecoration: 'none', color: 'lemonchiffon' }}> : {location}</span></h1>
            <div id="map">
                <iframe
                    src={mapSrc}
                    width="454"
                    height="270"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Maps"
                ></iframe>
            </div>
            <div id="info" className='info_estilo'>
                <p>{Contenido}</p>
            </div>
        </div>
    );
};

export default PalermoCaballito;