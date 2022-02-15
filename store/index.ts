import { configureStore } from "@reduxjs/toolkit";
import ImgSrcListReducer from "@store/imgSrcList";

export const store = configureStore({
  reducer: {
    imgSrcList: ImgSrcListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AddDispatch = typeof store.dispatch;
