import HeroImage from "../HeroImage/HeroImage";
import ReservationForm from "../ReservationForm/ReservationForm";
import { useReducer } from "react";
import { fetchAPI } from "../../api/bookingAPI";

// Image assets
import reservations from "../../assets/reservations.jpg";

const Reservation = () => {
    function updateTimes(date) {
        return fetchAPI(date);
    }
    
    // Initialize times
    const apiOutput = fetchAPI(new Date());
    const [availableTimes, dispatch] = useReducer(updateTimes, apiOutput);

    return (
        <main>
            <HeroImage image={reservations}>
                <h1 className="shaded-heading">Reservations</h1>
            </HeroImage>

            <section className="main-body">
                <h2>Reserve a Table</h2>
                <ReservationForm availableTimes={availableTimes} updateTimes={dispatch}/>
            </section>
        </main>
    )
}

export default Reservation;