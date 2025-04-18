import HeroImage from "../HeroImage/HeroImage";
import reservations from "../../assets/reservations.jpg";

const Reservation = () => {
    return (
        <main>
            <HeroImage image={reservations}>
                <h1 className="shaded-heading">Reservations</h1>
            </HeroImage>
            <section className="main-body">
                <p>This is the reservations page</p>
            </section>
        </main>
    )
}

export default Reservation;