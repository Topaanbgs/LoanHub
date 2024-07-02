import React from 'react';
import '../components/Form.css';

const BorrowForm = () => {
  return (
    <div className='borrow-form-container'>
      <div className='borrow-form-wrapper'>
        <form>
          <h1>Formulir Peminjaman Barang</h1>
          
          <div className="borrow-input-box">
            <label htmlFor="nama">Nama Lengkap</label>
            <input type="text" id="nama" name="nama" placeholder="Masukkan nama lengkap" required />
          </div>

          <div className="borrow-input-box">
            <label htmlFor="nim">NIM</label>
            <input type="text" id="nim" name="nim" placeholder="Masukkan NIM" required />
          </div>

          <div className="borrow-input-box">
            <label htmlFor="fakultas">Fakultas</label>
            <select id="fakultas" name="fakultas" required>
              <option value="">Pilih Fakultas</option>
              <option value="fakultas1">Fakultas 1</option>
              <option value="fakultas2">Fakultas 2</option>
              <option value="fakultas3">Fakultas 3</option>
              {/* Tambahkan opsi lainnya sesuai kebutuhan */}
            </select>
          </div>

          <div className="borrow-input-box">
            <label htmlFor="program-studi">Program Studi</label>
            <input type="text" id="program-studi" name="program-studi" placeholder="Masukkan program studi" required />
          </div>

          <div className="borrow-input-box">
            <label htmlFor="semester">Semester</label>
            <input type="text" id="semester" name="semester" placeholder="Masukkan semester" required />
          </div>

          <div className="borrow-input-box">
            <label htmlFor="keperluan">Keterangan Keperluan</label>
            <textarea id="keperluan" name="keperluan" placeholder="Masukkan keterangan keperluan" required></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BorrowForm;
