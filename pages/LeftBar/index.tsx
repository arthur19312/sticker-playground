import ImgSrcList from "@@/ImgSrcList";
import { RootState } from "@store";
import { useSelector } from "react-redux";
import styles from "./index.module.css";

const imgSrcList = useSelector((state: RootState) => state.imgSrcList);

function LeftBar() {
  return (
    <div className={styles.container}>
      <ImgSrcList {...imgSrcList} />
    </div>
  );
}
export default LeftBar;
