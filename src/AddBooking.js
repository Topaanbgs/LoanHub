import React, { useState } from 'react';
import { db } from './firebaseConfig'; // Pastikan jalur impor benar
import { collection, addDoc } from 'firebase/firestore';

const AddBooking = () => {
  const [booking, setBooking] = useState({
    user_id: '',
    item_id: '',
    start_date: '',
    end_date: ''
  });

  const handleChange = (e) => {
    setBooking({
      ...booking,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'bookings'), {
        user_id: booking.user_id,
        item_id: booking.item_id,
        start_date: new Date(booking.start_date),
        end_date: new Date(booking.end_date)
      });
      console.log('Booking added');
    } catch (error) {
      console.error('Error adding booking: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="user_id"
        placeholder="User ID"
        value={booking.user_id}
        onChange={handleChange}
      />
      <input
        type="text"
        name="item_id"
        placeholder="Item ID"
        value={booking.item_id}
        onChange={handleChange}
      />
      <input
        type="datetime-local"
        name="start_date"
        value={booking.start_date}
        onChange={handleChange}
      />
      <input
        type="datetime-local"
        name="end_date"
        value={booking.end_date}
        onChange={handleChange}
      />
      <button type="submit">Add Booking</button>
    </form>
  );
};

export default AddBooking;
