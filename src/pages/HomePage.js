import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../components/HomePage.css';
import logo from '../assets/logo.png';
import proyektorImg from '../assets/proyektor.png';
import laptopImg from '../assets/laptop.png';
import kameraImg from '../assets/kamera.png';
import speakerImg from '../assets/speaker.png';
import Form from '../pages/Form.js';

const HomePage = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  // Contoh daftar barang
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

  return (
    <div className="container">
      <img src={logo} alt="Campus News Logo" className="logo" />  {/* Use logo */}
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
      {selectedItem && <Form />}
    </div>
  );
}

export default HomePage;
