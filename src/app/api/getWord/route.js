import { NextResponse } from "next/server";
import en from "./constant/en.json";
import tr from "./constant/tr.json";

export async function POST(req, res) {
  try {
    const { word, language } = await req.json();
    const dictionary = language === "en" ? en : tr;
    const isFound = dictionary[0].words.includes(word);

    return NextResponse.json(isFound);
  } catch (error) {
    return NextResponse.status(500).json({ error: "An error occurred while trying to find the word." });
  }
}
