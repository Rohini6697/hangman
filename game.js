const KeyboardDiv = document.querySelector (".keyboard");
const display = document.querySelector('.letter-space')
const guessText = document.querySelector('.attempt')
const hangmanimage = document.querySelector('.images img')
const gameModel = document.querySelector('.content')
const playAgain = document.querySelector('.play-again')

let currentWord ,correctLetters = [],wrongGuessCount = 0;
const maxGuesses = 6;

// Reset
const resetGame = () => {
    correctLetters = [];
    wrongGuessCount = 0;
    display.innerHTML = currentWord.split('').map(() => `<li class='list'></li>`).join("");
    gameModel.classList.remove("show")
    hangmanimage.src = `images/hangman-${wrongGuessCount}.svg`;
    guessText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    KeyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false)


}

// random word and hint
const getRandomWord = () => {
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    // console.log(word,hint);
    currentWord = word;

    document.querySelector ('.clue').innerText = hint;
    resetGame();
    display.innerHTML = word.split('').map(() => `<li class='list'></li>`).join("");
}
// pop up message after game over
const gameOver = (isVictory) => {
    setTimeout(() => {
        const modalText = isVictory ? `You found the word :` : `The correct word was :`;
        gameModel.querySelector("img").src = `images/${isVictory ? 'victory' : 'lost'}.gif`;
        gameModel.querySelector("h3").innerText = `${isVictory ? 'Congrats🎉' : 'Game Over!'}`;
        gameModel.querySelector("h5").innerHTML = `${modalText} <span>${currentWord}</span>`
        gameModel.classList.add("show")
    },300)
}

const clicking = (button,clickedLetter) => {
    // show when word existing
    if (currentWord.includes(clickedLetter)) {
        [...currentWord].forEach((letter,index) => {
            if (letter === clickedLetter) {
                correctLetters.push(letter)
                display.querySelectorAll("li")[index].innerText = letter;
                display.querySelectorAll("li")[index].classList.add("guessed");
            }
        })
    }
    // if character does not exist
    else {
        wrongGuessCount++;
        hangmanimage.src = `images/hangman-${wrongGuessCount}.svg`;
    }
    button.disabled = true;
    guessText.innerText = `${wrongGuessCount} / ${maxGuesses}`;


    // condition for failure
    if(wrongGuessCount === maxGuesses) return gameOver(false);
    // condition for win
    let allGuessed = [...display.querySelectorAll("li")].every(li => li.classList.contains("guessed"));
    if (allGuessed) return gameOver(true);

}


// Creating keyboard button
for (let i = 97; i <= 122; i++){
    const button = document.createElement ('button');
    button.innerHTML = String.fromCharCode(i);
    KeyboardDiv.appendChild (button);
    button.addEventListener('click',e => clicking(e.target,String.fromCharCode(i)))
}
getRandomWord ();
playAgain.addEventListener('click',getRandomWord)