import LeftBar from "@/pages/LeftBar";
import MainGround from "@/pages/mainGround";
import ParamBar from "@/pages/ParamBar";
import styles from "./index.module.css";

function Container() {
  return (
    <div className={styles.container}>
      <LeftBar />
      <MainGround />
      <ParamBar />
    </div>
  );
}
export default Container;
