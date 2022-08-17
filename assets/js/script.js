import { WORDS } from "./words.js";
document.getElementById('keyboard').style.visibility = 'hidden';
var wrongAnswerCounter = 0;
var lettersPressed = [];
var lettersLeft = 7;
blockKeyboard();
clickStartButton();

var word = randomlySelectWord();
console.log(word);
var individualLetters = word.split('');

function clickStartButton () {
    document.addEventListener('click', function (event) {
        if (event.detail) {
            unBlockKeyboard();
            document.getElementById('game-type-buttons').style.visibility = 'hidden';
            document.getElementById('keyboard').style.visibility = 'visible';
            navigator.keyboard.unlock();
            formatafterStart();
        };
        keyboardSelectLetter(lettersPressed, word);
        mouseSelectLetter(lettersPressed, word);
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
    return wordToGuess.toUpperCase();
}

// also check if already selected, then counter is not changed - continue every time
function keyboardSelectLetter (arr, word) {
    document.addEventListener("keydown", function(event) {
        let keyPressed = event.key;
        console.log(keyPressed);
        let upperKeyPressed = keyPressed.toUpperCase();
        buttonPressed(upperKeyPressed, arr, word);
    })
}

function mouseSelectLetter (arr, word) {
    document.addEventListener("click", function(event) {
        let keyClicked = event.path[0].innerText;
        buttonPressed(keyClicked, arr, word);
    })
}

// Let the user both click/select the button on the screen and press the key
function buttonPressed (key, arr, word) {
    if (!arr.includes(key) && word.indexOf(key) > -1) {
        rightLetterSelected(key);
    } else if (!arr.includes(key) && !word.indexOf(key) > -1) {
        wrongLetterSelected(key);
    } 
    addToPressedKeysArray(key, arr);
}

// if a letter is pressed and is wrong, the letter block is red, the counter is added and the hangman picture is updated
function wrongLetterSelected (key) {
    if (wrongAnswerCounter < 7) {
        document.getElementById(key).style.backgroundColor = "#f81307";
        wrongAnswerCounter += 1;
        // new image
    }
    if (wrongAnswerCounter == 7) {
        loser();
    }
}

/* if a letter is pressed and is right, the letter block turns green, the word checks if its equal to the original input
and if not, it lets the user pick another letter */
function rightLetterSelected (key) {
    document.getElementById(key).style.backgroundColor = "#0ff04d";
    let suitableGap = document.getElementsByClassName("word-letter");
    for (let i = 0; i < individualLetters.length; i ++) {
        if (key == individualLetters[i] && lettersLeft != 0 && !lettersPressed.includes(key)) {
            suitableGap[i].innerText = individualLetters[i];
            lettersLeft -= 1;
        } 
        if (lettersLeft == 0) {
            winner();
        }
    }
}

function addToPressedKeysArray (key, arr) {
    if (!arr.includes(key)) {
        arr.push(key);
    }
}

// if the word is obtained, send message to say well done with a leaderboard and play again
function winner () {
    console.log("winner");
    blockKeyboard();
    
}

// if the counter reaches 7, send message that lets the user play again
function loser () {
    console.log("loser");
    blockKeyboard();
}


function playAgain () {

}

// if time: make light and dark mode

function blockKeyboard () {
    window.addEventListener('keydown', function (event) {

        // if the keyCode is 13 ( return key was pressed )
        if (event.keyPressed !== 13) {
    
            // prevent default behaviour
            event.preventDefault();
    
            return false;
        }
    
    });
}

function unBlockKeyboard () {
    window.addEventListener('keydown', function (event) {

        // if the keyCode is 13 ( return key was pressed )
        if (event.keyPressed !== 13) {
           return true;
        }
    
    });
}