import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StorageConfigType } from "@/constants/storageConfig";

const initialState: StorageConfigType = {
  useStorage: false,
  autoUpdateInterval: 1000 * 5 * 60,
};

export const StorageConfig = createSlice({
  name: "storageConfig",
  initialState,
  reducers: {
    setIfUseStorage: (
      state: StorageConfigType,
      action: PayloadAction<boolean>
    ) => {
      state.useStorage = action.payload;
    },
    setAutoUpdateInterval: (
      state: StorageConfigType,
      action: PayloadAction<number>
    ) => {
      state.autoUpdateInterval = action.payload;
    },
  },
});

export const { setIfUseStorage, setAutoUpdateInterval } = StorageConfig.actions;
export default StorageConfig.reducer;
