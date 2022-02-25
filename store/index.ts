import { configureStore } from "@reduxjs/toolkit";
import ImgSrcListReducer from "@/store/imgSrcList";
import StorageConfigReducer from "@/store/storageConfig";

export const store = configureStore({
  reducer: {
    imgSrcList: ImgSrcListReducer,
    storageConfig: StorageConfigReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AddDispatch = typeof store.dispatch;
