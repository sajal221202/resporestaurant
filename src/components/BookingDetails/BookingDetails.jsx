/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable eol-last */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import './BookingDetails.css';
import toast from 'react-hot-toast';

const BookingDetails = () => {
  const [date, setDate] = useState('Today');
  const [guests, setGuests] = useState(2);
  const [meal, setMeal] = useState('Lunch');
  const [slot, setSlot] = useState(null);

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleGuestsChange = (event) => {
    setGuests(parseInt(event.target.value, 10));
  };

  const handleMealChange = (event) => {
    setMeal(event.target.value);
  };

  const handleSlotChange = (value) => {
    setSlot(value);
  };

  return (
    <div className="booking-details-container">
      <h2 className="booking-details-title">Select your booking details</h2>
      <div className="form-group">
        <label className="label" htmlFor="date">
          Date:
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={handleDateChange}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="guests">
          Guests:
        </label>
        <select
          id="guests"
          value={guests}
          onChange={handleGuestsChange}
          className="form-input"
        >
          <option value={2}>2 guests</option>
          <option value={3}>3 guests</option>
          <option value={4}>4 guests</option>
          <option value={5}>5 guests</option>
          {/* Add more guest options */}
        </select>
      </div>
      <div className="form-group">
        <label className="label" htmlFor="meal">
          Meal:
        </label>
        <select
          id="meal"
          value={meal}
          onChange={handleMealChange}
          className="form-input"
        >
          <option value="Lunch">Lunch</option>
          <option value="Brunch">Brunch</option>
          <option value="Dinner">Dinner</option>
          <option value="BreakFast">BreakFast</option>
          {/* Add more meal options */}
        </select>
      </div>

      <h3 className="slot-title">Select slot</h3>
      <div className="slot-container">
        <button
          onClick={() => handleSlotChange('5:00 PM')}
          disabled={slot === '5:00 PM'}
          className="slot-button"
        >
          5:00 PM
          <br />2 offers
        </button>
        <button
          onClick={() => handleSlotChange('5:30 PM')}
          disabled={slot === '5:30 PM'}
          className="slot-button"
        >
          5:30 PM
          <br />2 offers
        </button>
      </div>

      <button
        disabled={!slot}
        className="proceed-button"
        onClick={() => toast.success('Booking successful')}
      >
        Book Now
      </button>
    </div>
  );
};

export default BookingDetails;
