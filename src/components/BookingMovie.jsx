import React from 'react';
import danhSachGheData from '../data/danhSachGhe.json';
import HangGhe from './HangGhe';
import ThongTinDatGhe from './ThongTinDatGhe';

export default function BookingMovie() {
  const renderHangGhe = () => {
    return danhSachGheData.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };

  return (
    <div className="bookingMovie">
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'row', gap: '50px', padding: '0 20px' }}>
        <div style={{ flex: '2', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1 style={{ color: 'orange', fontSize: '35px', textAlign: 'center', marginBottom: '10px' }}>
            ĐẶT VÉ XEM PHIM CYBERLEARN.VN
          </h1>
          <div style={{ color: 'white', fontSize: '25px', marginBottom: '10px' }}>
            Màn hình
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <div className="screen"></div>
            {renderHangGhe()}
          </div>
        </div>
        
        <div style={{ flex: '1', paddingTop: '50px' }}>
          <h2 style={{ color: 'white', fontSize: '25px', textAlign: 'center', marginBottom: '30px' }}>
            DANH SÁCH GHẾ BẠN CHỌN
          </h2>
          <ThongTinDatGhe />
        </div>
      </div>
    </div>
  );
}
