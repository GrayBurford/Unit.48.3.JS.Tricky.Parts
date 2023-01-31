function guessingGame() {
    const hiddenNum = Math.floor(Math.random() * 100);
    let guessCount = 0;
    let gameOver = false;

    return function guess (guess) {
        if (gameOver) return "Game is already over! Start a new game!";
        guessCount++;

        if (guess === hiddenNum) {
            gameOver = true;
            return `Congratulation! You guessed the correct number: ${hiddenNum}. Total guesses: ${guessCount}`
        }

        if (guess > hiddenNum) return `Your guess ${guess} is too high.`
        if (guess < hiddenNum) return `Your guess ${guess} is too low.`

    }
}

module.exports = { guessingGame };

// Write a function called guessingGame which returns a function that allows you to guess a random whole number between 0 and 99. Every time you create a new game, it should select a new random number, and keep it secret from the player.

// Once the game has started, you can guess the number. The game should tell you whether your guess is too high, too low, or correct.

// After a correct guess, the game ends.

// let game = guessingGame();
// game(50); // "50 is too low!"
// game(90); // "90 is too high!"
// game(70); // "You win! You found 70 in 3 guesses."
// game(70); // "The game is over, you already won!"