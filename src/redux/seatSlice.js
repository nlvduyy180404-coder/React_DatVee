import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  danhSachGheDangDat: [],
};

const seatSlice = createSlice({
  name: 'seats',
  initialState,
  reducers: {
    datGhe: (state, action) => {
      const ghe = action.payload;
      const index = state.danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
      );
      if (index !== -1) {
        // Nếu đã có trong danh sách đang đặt thì xoá đi
        state.danhSachGheDangDat.splice(index, 1);
      } else {
        // Nếu chưa có thì thêm vào
        state.danhSachGheDangDat.push(ghe);
      }
    },
    huyDatGhe: (state, action) => {
      const soGhe = action.payload;
      state.danhSachGheDangDat = state.danhSachGheDangDat.filter(
        (gheDangDat) => gheDangDat.soGhe !== soGhe
      );
    }
  },
});

export const { datGhe, huyDatGhe } = seatSlice.actions;
export default seatSlice.reducer;
