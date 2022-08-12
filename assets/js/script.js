import { WORDS } from "./words.js";
document.addEventListener("DOMContentLoaded", function() {
    var wrongAnswerCounter = 0;
    var lettersPressed = [];

    clickStartButton();
    var word = randomlySelectWord();
})

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
}

function randomlySelectWord () {
    var indexOfWordToGuess = Math.floor(Math.random() * WORDS.length);
    var wordToGuess = WORDS[indexOfWordToGuess];
    return wordToGuess;
}

// also check if already selected, then counter is not changed - continue every time
function selectLetter () {
    document.addEventListener("keydown", function(event) {
    
    })
}

// Let the user both click/select the button on the screen and press the key

// if a letter is pressed and is wrong, the letter block is red, the counter is added and the hangman picture is updated
function wrongLetterSelected () {

}

/* if a letter is pressed and is right, the letter block turns green, the word checks if its equal to the original input
and if not, it lets the user pick another letter */
function rightLetterSelected () {

}

// if the word is obtained, send message to say well done with a leaderboard and play again
function winner () {
    
}

// if the counter reaches 7, send message that lets the user play again
function loser () {

}


function playAgain () {

}


// if time: make light and dark mode
