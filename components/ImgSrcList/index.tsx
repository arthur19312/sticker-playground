import ImgSrcItem from "@@/ImgSrcList/ImgSrcItem";
import { ImgSrcListType } from "@constants/imgSrc";
import styles from "./index.module.css";
function ImgSrcList(props: ImgSrcListType) {
  return (
    <div className={styles.listContainer}>
      {props.map((item) => (
        <ImgSrcItem {...item} />
      ))}
    </div>
  );
}
export default ImgSrcList;
