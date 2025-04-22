import { useState } from "react";
import { Link } from "react-router";
import logo from "../../assets/little-lemon-logo-sm.jpg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAALRJREFUaEPtmFEOgCAMxeDk6sk18ZsQlg4Jpn6zN2yRJday+VM333/xBVYb1IAGIAGPEASIyzWAEcKAXxu4IZzs8ibsngFfIFlB2EBy/zlxv/6I5yBLTtVAMtBwnAbCyJILegaO5F407moFOIkp1kB9eBKfgfAvljb34y30BfpeDw1oABLwCEGAuNxJjBGOB4Qn8fZ/JcbZLFzpLbQQ/ttaAxqABDxCECAu1wBGCAM0AAHi8getngoxp6/MxgAAAABJRU5ErkJggg==";
    const closeIcon = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath transform='scale(0.75) translate(2.666,2.666)' d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e";

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav>
            <div className="menu-main">
                <Link to="/"><img src={logo} alt="Little Lemon Home" className="logo"/></Link>
                <img className="burger-icon" onClick={handleClick} src={isOpen ? closeIcon : openIcon} alt="Navigation Bar"/>
                <div className="menu">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/reservations">Reservations</Link>
                    <Link to="/order">Order Online</Link>
                    <Link to="/login">Login</Link>
                </div>
            </div>

            {isOpen &&
            <div className="menu-mobile">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/reservations">Reservations</Link>
                <Link to="/order">Order Online</Link>
                <Link to="/login">Login</Link>
            </div>}
        </nav>
    )
}

export default Navbar;