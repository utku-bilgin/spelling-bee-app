import styles from "./styles.module.css";

export const WordList = ({listDescription, allWord} : {listDescription:any, allWord:any}) => {
    
    const wordCount = allWord.length

    return(
        <div className={styles.words_list}>
          <div className={styles.words_list_header}>
            <p>{listDescription.part1}</p>
            <p className={styles.word_list_count}>{`${wordCount}`}</p>
            <p>{listDescription.part2}</p>
          </div>
          <div className={styles.words_list_content}>
            <ul>
              {allWord.map((word: string, index: number) => (
                <li key={index}>{word}</li>
              ))}
            </ul>
          </div>
        </div>
    );
};