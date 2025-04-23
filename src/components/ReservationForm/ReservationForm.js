import { useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

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

  const [errors, setErrors] = useState({
    firstname: "", 
    lastname: "", 
    email: "", 
    tel: "", 
    people: "", 
    date: "", 
    occasion: "", 
    preferences: "", 
    comments: ""
  });

  const [reservationTime, setReservationTime] = useState(
    props.availableTimes.map((times, index) => <option key={index}>{times}</option>)
  );

  function handleDateChange(e) {
    setDate(e.target.value);
    
    const date = new Date(e.target.value);

    props.updateTimes(date);

    setReservationTime(props.availableTimes.map((times, index) => <option key={index}>{times}</option>));
  }

  function handleSubmit(e) {
    e.preventDefault();

    let validationErrors = {};

    // Validate the form useState values
    if (firstName.length < 2 || firstName.length > 50) {
      validationErrors.firstname = "Please enter a valid first name.";
    }

    if (lastName.length < 2 || lastName.length > 50) {
      validationErrors.lastname = "Please enter a valid last name.";
    }

    if (email.length < 4 || email.length > 200 || !email.includes("@")) {
      validationErrors.email = "Please enter a valid email.";
    }

    if (tel.length < 10 || tel.length > 25) {
      validationErrors.tel = "Please enter a valid telephone.";
    }

    if (people < 1 || people > 100) {
      validationErrors.people = "Please specify a valid number of people.";
    }

    // validate if date is a date
    const dateCheck = new Date(date);

    if (isNaN(dateCheck.getTime()) || dateCheck < new Date()) {
      validationErrors.date = "Please enter a valid date.";
    }

    // How to check if occassion is in a list of values
    if (!["Birthday", "Anniversary", "Engagement", "", "Other"].includes(occasion)) {
      validationErrors.occasion = "Please enter a valid occasion.";
    }

    // How ot check if preferences is in a list of values
    if (!["Indoors", "Outdoor (Patio)", "Outdoor (Sidewalk)", ""].includes(preferences)) {
      validationErrors.preferences = "Please enter valid preferences.";
    }

    if (comments.length < 8 || comments.length > 50) {
      validationErrors.comments = "Please enter between 8 and 50 characters.";
    }

    if (!Object.values(validationErrors).every((error) => error === "")) {
      setErrors(validationErrors);
      return;
    }

    props.submitForm({ firstName, lastName, email, tel, people, date, occasion, preferences, comments });
  }

  const handleFieldChange = (field) => {
    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

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
            onChange={(e) => { setFirstName(e.target.value); handleFieldChange("firstname"); }}
          ></input>
          { errors.firstname && <ErrorMessage message={errors.firstname} /> }
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
            onChange={(e) => { setLastName(e.target.value); handleFieldChange("lastname"); }}
          ></input>
          { errors.lastname && <ErrorMessage message={errors.lastname} /> }
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
            onChange={(e) => { setEmail(e.target.value); handleFieldChange("email"); }}
          ></input>
          { errors.email && <ErrorMessage message={errors.email} /> }
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
            onChange={(e) => { setTel(e.target.value); handleFieldChange("tel"); }}
          ></input>
          { errors.tel && <ErrorMessage message={errors.tel} /> }
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
            onChange={(e) => { setPeople(e.target.value); handleFieldChange("people"); }}
          ></input>
          { errors.people && <ErrorMessage message={errors.people} /> }
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
            onChange={(e) => { handleDateChange(e); handleFieldChange("date"); }}
          ></input>
          { errors.date && <ErrorMessage message={errors.date} /> }
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
          <select id="occasion" value={occasion} onChange={(e) => { setOccasion(e.target.value); handleFieldChange("occasion"); }}>
            <option>None</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Engagement</option>
            <option>Other</option>
          </select>
          { errors.occasion && <ErrorMessage message={errors.occasion} /> }
        </div>        
      </div>

      <div className="input-row">
        <div className="input-group">
          <label htmlFor="preferences">Seating preferences</label>
          <select id="preferences" value={preferences} onChange={(e) => { setPreferences(e.target.value); handleFieldChange("preferences"); }}>
            <option>None</option>
            <option>Indoors</option>
            <option>Outdoor (Patio)</option>
            <option>Outdoor (Sidewalk)</option>
          </select>
          { errors.preferences && <ErrorMessage message={errors.preferences} /> }
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
            onChange={(e) => { setComments(e.target.value); handleFieldChange("comments"); }}
          ></textarea>
          { errors.comments && <ErrorMessage message={errors.comments} /> }
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <small>
          <p>
            Note: You cannot edit your reservation after submission. Please
            double-check your answer before submitting your reservation request.
          </p>
        </small>
        <button className="btn-primary" onClick={handleSubmit}>
          Book Table
        </button>
      </div>
    </form>
  );
};

export default ReservationForm;