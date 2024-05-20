  import React from "react";
  import styles from "./styles.module.css";
  import Image from "next/image";
  import logo from "../../../public/home_logo.png";
  import game_left from "../../../public/game_left.png";
  import game_right from "../../../public/game_right.png";
  import { GamePage } from "@/components/game-control";
  import { LanguageData } from "@/app/type/LanguageData";
import { PageWordsData } from "@/app/type/PageWordsData";
  import { notFound } from "next/navigation";
  
  interface PageProps {
    pageLanguage: LanguageData;
    params: {
      game: string;
    };
  }
  
  const GameContainer: React.FC<PageProps> = async ({pageLanguage, params}) => {

    return (
      <main className={styles.container}>
        <div className={styles.game_header}>
          <Image src={logo} alt="Game Logo" className={styles.game_logo_image} />
          <h1>Spelling Bee</h1>
        </div>
        <GamePage pageLanguage={pageLanguage} params={params}/>
        <div className={styles.home_images}>
          <Image
            src={game_left}
            alt="Game Language"
            className={styles.game_left_image}
          />
          <Image
            src={game_right}
            alt="Game Language"
            className={styles.game_right_image}
          />
        </div>
      </main>
    );
  };
  
  export default GameContainer;
  