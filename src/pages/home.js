import '../styles/home.css'

const Home = (props) => {

    return(
        <main className="holder">
        <div className="titulo_home">
            <p>NO TE CUELGUES CON EL HOT WEEK!</p>
        </div>

        <div className="ofertas_1">
            <img src="./imagenes/CAMPERAS.jpg" alt="camperas.jpg" width="240px"/>
            <img src="./imagenes/ZAPATILLAS.jpg" alt="zapatillas.jpg" width="240px"/>
        </div>

        <div className="ofertas_2">
            <img src="./imagenes/SWEATERS.jpg" alt="sweaters.jpg" width="250px"/>
        </div>

        <div className="titulo_home">
            <a><p>VER COLECCIÓN</p></a>
        </div>



    </main>
    )


}

export default Home