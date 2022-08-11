import { WORDS } from "./words.js";
var wrongAnswerCounter = 0;

clickStartButton();
// var word = randomlySelectWord();
// console.log(word);

function clickStartButton () {
    document.addEventListener('click', function (event) {
        if (event.detail) {
            document.getElementById('game-type-buttons').remove();
            formatafterStart();
        };
    })
}

function formatafterStart () {
    document.getElementById('guessing-letters').style.paddingTop = "3rem";
    document.getElementById('full-hangman-start').style.paddingTop = "5%";
    var startLettersNodeList = document.querySelectorAll('.word-letter');
    startLettersNodeList.forEach(function (item) {
        item.innerText = "_";
    });
    // var startLetters = Array.from(startLettersNodeList);
    // for (letter in startLetters) {
    //     letter.innerText = "_";
    // };
}

// only 7 letter words - get all possible options and randomly select one
function randomlySelectWord () {
    var indexOfWordToGuess = Math.floor(Math.random() * WORDS.length);
    var wordToGuess = WORDS[indexOfWordToGuess];
    return wordToGuess;
}

// set the number of underscores to the number of letters in the words

// Let the user both click/select the button on the screen and press the key

// if a letter is pressed and is wrong, the letter block is red, the counter is added and the hangman picture is updated

/* if a letter is pressed and is right, the letter block turns green, the word checks if its equal to the original input
and if not, it lets the user pick another letter */

// if the counter reaches 7, send message that lets the user play again

// if the word is obtained, send message to say well done and play again

// if time: make light and dark mode
