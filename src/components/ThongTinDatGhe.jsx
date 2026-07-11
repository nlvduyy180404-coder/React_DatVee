import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { huyDatGhe } from '../redux/seatSlice';

export default function ThongTinDatGhe() {
  const danhSachGheDangDat = useSelector((state) => state.seats.danhSachGheDangDat);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="legend">
        <div className="legend-item">
          <div className="legend-color gheDuocChon"></div>
          <span>Ghế đã đặt</span>
        </div>
        <div className="legend-item">
          <div className="legend-color gheDangChon"></div>
          <span>Ghế đang chọn</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ border: '3px solid orange', width: '30px', height: '30px', borderRadius: '5px' }}></div>
          <span>Ghế chưa đặt</span>
        </div>
      </div>

      <div className="mt-5" style={{marginTop: '30px'}}>
        <table className="table-bordered">
          <thead>
            <tr>
              <th>Số ghế</th>
              <th>Giá</th>
              <th>Huỷ</th>
            </tr>
          </thead>
          <tbody>
            {danhSachGheDangDat.map((ghe, index) => {
              return (
                <tr key={index}>
                  <td style={{ color: 'orange' }}>{ghe.soGhe}</td>
                  <td style={{ color: 'orange' }}>{ghe.gia.toLocaleString()}</td>
                  <td>
                    <button
                      onClick={() => {
                        dispatch(huyDatGhe(ghe.soGhe));
                      }}
                      style={{ color: 'red', cursor: 'pointer', background: 'none', border: 'none', fontSize: '20px', fontWeight: 'bold' }}
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td>Tổng tiền</td>
              <td style={{ color: 'orange' }}>
                {danhSachGheDangDat.reduce((tongTien, ghe) => {
                  return (tongTien += ghe.gia);
                }, 0).toLocaleString()}
              </td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
