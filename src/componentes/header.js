const Header = (props) => {
    return (
        <header className="holder">
            <div className="iconos">
                <div className="icono_1">
                    <a href="#"><img src="./imagenes/bars-solid.svg" alt="barras" width="25px" /></a>
                </div>

                <div className="icono_2">
                    <a href="#"><img src="./imagenes/magnifying-glass-solid.svg" alt="busqueda" width="25px" /></a>
                </div>

                <div className="icono_3">
                    <img src="./imagenes/Lovepik_com-401646822-winter-penguin.png" alt="pinguino" width="125px" />
                </div>

                <div className="icono_4">
                    <a href="#"><img src="./imagenes/user-solid.svg" alt="usuario" width="25px" /></a>
                </div>

                <div className="icono_5">
                    <a href="#"><img src="./imagenes/shopify.svg" alt="shopping" width="25px" /></a>
                </div>
            </div>
        </header>
    )
}

export default Header