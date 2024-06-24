import React, { useEffect, useState } from 'react';
import { db } from './firebaseConfig'; // Pastikan jalur impor benar
import { collection, getDocs } from 'firebase/firestore';

const BookingsList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const bookingsCollection = collection(db, 'bookings');
      const bookingsSnapshot = await getDocs(bookingsCollection);
      const bookingsList = bookingsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setBookings(bookingsList);
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <h2>Bookings</h2>
      <ul>
        {bookings.map(booking => (
          <li key={booking.id}>
            {booking.user_id} booked {booking.item_id} from {new Date(booking.start_date.seconds * 1000).toLocaleString()} to {new Date(booking.end_date.seconds * 1000).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingsList;
