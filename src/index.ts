import { isValidWithRows } from "./evaluator";
import { getAllWords, getBoardState } from "./scraper";

/**
 * Fisher-Yates inplace shuffle
 */
const shuffle = <T>(array: T[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[j], array[i]] = [array[i], array[j]];
  }
  return array;
};

const getRandomValidGuess = (rows: WordState[]) =>
  getAllWords().then((allWords) =>
    shuffle(allWords).find(isValidWithRows(rows))
  );

const main = () => {
  const rows = getBoardState();
  if (!rows) {
    return alert("No Wordle board found on this page!");
  }
  getRandomValidGuess(rows).then((hint) =>
    alert(hint ?? "No solution found... this shouldn't be possible...")
  );
};

main();
