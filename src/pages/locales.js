import '../styles/locales.css'

const Locales = (props) => {

    return (
        <main>

            <div className="google_maps">
                <p>SIEMPRE TENÉS UN LOCAL CERCA!</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13134.375255143994!2d-58.40592325!3d-34.614431350000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaf26ba8c069%3A0x1e5838e3d5fe2c92!2sEstaci%C3%B3n%20Once!5e0!3m2!1ses!2sar!4v1721071765049!5m2!1ses!2sar" style={{ width: 450, height: 275, border: 0 }}></iframe>
                <p>
                    <label for="">Elegí tu ubicación</label>
                    <select name="">
                        <option value="zona_norte">Zona Norte</option>
                        <option value="zona_oeste">Zona Oeste</option>
                        <option value="zona_sur">Zona Sur</option>
                    </select>
                </p>
            </div>

        </main>
    )


}

export default Locales