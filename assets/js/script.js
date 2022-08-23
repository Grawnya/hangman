import { WORDS } from "./words.js";
document.getElementById('keyboard').style.visibility = 'hidden';
var wrongAnswerToPrint = "Wrong: ";
var selectedLetters = [];
var wrongAnswers = 0;
var lettersLeft = 7;
var mode = "dark";
colorMode();
var word = "";
var individualLetters = [];
startGame();

// change colour mode
function colorMode() {
    document.getElementById("change-mode").addEventListener("click", function() {
        var currentImage = document.getElementById('full-hangman-start').src;
        var keyboardKeys = document.getElementsByClassName("keyboard-button");
    });
}

function startGame () {
    document.getElementById('game-type-buttons').addEventListener('click', function (event) {
        if (event.detail) {
            formatafterStart();
            document.getElementById('game-type-buttons').style.visibility = 'hidden';
            document.getElementById('keyboard').style.visibility = 'visible';
            document.getElementById('full-hangman-start').src = 'assets/images/blank_image.png';
            word = randomlySelectWord();
            individualLetters = word.split('');
        }
        mouseSelectLetter(word);
        keyboardSelectLetter(word);
    });
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
    console.log(wordToGuess.toUpperCase());
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
        let keyClicked = event.target.innerText;
        let upperKeyClicked = keyClicked.toUpperCase();
        buttonPressed(upperKeyClicked, word);
    });
}

// Let the user both click/select the button on the screen and press the key
function buttonPressed (key, word) {
    console.log(individualLetters);
    console.log(key);
    console.log(word);
    console.log(word.indexOf(key));
    console.log(word.indexOf(key) > -1);
    if (!lettersPressed.includes(key) && word.indexOf(key) > -1) {
        rightLetterSelected(key);
        addToPressedKeysArray(key);
    } else if (!lettersPressed.includes(key)) {
        wrongLetterSelected(key);
        addToPressedKeysArray(key);
    }
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
        if (key == individualLetters[i] && lettersLeft != 0) {
            suitableGap[i].innerText = key;
            lettersLeft -= 1;
        } 
    }
    if (lettersLeft == 0) {

        winner();
    }
}

function addToPressedKeysArray (key) {
    if (!lettersPressed.includes(key)) {
        lettersPressed.push(key);
    }
}

// if the word is obtained, send message to say well done with a leaderboard and play again
function winner () {
    lettersLeft = 1000;
    console.log("winner");
    var answersWrong = wrongAnswerCounter;
    document.getElementById("modal-box-win").style.display = "block";
    document.getElementById("modal-submit-username").addEventListener("click", function (event) {
        var usernameValue = document.getElementById("name-input").value;
        const checkUsernameExists = scoreTrack.some(obj => obj.user === usernameValue);
        if(!checkUsernameExists) {
            scoreTrack.push({user: usernameValue, wrongAnswers: answersWrong});
            scoreTrack.sort(function (a, b) {
                return a.wrongAnswers - b.wrongAnswers;
            });
        }
        var table = document.getElementById("leaderboard-table");
        document.getElementById("leaderboard-caption").innerText = "You Won";
        for (let i = 0; i < 5; i++) {
            if (i < scoreTrack.length) {
                var row = table.insertRow(i+1);
                var usernameTableValue = row.insertCell(0);
                usernameTableValue.innerText = scoreTrack[i].user;
                var wrongAnswerTableValue = row.insertCell(1);
                wrongAnswerTableValue.innerText = scoreTrack[i].wrongAnswers;
            }
        }
        document.getElementById("modal-box-win").style.display = "none";
        document.getElementById("leaderboard").style.display = "block";
        document.getElementById("leaderboard").style.visibility = "visible";
        document.getElementById("leaderboard").style.zIndex = "3";
        event.preventDefault();
        document.getElementById("play-again-button").addEventListener("click", function () {
            playAgain();
        });
    });
}

// if the counter reaches 7, send message that lets the user play again
function loser () {
    lettersLeft = 1000;
    console.log("loser");
    document.getElementById("modal-box-win").style.display = "none";
    document.getElementById("leaderboard").style.display = "block";
    document.getElementById("leaderboard").style.zIndex = "3";
    
    document.getElementById("leaderboard-caption").innerText = "You Lost";
    document.getElementById("play-again-button").addEventListener("click", function () {
        playAgain();
    });
}

function playAgain () {
    resetScreen();
    wrongAnswerCounter = 0;
    lettersPressed = [];
    lettersLeft = 7;
    clickStartButton();
}

function resetScreen() {
    var hangman = "HANGMAN";
    var resetStartLettersNodeList = document.querySelectorAll('.word-letter');
    for (let j = 0; j < resetStartLettersNodeList.length; j++) {
        resetStartLettersNodeList[j].innerHTML = hangman[j];
    }
    document.getElementById('keyboard').style.visibility = 'hidden';
    document.getElementById('game-type-buttons').style.visibility = 'visible';
    document.getElementById("leaderboard").style.display = "none";
    var keyboardKeys = document.getElementsByClassName("keyboard-button");
    for (let i = 0; i < keyboardKeys.length; i++) {
        keyboardKeys[i].style.backgroundColor = "#ffffff";
    }
}

// if time: make light and dark mode
