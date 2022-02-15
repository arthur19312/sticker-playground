import { ImgSrcItemType } from "@constants/imgSrc";
import styles from "./index.module.css";
function ImgSrcItem(props: ImgSrcItemType) {
  return <img key={props.id} className={styles.listItem} src={props.src} />;
}
export default ImgSrcItem;
