import { useState } from "react";
import { Link } from "react-router";

const ReservationForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [people, setPeople] = useState(1);
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");
  const [preferences, setPreferences] = useState("");
  const [comments, setComments] = useState("");

  const [reservationTime, setReservationTime] = useState(
    props.availableTimes.map((times) => <option>{times}</option>)
  );

  function handleDateChange(e) {
    setDate(e.target.value);

    var stringify = e.target.value;
    const date = new Date(stringify);

    props.updateTimes(date);

    setReservationTime(props.availableTimes.map((times) => <option>{times}</option>));
  }

  return (
    <form className="reservation-form">
      <div>
        <label htmlFor="firstName">First Name</label> <br></br>
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          required
          minLength={2}
          maxLength={50}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label> <br></br>
        <input
          type="text"
          id="lastName"
          placeholder="Last Name"
          minLength={2}
          maxLength={50}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        ></input>
      </div>

      <div>
        <label htmlFor="email">Email</label> <br></br>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          required
          minLength={4}
          maxLength={200}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>

      <div>
        <label htmlFor="phonenum">Phone Number</label> <br></br>
        <input
          type="tel"
          id="phonenum"
          placeholder="(xxx)-xxx-xxxx"
          value={tel}
          required
          minLength={10}
          maxLength={25}
          onChange={(e) => setTel(e.target.value)}
        ></input>
      </div>

      <div>
        <label htmlFor="people">Number of People</label> <br></br>
        <input
          type="number"
          id="people"
          placeholder="Number of People"
          value={people}
          required
          min={1}
          max={100}
          onChange={(e) => setPeople(e.target.value)}
        ></input>
      </div>

      <div>
        <label htmlFor="date">Select Date</label> <br></br>
        <input
          type="date"
          id="date"
          required
          value={date}
          onChange={handleDateChange}
        ></input>
      </div>

      <div>
        <label htmlFor="time">Select Time</label> <br></br>
        <select id="time" required>
          {reservationTime}
        </select>
      </div>

      <div>
        <label htmlFor="occasion">Occasion</label> <br></br>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="preferences">Seating preferences</label> <br></br>
        <select
          id="preferences"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
        >
          <option>None</option>
          <option>Indoors</option>
          <option>Outdoor (Patio)</option>
          <option>Outdoor (Sidewalk)</option>
        </select>
      </div>

      <div>
        <label htmlFor="comments">Additional Comments</label> <br></br>
        <textarea
          id="comments"
          rows={8}
          cols={50}
          placeholder="Additional Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        ></textarea>
      </div>

      <div>
        <br></br>
        <small>
          <p>
            Note: You cannot edit your reservation after submission. Please
            double-check your answer before submitting your reservation request.
          </p>
        </small>
        <Link className="action-button" to="/confirmation">
          Book Table
        </Link>
      </div>
    </form>
  );
}

export default ReservationForm;