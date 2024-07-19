import '../styles/shop.css'

const Shop = (props) => {

    return(
<main className="holder">
        <div className="titulo_shop">
            <p>TENEMOS LA ROPA MÁS ABRIGADA</p>
        </div>

        <div className="ropa">
            <img src="./imagenes/caret-up-solid.svg" alt="flecha" width="20px"/>
            <img src="./imagenes/foto 1.png" alt="foto1" width="200px"/>
            <img src="./imagenes/foto 2.png" alt="foto2" width="200px"/>
            <img src="./imagenes/caret-up-solid.svg" alt="flecha" width="20px"/>
        </div>

        <div className="titulo_shop">
            <p>TODOS LOS TALLES Y MODELOS DISPONIBLES</p>
        </div>

    </main>
    )


}

export default Shop