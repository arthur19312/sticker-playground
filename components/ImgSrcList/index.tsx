import { RootState } from "@store";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "@store/imgSrcList";
import ImgSrcItem from "@@/ImgSrcList/ImgSrcItem";
import styles from "./index.module.scss";

function ImgSrcList() {
  const imgSrcList = useSelector((state: RootState) => state.imgSrcList);
  const dispatch = useDispatch();

  const addImgSrc = (files: FileList | null) => {
    const fileList = Array.prototype.slice.call(files);

    fileList.forEach((file) => {
      const { name, type, size } = file;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        const src = this.result?.toString() || "";
        if (!src) return;
        const id = src.slice(-8);
        const newImgItem = { id, src, type, name, size };
        dispatch(addItem(newImgItem));
      };
    });
  };

  const addButton = (
    <div className={styles.inputContainer}>
      <div className={styles.addButton}>+</div>
      <input
        className={styles.input}
        type="file"
        accept="image/*"
        multiple
        onChange={(e) => {
          addImgSrc(e.target?.files);
        }}
      />
    </div>
  );

  return (
    <div className={styles.listContainer}>
      {imgSrcList.map((item) => (
        <ImgSrcItem {...item} />
      ))}
      {addButton}
    </div>
  );
}
export default ImgSrcList;
