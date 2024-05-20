import styles from "./styles.module.css";

export const Hexagonal = ({
  handleAddNewLetter,
  randomWord,
}: {
  handleAddNewLetter: Function;
  randomWord: string[];
}) => {
  return (
    <div className={styles.letter_area}>
      <button
        className={`${styles.letter_btn} ${styles.letter_btn_one}`}
        onClick={() => handleAddNewLetter(randomWord[0])}
      >
        <div className={styles.letter_btn_border}>
          <div className={styles.letter_btn_in}>{randomWord[0]}</div>
        </div>
      </button>
      <button
        className={`${styles.letter_btn} ${styles.letter_btn_two}`}
        onClick={() => handleAddNewLetter(randomWord[1])}
      >
        <div className={styles.letter_btn_border}>
          <div className={styles.letter_btn_in}>{randomWord[1]}</div>
        </div>
      </button>
      <button
        className={`${styles.letter_btn} ${styles.letter_btn_three}`}
        onClick={() => handleAddNewLetter(randomWord[2])}
      >
        <div className={styles.letter_btn_border}>
          <div className={styles.letter_btn_in}>{randomWord[2]}</div>
        </div>
      </button>
      <button
        className={`${styles.letter_btn} ${styles.letter_btn_four}`}
        onClick={() => handleAddNewLetter(randomWord[3])}
      >
        <div className={styles.letter_btn_border}>
          <div className={styles.letter_btn_in}>{randomWord[3]}</div>
        </div>
      </button>
      <button
        className={`${styles.letter_btn} ${styles.letter_btn_five}`}
        onClick={() => handleAddNewLetter(randomWord[4])}
      >
        <div className={styles.letter_btn_border}>
          <div className={styles.letter_btn_in}>{randomWord[4]}</div>
        </div>
      </button>
      <button
        className={`${styles.letter_btn} ${styles.letter_btn_six}`}
        onClick={() => handleAddNewLetter(randomWord[5])}
      >
        <div className={styles.letter_btn_border}>
          <div className={styles.letter_btn_in}>{randomWord[5]}</div>
        </div>
      </button>
      <button
        className={`${styles.letter_btn} ${styles.letter_btn_seven}`}
        onClick={() => handleAddNewLetter(randomWord[6])}
      >
        <div className={styles.letter_btn_border}>
          <div className={styles.letter_btn_in}>{randomWord[6]}</div>
        </div>
      </button>
    </div>
  );
};
