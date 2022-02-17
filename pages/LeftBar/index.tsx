import ImgSrcList from "@@/ImgSrcList";
import styles from "./index.module.css";

function LeftBar() {
  return (
    <div className={styles.container}>
      <ImgSrcList />
    </div>
  );
}
export default LeftBar;
