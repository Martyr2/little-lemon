import { Link } from "react-router";
import HeroImage from "../HeroImage/HeroImage";

// Image assets
import wings from "../../assets/wings-flatbread.jpg";

const Order = () => {
    const styles = {
        textAlign: 'center'
    };

    return (
        <main>
            <HeroImage image={wings}>
                <h1 className="shaded-heading">Order Online</h1>
            </HeroImage>
            <section className="main-body">
                <h2>Order Online</h2>
                <div style={styles}>
                    <p>Thank you for your interested in ordering online. We currently do not accept online orders, but will starting in the Fall. We look forward to serving you!</p>

                    <Link to="/reservations"><button className="btn-primary" aria-label="Reserve a table at Little Lemon">Reserve a Table</button></Link>
                </div>
            </section>
        </main>
    );
};

export default Order;