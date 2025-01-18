/**
 * @function getLetterMatchCount
 * @param {string} guessedWord - Guessed Word
 * @param {string} secretWord - Secret Word
 * @returns {number} - Number of letters matched between guessed word and secret word
 */

const getLetterMatchCount = (guessedWord, secretWord) => {
  const secretWordLetters = secretWord.split('');

  const guessedWordLettersSet = new Set(guessedWord);

  const letterMatchCount = secretWordLetters.filter((letter) => {
    return guessedWordLettersSet.has(letter);
  }).length;

  return letterMatchCount;
};

export { getLetterMatchCount };
