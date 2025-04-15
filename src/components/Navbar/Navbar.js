import { Link } from "react-router";

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/reservations">Reservations</Link>
            <Link to="/order">Order Online</Link>
            <Link to="/login">Login</Link>
        </nav>
    )
}

export default Navbar;