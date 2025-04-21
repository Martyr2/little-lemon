import HeroImage from "../HeroImage/HeroImage";
import wings from "../../assets/wings-flatbread.jpg";
import { Link } from "react-router";

const Order = () => {
    const styles = {
        textAlign: 'center'
    }

    return (
        <main>
            <HeroImage image={wings}>
                <h1 className="shaded-heading">Order Online</h1>
            </HeroImage>
            <section className="main-body">
                <h2>Order Online</h2>
                <div style={styles}>
                    <p>Thank you for your interested in ordering online. We currently do not accept online orders, but will starting in the Fall. We look forward to serving you!</p>

                    <Link to="/reservations"><button className="btn-primary">Reserve a Table</button></Link>
                </div>
            </section>
        </main>
    )
}

export default Order;