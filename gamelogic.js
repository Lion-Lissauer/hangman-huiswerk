function displayWordSoFar(word, guesses) {
    const lettersInWordArray = word.split("");
    let output = "";
    for (let i = 0; i < lettersInWordArray.length; i++) {
        const letterInWord = lettersInWordArray[i];
        const isLetterGuessed = guesses.includes(letterInWord);
        if (!isLetterGuessed) {
            output = output + "_ ";
        }
        if (isLetterGuessed) {
            output = output + letterInWord + " ";
        }
    }
    return output;
}

function isGameWon(word, guesses) {
    const lettersInWordArray = word.split("");
    for (let i = 0; i < lettersInWordArray.length; i++) {
        const letter = lettersInWordArray[i];
        const gameWon = guesses.includes(letter)
        if (!gameWon) {
            return false
        }
    }
    return true
}

function isGameLost(word, guesses) {
    const lettersInWordArray = word.split("");
    let wrongLetter = 0;
    for (let i = 0; i < guesses.length; i++) {
        let letter = guesses[i];
        if (!lettersInWordArray.includes(letter)) {
            wrongLetter++
        }
    }
    return wrongLetter >= 7
}

module.exports = {
    displayWordSoFar: displayWordSoFar,
    isGameWon: isGameWon,
    isGameLost: isGameLost,
};
