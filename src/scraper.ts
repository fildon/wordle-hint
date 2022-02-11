/**
 * Reads game state from the provided boardElement
 */
export const getBoardState = (boardElement: HTMLElement): Array<WordState> =>
  Array.from(boardElement.childNodes)
    .filter(
      (node: any) => node._letters.length === 5 && node._evaluation.length === 5
    )
    .map((node: any) => ({
      _letters: node._letters,
      _evaluation: node._evaluation,
    }));

/**
 * Fetch the words from a file at runtime, just so that we don't stuff them all into the build artifact
 */
export const getAllWords = (): Promise<Array<string>> =>
  fetch("https://cdn.jsdelivr.net/gh/fildon/wordle-hint/src/allwords.txt")
    .then((response) => response.text())
    .then((text) => text.split("\n").filter((x) => x.length === 5));
