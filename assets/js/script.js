import { WORDS } from "./words.js";
document.getElementById('keyboard').style.visibility = 'hidden';
var wrongAnswerCounter = 0;
var lettersPressed = [];
var lettersLeft = 7;
clickStartButton();

var word = randomlySelectWord();
console.log(word);
var individualLetters = word.split('');

function clickStartButton () {
    document.addEventListener('click', function (event) {
        if (event.detail) {
            document.getElementById('game-type-buttons').style.visibility = 'hidden';
            document.getElementById('keyboard').style.visibility = 'visible';
            document.getElementById('full-hangman-start').src = 'assets/images/blank_image.png';
            formatafterStart();
        }
        mouseSelectLetter(word);
        keyboardSelectLetter(word);
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

function keyboardSelectLetter (word) {
    document.addEventListener("keydown", function(event) {
        let keyPressed = event.key;
        let upperKeyPressed = keyPressed.toUpperCase();
        buttonPressed(upperKeyPressed, word);
    });
}

function mouseSelectLetter (word) {
    document.addEventListener("click", function(event) {
        let keyClicked = event.path[0].innerText;
        let upperKeyClicked = keyClicked.toUpperCase();
        buttonPressed(upperKeyClicked, word);
    });
}

// Let the user both click/select the button on the screen and press the key
function buttonPressed (key, word) {
    if (!lettersPressed.includes(key) && word.indexOf(key) > -1) {
        rightLetterSelected(key);
    } else if (!lettersPressed.includes(key)) {
        wrongLetterSelected(key);
    } 
    addToPressedKeysArray(key);
}

// if a letter is pressed and is wrong, the letter block is red, the counter is added and the hangman picture is updated
function wrongLetterSelected (key) {
    if (wrongAnswerCounter < 7) {
        document.getElementById(key).style.backgroundColor = "#f81307";
        wrongAnswerCounter += 1;
        
        switch (wrongAnswerCounter) {
            case 1:
                document.getElementById('full-hangman-start').src = 'assets/images/frame_gain.png';
    
                break;
        
            case 2:
                document.getElementById('full-hangman-start').src = 'assets/images/head_gain.png';
    
                break;
        
            case 3:
                document.getElementById('full-hangman-start').src = 'assets/images/body_gain.png';
    
                break;
        
            case 4:
                document.getElementById('full-hangman-start').src = 'assets/images/left_arm_gain.png';

                break;
    
            case 5:
                document.getElementById('full-hangman-start').src = 'assets/images/right_arm_gain.png';
    
                break;
        
            case 6:
                document.getElementById('full-hangman-start').src = 'assets/images/left_leg_gain.png';
    
                break;
    
        }
    }
    if (wrongAnswerCounter == 7) {
        document.getElementById('full-hangman-start').src = 'assets/images/full_body.png'; 
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
            suitableGap[i].innerText = key;
            lettersLeft -= 1;
        } 
        if (lettersLeft == 0) {
            winner();
        }
    }
}

function addToPressedKeysArray (key) {
    if (!lettersPressed.includes(key)) {
        lettersPressed.push(key);
    }
}

// if the word is obtained, send message to say well done with a leaderboard and play again
function winner () {
    console.log("winner");
        
}

// if the counter reaches 7, send message that lets the user play again
function loser () {
    console.log("loser");
}


function playAgain () {

}

// if time: make light and dark mode
