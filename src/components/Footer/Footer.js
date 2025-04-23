import { Link } from "react-router";

// Image assets
import footerLogo from "../../assets/footer-logo.png";

const Footer = () => {
    return (
        <footer>
            <section className="footer-container">
                <div className="footer-nav">
                    <div className="footer-logo-container"><Link to="/"><img src={footerLogo} alt="Little Lemon Home" className="footer-logo"/></Link></div>
                    <div className="footer-column">
                        <h3>Navigation</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/menu">Menu</Link></li>
                            <li><Link to="/reservations">Reservations</Link></li>
                            <li><Link to="/order">Order Online</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Contact</h3>
                        <p>2395 Maldove Way,<br/>
                        Chicago, IL 60613</p>

                        <p>(629)-555-5555</p>

                        <p><a href="mailto:info@littlelemon.com">info@littlelemon.com</a></p>
                    </div>
                    <div className="footer-column">
                        <h3>Social Media</h3>
                        <ul>
                            <li><a href="https://www.instagram.com/Littlelemonmi/">Instagram</a></li>
                            <li><a href="https://www.facebook.com/p/Little-Lemon-100091290265246/">Facebook</a></li>
                            <li><Link to="/">Join Us</Link></li>
                        </ul>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;