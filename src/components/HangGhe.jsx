import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { datGhe } from '../redux/seatSlice';

export default function HangGhe({ hangGhe, soHangGhe }) {
  const dispatch = useDispatch();
  const danhSachGheDangDat = useSelector((state) => state.seats.danhSachGheDangDat);

  const renderGhe = () => {
    return hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = '';
      let disabled = false;
      
      // Ghế đã được người khác đặt
      if (ghe.daDat) {
        cssGheDaDat = 'gheDuocChon';
        disabled = true;
      }

      // Ghế đang được người dùng chọn
      let cssGheDangDat = '';
      const indexGheDangDat = danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
      );
      if (indexGheDangDat !== -1) {
        cssGheDangDat = 'gheDangChon';
      }

      return (
        <button
          onClick={() => {
            dispatch(datGhe(ghe));
          }}
          disabled={disabled}
          className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}
          key={index}
        >
          {ghe.daDat ? 'X' : ghe.soGhe}
        </button>
      );
    });
  };

  const renderSoHang = () => {
    return hangGhe.danhSachGhe.map((ghe, index) => {
      return (
        <span className="rowNumber" key={index}>
          {ghe.soGhe}
        </span>
      );
    });
  };

  if (soHangGhe === 0) {
    return (
      <div style={{ marginLeft: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <span className="firstChar">{hangGhe.hang}</span>
        {renderSoHang()}
      </div>
    );
  }

  return (
    <div style={{ marginLeft: '15px', marginTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <span className="firstChar">{hangGhe.hang}</span>
      {renderGhe()}
    </div>
  );
}
