type LetterState = "absent" | "present" | "correct";
type Evaluation = [
  LetterState,
  LetterState,
  LetterState,
  LetterState,
  LetterState
];
type WordState = {
  _letters: string;
  _evaluation: Evaluation;
};
