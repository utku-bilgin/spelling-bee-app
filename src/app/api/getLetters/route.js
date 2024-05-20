import { NextResponse } from "next/server";
import en from "./constant/en.json";
import tr from "./constant/tr.json";

let randomWord = [];

export async function POST(req, res) {
  try {
    const { language } = await req.json();
    const alphabet = language === "en" ? en : tr;

    const alphabetFull = alphabet.alphabet.full.split(",");
    const alphabetSibilancy = alphabet.alphabet.sibilancy.split(",");
    const alphabetVowel = alphabet.alphabet.vowel.split(",");

    const GetLetters = (sibilancy, vowel, full) => {
      const allLetters = [];
      let counterSibilancy = 0;
      let counterVowel = 0;
      let word = "";
      Array.from({ length: 7 }).map((_) => {
        if (counterSibilancy < 4) {
          const randomNumber = Math.floor(Math.random() * sibilancy.length);
          word = sibilancy[randomNumber];
          sibilancy = sibilancy.filter((item) => item !== word);
          full = full.filter((item) => item !== word);
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
      let full = alphabetFull;
      let sibilancy = alphabetSibilancy;
      let vowel = alphabetVowel;

      const getAllLetters = GetLetters(sibilancy, vowel, full);
      randomWord = RandomWrd(getAllLetters);
    };

    // random harflerin sırasını değiştir
    function RandomWrd(letters) {
      for (let i = letters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [letters[i], letters[j]] = [letters[j], letters[i]];
      }
      return letters;
    }

    RandomCreateWords();

    return NextResponse.json(randomWord)
  } catch (error) {
    return NextResponse.status(500).json({ error: "An error occurred while trying to create a word group." });
  }
}
