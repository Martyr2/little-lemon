import HeroImage from "../HeroImage/HeroImage";
import pasta from "../../assets/pasta-plate.jpg";

const Reservation = () => {
    return (
        <main>
            <HeroImage image={pasta}>
                <h1>Reservations</h1>
            </HeroImage>
            <section>
                <p>This is the reservations page</p>
            </section>
        </main>
    )
}

export default Reservation;