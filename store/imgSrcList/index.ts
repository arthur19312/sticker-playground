import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ImgSrcItemType, ImgSrcListType } from "@constants/imgSrc";

const initialState: ImgSrcListType = [];

export const ImgSrcListSlice = createSlice({
  name: "imgSrcList",
  initialState,
  reducers: {
    addItem: (state: ImgSrcListType, action: PayloadAction<ImgSrcItemType>) => {
      state.push(action.payload);
    },
    deleteItem: (state: ImgSrcListType, action: PayloadAction<string>) => {
      state = state.filter(({ id }) => id !== action.payload);
    },
    clear: (state: ImgSrcListType) => {
      state = [];
    },
  },
});

export const { addItem, deleteItem, clear } = ImgSrcListSlice.actions;
export default ImgSrcListSlice.reducer;
