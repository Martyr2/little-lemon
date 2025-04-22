import HeroImage from "../HeroImage/HeroImage";
import ReservationForm from "../ReservationForm/ReservationForm";

// Image assets
import reservations from "../../assets/reservations.jpg";

const Reservation = () => {
    const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    return (
        <main>
            <HeroImage image={reservations}>
                <h1 className="shaded-heading">Reservations</h1>
            </HeroImage>
            <section className="main-body">
                <h2>Reserve a Table</h2>
                <ReservationForm availableTimes={times}/>
            </section>
        </main>
    )
}

export default Reservation;