import StorageConfig from "@/components/StorageConfig";
import styles from "./index.module.scss";

function ParamBar() {
  return (
    <div className={styles.container}>
      <StorageConfig />
    </div>
  );
}
export default ParamBar;
