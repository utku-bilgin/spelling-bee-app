export interface LanguageData {
  alphabet: {
    full: string;
    vowel: string;
    sibilancy: string;
  };
  button: {
    back: string;
    delete: string;
    enter: string;
  };
  error: string;
  description: {
    part1: string;
    part2: string;
  };
  bar: IBar;
  over: string;
}

export interface IBar {
  zero: string;
  ten: string;
  twenty: string;
  thirty: string;
  fourty: string;
  fifty: string;
  sixty: string;
  seventy: string;
  ninety: string;
  hundred: string;
}
