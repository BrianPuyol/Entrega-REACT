import '../styles/nosotros.css'

const Nosotros = (props) => {

    return (
        <main className="holder">

            <div className="titulo_nosotros1">
                <p>DESDE 2024 -</p>
                <img src="./imagenes/infinity-solid.svg" alt="infinto" width="35px" />
            </div>

            <div class="integrantes">
                <img src="./imagenes/user-solid.svg" alt="brian.jpg" width="100px"/>
                <div class="info">
                    <h4>Brian</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia sint quam nobis, veniam quasi eius rerum nesciunt impedit vero commodi velit, libero delectus voluptatibus perspiciatis, id harum eum odio. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div class="integrantes">
                <img src="./imagenes/user-solid.svg" alt="julian.jpg" width="100px"/>
                <div class="info">
                    <h4>Julian</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia sint quam nobis, veniam quasi eius rerum nesciunt impedit vero commodi velit, libero delectus voluptatibus perspiciatis, id harum eum odio.</p>
                </div>
            </div>
            <div class="integrantes">
                <img src="./imagenes/user-solid.svg" alt="maria.jpg" width="100px"/>
                <div class="info">
                    <h4>María</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia sint quam nobis, veniam quasi eius rerum nesciunt impedit vero commodi velit, libero delectus voluptatibus perspiciatis, id harum eum odio.</p>
                </div>
            </div>

            <div class="titulo_nosotros2">
                <p>DIRECTO DESDE EL PROVEEDOR Y AL COSTO</p>
            </div>

        </main>
    )
}

export default Nosotros