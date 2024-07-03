// src/components/Form.js
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import '../components/Form.css';

const BorrowForm = () => {
  const [nama, setNama] = useState('');
  const [nim, setNim] = useState('');
  const [fakultas, setFakultas] = useState('');
  const [programStudi, setProgramStudi] = useState('');
  const [semester, setSemester] = useState('');
  const [keperluan, setKeperluan] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'borrowRequests'), {
        nama,
        nim,
        fakultas,
        programStudi,
        semester,
        keperluan
      });
      alert('Pengajuan peminjaman berhasil');
      // Clear the form
      setNama('');
      setNim('');
      setFakultas('');
      setProgramStudi('');
      setSemester('');
      setKeperluan('');
    } catch (error) {
      alert('Terjadi kesalahan: ' + error.message);
    }
  };

  return (
    <div className='borrow-form-container'>
      <div className='borrow-form-wrapper'>
        <form onSubmit={handleSubmit}>
          <h1>Formulir Peminjaman Barang</h1>
          
          <div className="borrow-input-box">
            <label htmlFor="nama">Nama Lengkap</label>
            <input type="text" id="nama" name="nama" placeholder="Masukkan nama lengkap" value={nama} onChange={(e) => setNama(e.target.value)} required />
          </div>

          <div className="borrow-input-box">
            <label htmlFor="nim">NIM</label>
            <input type="text" id="nim" name="nim" placeholder="Masukkan NIM" value={nim} onChange={(e) => setNim(e.target.value)} required />
          </div>

          <div className="borrow-input-box">
            <label htmlFor="fakultas">Fakultas</label>
            <select id="fakultas" name="fakultas" value={fakultas} onChange={(e) => setFakultas(e.target.value)} required>
              <option value="">Pilih Fakultas</option>
              <option value="fakultas1">Fakultas 1</option>
              <option value="fakultas2">Fakultas 2</option>
              <option value="fakultas3">Fakultas 3</option>
            </select>
          </div>

          <div className="borrow-input-box">
            <label htmlFor="program-studi">Program Studi</label>
            <input type="text" id="program-studi" name="program-studi" placeholder="Masukkan program studi" value={programStudi} onChange={(e) => setProgramStudi(e.target.value)} required />
          </div>

          <div className="borrow-input-box">
            <label htmlFor="semester">Semester</label>
            <input type="text" id="semester" name="semester" placeholder="Masukkan semester" value={semester} onChange={(e) => setSemester(e.target.value)} required />
          </div>

          <div className="borrow-input-box">
            <label htmlFor="keperluan">Keterangan Keperluan</label>
            <textarea id="keperluan" name="keperluan" placeholder="Masukkan keterangan keperluan" value={keperluan} onChange={(e) => setKeperluan(e.target.value)} required></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BorrowForm;
