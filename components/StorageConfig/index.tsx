import { RootState } from "@/store";
import { useSelector, useDispatch } from "react-redux";
import { setIfUseStorage } from "@/store/storageConfig";
import styles from "./index.module.scss";

const StorageConfig = () => {
  const { useStorage, autoUpdateInterval } = useSelector(
    (state: RootState) => state.storageConfig
  );
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      Use storage
      <input
        type="checkbox"
        checked={useStorage}
        onChange={() => {
          dispatch(setIfUseStorage(!useStorage));
        }}
      />
    </div>
  );
};

export default StorageConfig;
