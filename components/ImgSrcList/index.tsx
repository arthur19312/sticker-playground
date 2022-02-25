import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { addItem, deleteItem } from "@/store/imgSrcList";
import ImgSrcItem from "@/components/ImgSrcList/ImgSrcItem";
import styles from "./index.module.scss";

function ImgSrcList() {
  const imgSrcList = useSelector((state: RootState) => state.imgSrcList);
  const dispatch = useDispatch();

  const inputRef = useRef(null);

  const [list, setList] = useState(imgSrcList);
  useEffect(() => {
    console.log(imgSrcList);
    setList(imgSrcList);
  }, [imgSrcList.length]);

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

  const deleteImg = (id: string) => {
    dispatch(deleteItem(id));
  };

  const addButton = (
    <div className={styles.inputContainer}>
      <div
        className={styles.addButton}
        onClick={() => {
          inputRef.current?.click();
        }}
      >
        +
      </div>
      <input
        className={styles.input}
        ref={inputRef}
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
      {list.map((item) => (
        <ImgSrcItem key={item.id} img={item} deleteImg={deleteImg} />
      ))}
      {addButton}
    </div>
  );
}
export default ImgSrcList;
