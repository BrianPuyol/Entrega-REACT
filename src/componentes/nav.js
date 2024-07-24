//import { Link } from "react-router-dom" //importamos links
import { NavLink } from "react-router-dom" //clase activo

const Nav = (props) => {
    return (
        <nav>
            <ul className="holder">
                <li className="rectangulo_1"><NavLink className={({ isActive }) => isActive ? "activo" : undefined} to="/">HOME</NavLink></li>
                <li className="rectangulo_2"><NavLink className={({ isActive }) => isActive ? "activo" : undefined}  to="/shop">SHOP</NavLink></li>
                <li className="rectangulo_3"><NavLink className={({ isActive }) => isActive ? "activo" : undefined}  to="/locales">LOCALES</NavLink></li>
                <li className="rectangulo_4"><NavLink className={({ isActive }) => isActive ? "activo" : undefined}  to="/nosotros">NOSOTROS</NavLink></li>
            </ul>
        </nav >
    )
}

export default Nav