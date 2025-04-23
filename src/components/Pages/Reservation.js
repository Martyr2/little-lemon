import HeroImage from "../HeroImage/HeroImage";
import ReservationForm from "../ReservationForm/ReservationForm";
import { useReducer } from "react";
import { fetchAPI, submitAPI } from "../../api/bookingAPI";
import { useNavigate } from "react-router";

// Image assets
import reservations from "../../assets/reservations.jpg";

const Reservation = () => {
    const navigate = useNavigate();

    // Update times based on date
    function updateTimes(date) {
        return fetchAPI(date);
    }

    // ReservationForm submits through this.
    function submitForm(formData) {
        const response = submitAPI(formData);

        if (response === true) {
            navigate("/confirmation");
        }
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
                <ReservationForm availableTimes={availableTimes} updateTimes={dispatch} submitForm={submitForm}/>
            </section>
        </main>
    );
};

export default Reservation;