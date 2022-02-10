const Present = "present"; // Yellow
const Correct = "correct"; // Green
const Absent = "absent"; // Grey

/**
 * This is decompiled straight from the real game's implementation
 */
const evaluateGuess = (guess: string, solution: string) => {
  // Assume result is all Grey initially
  const result = [Absent, Absent, Absent, Absent, Absent];

  // In this array we check which solution letters could still be matched against
  const couldStillMatch = [true, true, true, true, true];

  // Identify Greens
  for (let index = 0; index < 5; index++) {
    if (guess[index] === solution[index]) {
      result[index] = Correct;
      couldStillMatch[index] = false;
    }
  }

  // Identify Yellows
  for (let i = 0; i < 5; i++) {
    // If we already have a green here we don't need to check for yellow
    if (result[i] === Correct) continue;

    for (let j = 0; j < 5; j++) {
      if (couldStillMatch[j] && guess[i] === solution[j]) {
        result[i] = Present;
        couldStillMatch[j] = false;
        break;
      }
    }
  }
  return result;
};
