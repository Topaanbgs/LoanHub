// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../components/HomePage.css';
import logo from '../assets/newlogo.png';
import proyektorImg from '../assets/proyektor.png';
import laptopImg from '../assets/laptop.png';
import kameraImg from '../assets/kamera.png';
import speakerImg from '../assets/speaker.png';
import BorrowForm from '../pages/Form';

const HomePage = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/login');
      }
    });
  }, [navigate]);

  const items = [
    { id: 1, name: 'Proyektor', img: proyektorImg },
    { id: 2, name: 'Laptop', img: laptopImg },
    { id: 3, name: 'Kamera', img: kameraImg },
    { id: 4, name: 'Speaker', img: speakerImg }
  ];

  const handleItemClick = (item) => {
    if (startDate && endDate) {
      setSelectedItem(item);
    } else {
      alert('Harap pilih tanggal peminjaman dan pengembalian terlebih dahulu.');
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login'); // Arahkan pengguna ke halaman login setelah logout
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };
  

  return (
    <div className="container">
      <button onClick={handleLogout} className="logout-button">Logout</button>
      <img src={logo} alt="Campus News Logo" className="logo" />
      <div className="calendar-container">
        <div className="calendar">
          <h2>Tanggal Peminjaman</h2>
          <DatePicker 
            selected={startDate} 
            onChange={(date) => setStartDate(date)} 
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Pilih tanggal peminjaman"
          />
        </div>
        <div className="calendar">
          <h2>Tanggal Pengembalian</h2>
          <DatePicker 
            selected={endDate} 
            onChange={(date) => setEndDate(date)} 
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText="Pilih tanggal pengembalian"
          />
        </div>
      </div>
      <div className="items-container">
        {items.map(item => (
          <div 
            key={item.id} 
            className="item-box"
            onClick={() => handleItemClick(item)}
            style={{ cursor: (startDate && endDate) ? 'pointer' : 'not-allowed' }}
          >
            <img src={item.img} alt={item.name} className="item-img" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      {selectedItem && (
        <BorrowForm 
          startDate={startDate} 
          endDate={endDate} 
          itemId={selectedItem.id} 
          itemName={selectedItem.name} 
        />
      )}
    </div>
  );
}

export default HomePage;
