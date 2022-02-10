/**
 * This is decompiled straight from the real game's implementation
 */
const evaluateGuess = (guess: string, solution: string): Evaluation => {
  // Assume result is all Grey initially
  const result: Evaluation = ["absent", "absent", "absent", "absent", "absent"];

  // In this array we check which solution letters could still be matched against
  const couldStillMatch = [true, true, true, true, true];

  // Identify Greens
  for (let index = 0; index < 5; index++) {
    if (guess[index] === solution[index]) {
      result[index] = "correct";
      couldStillMatch[index] = false;
    }
  }

  // Identify Yellows
  for (let i = 0; i < 5; i++) {
    // If we already have a green here we don't need to check for yellow
    if (result[i] === "correct") continue;

    for (let j = 0; j < 5; j++) {
      if (couldStillMatch[j] && guess[i] === solution[j]) {
        result[i] = "present";
        couldStillMatch[j] = false;
        break;
      }
    }
  }
  return result;
};

export const matches = (candidate: string) => (row: WordState) => {
  const hypotheticalEvaluation = evaluateGuess(row._letters, candidate);
  for (let i = 0; i < 5; i++) {
    // If the hypothetical and real evaluations ever disagree
    // Then this candidate is not valid
    if (hypotheticalEvaluation[i] !== row._evaluation[i]) return false;
  }

  // This candidate is valid!
  return true;
};

export const isValidWithRows = (rows: WordState[]) => (candidate: string) =>
  rows.every(matches(candidate));
