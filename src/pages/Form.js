// src/components/FormPeminjaman.js
import React, { useState } from 'react';
import '../components/Form.css';

const FormPeminjaman = () => {
  const [NamaLengkap, setNamaLengkap] = useState('');
  const [NIM, setNIM] = useState('');
  const [Prodi, setProdi] = useState('');
  const [Semester, setSemester] = useState('');
  const [KeteranganKeperluan, setKeteranganKeperluan] = useState('');
  const [notification, setNotification] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
    setNotification('Permintaan untuk peminjaman akan ditinjau. Terimakasih.');
    setTimeout(() => setNotification(''), 5000); // Hilangkan notifikasi setelah 5 detik
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-peminjaman">
        <h1>Form Peminjaman</h1>
        <table>
          <tbody>
            <tr>
              <td><label>Nama Lengkap :</label></td>
              <td><input type="text" value={NamaLengkap} onChange={(e) => setNamaLengkap(e.target.value)} required /></td>
            </tr>
            <tr>
              <td><label>NIM :</label></td>
              <td><input type="text" value={NIM} onChange={(e) => setNIM(e.target.value)} required /></td>
            </tr>
            <tr>
              <td><label>Prodi :</label></td>
              <td><input type="text" value={Prodi} onChange={(e) => setProdi(e.target.value)} required /></td>
            </tr>
            <tr>
              <td><label>Semester :</label></td>
              <td><input type="text" value={Semester} onChange={(e) => setSemester(e.target.value)} required /></td>
            </tr>
            <tr>
              <td><label>Keterangan Keperluan :</label></td>
              <td><textarea value={KeteranganKeperluan} onChange={(e) => setKeteranganKeperluan(e.target.value)} required /></td>
            </tr>
            <tr>
              <td colSpan="2"><button type="submit">Submit</button></td>
            </tr>
          </tbody>
        </table>
      </form>
      {notification && <div className="notification">{notification}</div>}
    </div>
  );
}

export default FormPeminjaman;
