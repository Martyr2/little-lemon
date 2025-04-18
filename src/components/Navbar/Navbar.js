import { Link } from "react-router";
import logo from "../../assets/little-lemon-logo-sm.jpg";

const Navbar = () => {
    return (
        <nav>
            <Link to="/"><img src={logo} alt="Little Lemon Home" className="logo"/></Link>
            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/reservations">Reservations</Link>
                <Link to="/order">Order Online</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    )
}

export default Navbar;