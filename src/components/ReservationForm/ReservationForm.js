import { useState } from "react";

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
    props.availableTimes.map((times, index) => <option key={index}>{times}</option>)
  );

  function handleDateChange(e) {
    setDate(e.target.value);
    
    const date = new Date(e.target.value);

    props.updateTimes(date);

    setReservationTime(props.availableTimes.map((times, index) => <option key={index}>{times}</option>));
  }

  return (
    <form className="reservation-form">
      <div className="input-row">
        <div className="input-group">
          <label htmlFor="firstName">First Name</label>
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

        <div className="input-group">
          <label htmlFor="lastName">Last Name</label>
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
      </div>

      <div className="input-row">
        <div className="input-group">
          <label htmlFor="email">Email</label>
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
      </div>

      <div className="input-row">
        <div className="input-group">
          <label htmlFor="phonenum">Phone Number</label>
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
      </div>

      <div className="input-row">
        <div className="input-group">
          <label htmlFor="people">Number of People</label>
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
      </div>

      <div className="input-row">
        <div className="input-group">
          <label htmlFor="date">Select Date</label>
          <input
            type="date"
            id="date"
            required
            value={date}
            onChange={handleDateChange}
          ></input>
        </div>
      </div>

      <div className="input-row">
        <div className="input-group">
          <label htmlFor="time">Select Time</label>
          <select id="time" required>
            {reservationTime}
          </select>
        </div>
      </div>

      <div className="input-row">
        <div className="input-group">
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
            <option>None</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Engagement</option>
            <option>Other</option>
          </select>
        </div>        
      </div>

      <div className="input-row">
        <div className="input-group">
          <label htmlFor="preferences">Seating preferences</label>
          <select id="preferences" value={preferences} onChange={(e) => setPreferences(e.target.value)}>
            <option>None</option>
            <option>Indoors</option>
            <option>Outdoor (Patio)</option>
            <option>Outdoor (Sidewalk)</option>
          </select>
        </div>
      </div>

      <div className="input-row">
        <div className="input-group">
          <label htmlFor="comments">Additional Comments</label>
          <textarea
            id="comments"
            rows={8}
            cols={50}
            placeholder="Additional Comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          ></textarea>
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <small>
          <p>
            Note: You cannot edit your reservation after submission. Please
            double-check your answer before submitting your reservation request.
          </p>
        </small>
        <button className="btn-primary" onClick={() => props.submitForm({firstName, lastName, email, tel, people, date, reservationTime, occasion, preferences, comments})}>
          Book Table
        </button>
      </div>
    </form>
  );
}

export default ReservationForm;