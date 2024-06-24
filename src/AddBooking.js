import React, { useState } from 'react';
import { db } from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

function AddBooking({ selectedDate, availableItems }) {
  const [selectedItem, setSelectedItem] = useState('');
  const [userName, setUserName] = useState('');

  const handleAddBooking = async () => {
    if (selectedItem && userName) {
      try {
        await addDoc(collection(db, 'bookings'), {
          date: selectedDate,
          item: selectedItem,
          user: userName
        });
        alert('Booking added successfully!');
      } catch (error) {
        console.error('Error adding booking: ', error);
        alert('Failed to add booking.');
      }
    } else {
      alert('Please select an item and enter your name.');
    }
  };

  return (
    <div className="add-booking">
      <h2>Add Booking for {selectedDate}</h2>
      <label>
        Select Item:
        <select value={selectedItem} onChange={(e) => setSelectedItem(e.target.value)}>
          <option value="">Select an item</option>
          {availableItems.map(item => (
            <option key={item.id} value={item.name}>{item.name}</option>
          ))}
        </select>
      </label>
      <label>
        Your Name:
        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
      </label>
      <button onClick={handleAddBooking}>Add Booking</button>
    </div>
  );
}

export default AddBooking;
