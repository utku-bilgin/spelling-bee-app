"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { Hexagonal } from "../hexagonal";
import { CountDown } from "../countdown";
import { UserPredictedWord } from "../userPredictedWord";
import { LanguageData } from "@/app/type/LanguageData";
import { WordList } from "../wordList";
import { WordScoor } from "../wordScoor";
import { PopUp } from "../pop-up";
import { FaAngleRight, FaCheck, FaHome, FaEraser } from "react-icons/fa";
import { fetchIsWord } from "@/services/game";

interface GamePageProps {
  pageLanguage: LanguageData;
  params: {
    game: string;
  };
}

export const GamePage: React.FC<GamePageProps> = ({ pageLanguage, params }) => {
  const [word, setWord] = useState<string>("");
  const [randomWord, setRandomWord] = useState<string[]>([]);
  const [allWord, setAllWord] = useState<any>([]);
  const [hasWord, setHasWord] = useState<boolean>(false);
  const [hasNext, setHasNext] = useState<boolean>(false);
  const [onTheList, setOnTheList] = useState<boolean>(false);
  const [isTrue, setIsTrue] = useState<boolean>(false);
  const [hasTimeOver, setHasTimeOver] = useState<boolean>(false);
  const [wordPoint, setWordPoint] = useState<number>(0);

  const { game } = params;
  const { error, bar, description, over } = pageLanguage;
  const { sibilancy, full, vowel } = pageLanguage.alphabet;

  const alphabetFull = full.split(",");
  const alphabetSibilancy = sibilancy.split(",");
  const alphabetVowel = vowel.split(",");

  useEffect(() => {
    RandomCreateWords();
  }, []);

  const getLetters = (
    sibilancy: string[],
    vowel: string[],
    full: string[]
  ): string[] => {
    const allLetters: string[] = [];
    let counterSibilancy: number = 0;
    let counterVowel: number = 0;
    let word: string = "";
    Array.from({ length: 7 }).map((_) => {
      if (counterSibilancy < 4) {
        const randomNumber = Math.floor(Math.random() * sibilancy.length);
        word = sibilancy[randomNumber];
        sibilancy = sibilancy.filter((item) => item !== word);
        counterSibilancy++;
      } else if (counterVowel < 2) {
        const randomNumber = Math.floor(Math.random() * vowel.length);
        word = vowel[randomNumber];
        vowel = vowel.filter((item) => item !== word);
        full = full.filter((item) => item !== word);
        counterVowel++;
      } else {
        const randomNumber = Math.floor(Math.random() * full.length);
        word = full[randomNumber];
      }

      allLetters.push(word);
    });
    return allLetters;
  };

  // random harf oluştur
  const RandomCreateWords = () => {
    let full: string[] = alphabetFull;
    let sibilancy: string[] = alphabetSibilancy;
    let vowel: string[] = alphabetVowel;

    const getAllLetters: string[] = getLetters(sibilancy, vowel, full);
    setRandomWord(RandomWrd(getAllLetters));
  };

  // random harflerin sırasını değiştir
  function RandomWrd(words: string[]) {
    for (let i = words.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [words[i], words[j]] = [words[j], words[i]];
    }
    return words;
  }

  // seçilen harfi inputa yaz
  const handleAddNewLetter = (item: string) => {
    !hasTimeOver && setWord((word) => word + item);
  };

  const ChackWord = async () => {
    const normalizedWord = word.toLocaleLowerCase();
    const isAlreadyOnTheList = allWord.includes(normalizedWord);
    setOnTheList(isAlreadyOnTheList);
  
    if (isAlreadyOnTheList) {
      setOnTheList(false);
      setWord("");
      return;
    }
  
    if (!hasTimeOver && word.length > 0) {
      const response = await fetchIsWord(word.toLocaleUpperCase(), game);
      setHasWord(response);
  
      if (response) {
        setAllWord([...allWord, normalizedWord]);
        const additionalPoints = word.length > 3 ? 3 : 0;
        setWordPoint(wordPoint + word.length + additionalPoints);
      } else {
        setIsTrue(true);
      }
  
      setWord("");
    }
  };

  const DeleteLetter = () => {
    if (word.length && !hasTimeOver) {
      const removeLetter = word.slice(0, -1);
      setWord(removeLetter);
    }
  };

  return (
    <div className={styles.container}>
      {hasTimeOver && <PopUp over={over} game={game} />}
      {/* sol taraf */}
      <div className={styles.game}>
        {/* geri sayım */}
        <CountDown
          hasWord={hasWord}
          setHasWord={setHasWord}
          hasNext={hasNext}
          setHasNext={setHasNext}
          setHasTimeOver={setHasTimeOver}
        />
        {/* yazılan kelime */}
        <UserPredictedWord
          word={word}
          error={error}
          isTrue={isTrue}
          hasWord={hasWord}
          setIsTrue={setIsTrue}
        />
        {/* altıgen alanı */}
        <Hexagonal
          handleAddNewLetter={handleAddNewLetter}
          randomWord={randomWord}
        />
        {/* buton alanı */}
        <div className={styles.game_btn_area}>
          <Link href="/">
            <button className={styles.game_btn}>
              <FaHome />
            </button>
          </Link>
          <button className={styles.game_btn} onClick={DeleteLetter}>
            <FaEraser />
          </button>
          <button
            className={styles.game_btn}
            disabled={hasTimeOver}
            onClick={() => {
              RandomCreateWords();
              setHasNext(true);
            }}
          >
            <FaAngleRight />
          </button>
          <button className={styles.game_btn} onClick={ChackWord}>
            <FaCheck />
          </button>
        </div>
      </div>

      {/* sağ taraf */}
      <div className={styles.scoor}>
        <WordScoor bar={bar} wordPoint={wordPoint} />
        <WordList listDescription={description} allWord={allWord} />
      </div>
    </div>
  );
};
