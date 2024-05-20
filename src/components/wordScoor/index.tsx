import { IBar } from "@/app/type/LanguageData";
import styles from "./styles.module.css"

export const WordScoor = ({bar, wordPoint} : {bar : IBar, wordPoint : number} ) => {
    const wordPointDescription: Record<number, string> = {
        0: bar.zero,
        10: bar.ten,
        20: bar.twenty,
        30: bar.thirty,
        40: bar.fourty,
        50: bar.fifty,
        60: bar.sixty,
        70: bar.seventy,
        80: bar.ninety,
        90: bar.hundred,
        100: bar.hundred,
      };
    
      const closestKey: number = +Object.keys(wordPointDescription).reduce(
        (prev, curr) =>
          Math.abs(+curr - wordPoint) < Math.abs(+prev - wordPoint) ? curr : prev
      );
      const newWordPointDescription = wordPointDescription[closestKey] || "";

    return(
        <div className={styles.word_scoor}>
            <div className={styles.word_scoor_description}>
                {newWordPointDescription}
            </div>
            <div className={styles.word_scoor_bar}>
                <div className={styles.word_scoor_bar_line}></div>
                <div className={wordPoint < 10 ? styles.word_scoor_bar_point : ""}>
                    <div className={styles.word_scoor_bar_point_inside}>
                {wordPoint < 10 && wordPoint}
                    </div>
                </div>
                <div className={wordPoint > 9 && wordPoint < 20 ? styles.word_scoor_bar_point : ""}>
                    <div className={styles.word_scoor_bar_point_inside}>
                    {wordPoint> 9 && wordPoint < 20 && wordPoint}
                    </div>
                </div>
                <div className={wordPoint > 19 && wordPoint < 30 ? styles.word_scoor_bar_point : ""}>
                    <div className={styles.word_scoor_bar_point_inside}>
                    {wordPoint> 19 && wordPoint < 30 && wordPoint}
                    </div>
                </div>
                <div className={wordPoint > 29 && wordPoint < 40 ? styles.word_scoor_bar_point : ""}>
                    <div className={styles.word_scoor_bar_point_inside}>
                    {wordPoint> 29 && wordPoint < 40 && wordPoint}
                    </div>
                </div>
                <div className={wordPoint > 39 && wordPoint < 50 ? styles.word_scoor_bar_point : ""}>
                    <div className={styles.word_scoor_bar_point_inside}>
                    {wordPoint> 39 && wordPoint < 50 && wordPoint}
                    </div>
                </div>
                <div className={wordPoint > 49 && wordPoint < 60 ? styles.word_scoor_bar_point : ""}>
                    <div className={styles.word_scoor_bar_point_inside}>
                    {wordPoint> 49 && wordPoint < 60 && wordPoint}
                    </div>
                </div>
                <div className={wordPoint > 59 && wordPoint < 70 ? styles.word_scoor_bar_point : ""}>
                    <div className={styles.word_scoor_bar_point_inside}>
                    {wordPoint> 59 && wordPoint < 70 && wordPoint}
                    </div>
                </div>
                <div className={wordPoint > 69 && wordPoint < 80 ? styles.word_scoor_bar_point : ""}>
                    <div className={styles.word_scoor_bar_point_inside}>
                    {wordPoint> 69 && wordPoint < 80 && wordPoint}
                    </div>
                </div>
                <div className={wordPoint > 79 && wordPoint < 90 ? styles.word_scoor_bar_point : ""}>
                    <div className={styles.word_scoor_bar_point_inside}>
                    {wordPoint> 79 && wordPoint < 90 && wordPoint}
                    </div>
                </div>
                <div className={wordPoint > 89 && wordPoint < 100 ? styles.word_scoor_bar_point : ""}>
                    <div className={styles.word_scoor_bar_point_inside}>
                    {wordPoint> 89 && wordPoint < 100 && wordPoint}
                    </div>
                </div>
                <div className={wordPoint> 99 ? styles.word_scoor_bar_point : ""}>
                    <div className={styles.word_scoor_bar_point_inside}>
                    {wordPoint> 99 && wordPoint}
                    </div>
                </div>
            </div>
        </div>
    );
};