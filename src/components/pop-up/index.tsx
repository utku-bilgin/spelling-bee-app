import Link from "next/link";
import { FaHome, FaGamepad } from "react-icons/fa";
import styles from "./styles.module.css";

export const PopUp = ({ over, game }: { over: string; game: string }) => {
  return (
    <div className={styles.popup_area}>
      <div className={styles.popup}>
        <p className={styles.popup_message}>{over}</p>
        <div className={styles.popup_btn_area}>
          <Link href="/">
            <button className={styles.popup_btn}>
              <FaHome />
            </button>
          </Link>
          <button
            className={styles.popup_btn}
            onClick={() => {
              location.reload();
            }}
          >
            <FaGamepad />
          </button>
        </div>
      </div>
    </div>
  );
};
