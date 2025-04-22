import { Link } from "react-router";
import HeroImage from "../HeroImage/HeroImage";

// Image assets
import confirmation from "../../assets/fireworks.jpg";

const Confirmation = () => {
    return (
        <main>
            <HeroImage image={confirmation}>
                <h1 className="shaded-heading">Confirmation</h1>
            </HeroImage>
            <section className="main-body">
                <div className="confirmation-container">
                    <h3>Your Reservation has been Confirmed!</h3>
                    <p>Details about your confirmation has been sent to you by email.</p>
                    <p>Thanks for booking with us. We will see you soon!</p>
                </div>

                <div className="confirmation-buttons">
                    <Link to="/"><button className="btn-primary">Home</button></Link>
                    <Link to="/menu"><button className="btn-primary">Our Menu</button></Link>
                </div>
            </section>
        </main>
    )
}

export default Confirmation;