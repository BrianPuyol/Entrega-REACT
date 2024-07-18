import { Link } from "react-router-dom" //importamos links

const Nav = (props) => {
    return (
         <nav>
             <ul className="holder">
             <li className="activo rectangulo_1"><Link to="/">HOME</Link></li>
             <li className="rectangulo_2"><Link to="/shop">SHOP</Link></li>
             <li className="rectangulo_3"><Link to="/locales">LOCALES</Link></li>
             <li className="rectangulo_4"><Link to="/nosotros">NOSOTROS</Link></li>
        </ul>
        </nav >
    )
}

export default Nav