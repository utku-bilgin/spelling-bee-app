"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

export const UserPredictedWord = ({
  word,
  error,
  isTrue,
  setIsTrue,
}: {
  word: string;
  error: string;
  isTrue: boolean;
  setIsTrue: Function;
}) => {
  useEffect(() => {
    if (isTrue) {
      const timer = setTimeout(() => {
        setIsTrue(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isTrue]);
  return (
    <div className={styles.user_word_area}>
      <input value={word} className={styles.user_word} type="text" disabled />
      {isTrue && <p className={styles.user_word_warning}>{error}</p>}
    </div>
  );
};
