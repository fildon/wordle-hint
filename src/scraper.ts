/**
 * Scrapes the current document for the current game state
 */
export const getBoardState = (): Array<WordState> | null => {
  const boardElement = document
    .getElementsByTagName("game-app")[0]
    .shadowRoot?.getElementById("board");

  if (!boardElement) return null;

  return Array.from(boardElement.childNodes)
    .filter((node: any) => node._letters.length)
    .map((node: any) => ({
      _letters: node._letters,
      _evaluation: node._evaluation,
    }));
};

export const getAllWords = (): Promise<Array<string>> =>
  fetch("https://cdn.jsdelivr.net/gh/fildon/wordle-hint/src/allwords.txt")
    .then((response) => response.text())
    .then((text) => text.split("\n"));
