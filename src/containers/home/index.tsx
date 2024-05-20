import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import logo from "../../../public/home_logo.png";
import tr from "../../../public/home_link_tr.png";
import en from "../../../public/home_link_en.png";
import bottom_left from "../../../public/home_bottom_left.png";
import top_right from "../../../public/home_top_right.png";

export default function HomeContainer() {
  return (
    <main className={styles.container}>
      <div className={styles.home_logo}>
        <Image src={logo} alt="Game Logo" className={styles.home_logo_image} />
      </div>
      <div className={styles.home_header}>
        <h1>Spelling Bee</h1>
      </div>
      <div className={styles.home_language}>
        <p>Choose the language you want to play in and start</p>
        <div className={styles.home_language_icon_container}>
          <Link href="/tr">
            <Image
              src={tr}
              alt="Game Language"
              className={styles.home_language_image}
            />
          </Link>
          <Link href="/en">
            <Image
              src={en}
              alt="Game Language"
              className={styles.home_language_image}
            />
          </Link>
        </div>
      </div>
      <div className={styles.home_images}>
        <Image
          src={bottom_left}
          alt="Game Language"
          className={styles.home_bottom_left_image}
        />
        <Image
          src={top_right}
          alt="Game Language"
          className={styles.home_top_right_image}
        />
      </div>
    </main>
  );
}
