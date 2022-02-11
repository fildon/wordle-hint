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

const getBoardElement = () =>
  document
    .getElementsByTagName("game-app")[0]
    .shadowRoot?.getElementById("board");

const main = () => {
  const boardElement = getBoardElement();
  const boardContainer = boardElement?.parentElement;
  if (!boardElement || !boardContainer) {
    return alert("No Wordle board found on this page!");
  }

  const hintArea = document.createElement("span");
  hintArea.style.backgroundColor = "white";
  hintArea.style.color = "black";
  hintArea.style.padding = "0.5rem";
  hintArea.textContent = "-";

  const hintButton = document.createElement("button");
  hintButton.style.margin = "0.5rem";
  hintButton.textContent = "Get Hint?";
  hintButton.onclick = () =>
    getRandomValidGuess(getBoardState(boardElement)).then(
      (hint) =>
        (hintArea.textContent =
          hint ??
          "No solution found... this can happen if the word list has changed...")
    );

  boardContainer.insertBefore(hintButton, null);
  boardContainer.insertBefore(hintArea, null);

  // TODO clear hintArea after each submission?
};

main();
