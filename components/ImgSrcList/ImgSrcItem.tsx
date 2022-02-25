import { ImgSrcItemType } from "@/constants/imgSrc";
import styles from "./index.module.scss";

interface ImgSrcItemProps {
  img: ImgSrcItemType;
  deleteImg: (id: string) => void;
}

function ImgSrcItem({ img, deleteImg }: ImgSrcItemProps) {
  const { id, src, type, name, size } = img;
  return (
    <div className={styles.itemContainer}>
      <img className={styles.img} src={src} />
      <div
        className={styles.cross}
        onClick={() => {
          deleteImg(id);
        }}
      >
        +
      </div>
      <div className={styles.add}>+</div>
    </div>
  );
}
export default ImgSrcItem;
