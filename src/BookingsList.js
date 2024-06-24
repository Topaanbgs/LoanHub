import React, { useEffect, useState } from 'react';
import { db } from './firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';

function BookingsList({ selectedDate }) {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const q = query(collection(db, 'bookings'), where('date', '==', selectedDate));
      const querySnapshot = await getDocs(q);
      const bookingsList = [];
      querySnapshot.forEach((doc) => {
        bookingsList.push({ id: doc.id, ...doc.data() });
      });
      setBookings(bookingsList);
    };

    if (selectedDate) {
      fetchBookings();
    }
  }, [selectedDate]);

  return (
    <div className="bookings-list">
      <h2>Bookings for {selectedDate}</h2>
      {bookings.length > 0 ? (
        <ul>
          {bookings.map(booking => (
            <li key={booking.id}>
              {booking.user} booked {booking.item}
            </li>
          ))}
        </ul>
      ) : (
        <p>No bookings for this date.</p>
      )}
    </div>
  );
}

export default BookingsList;
