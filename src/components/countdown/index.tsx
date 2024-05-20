"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

export const CountDown = ({
  hasWord,
  setHasWord,
  hasNext,
  setHasNext,
  setHasTimeOver,
}: {
  hasWord: boolean;
  setHasWord: Function;
  hasNext: boolean;
  setHasNext: Function;
  setHasTimeOver: Function;
}) => {
  const [time, setTime] = useState<number>(60);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time - 1);
    }, 1000);

    hasWord && setTime(time + 15);
    hasNext && setTime(time - 5);
    setTimeout(() => {}, 1500);
    setHasWord();
    setHasNext();

    if (time <= 0) {
      setTime(0);
      clearInterval(interval);
      setHasTimeOver(true);
    }

    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className={styles.game_countdown}>
      <div className={styles.game_countdown_content}>{time}</div>
      {hasWord && <div className={styles.game_countdown_plus}>+ 15</div>}
      {hasNext && <div className={styles.game_countdown_minus}>- 5</div>}
    </div>
  );
};
