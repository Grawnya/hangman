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
        
        // convert to light mode
        if (mode === "dark") {
            document.getElementById("logo").src ="assets/images/full_body_light.png";
            document.documentElement.style.setProperty('--dark-green', '#ffffff');
            document.documentElement.style.setProperty('--white', '#1d4999');
            
            if (!currentImage.includes("_light")) {
                currentImage = currentImage.slice(0, -4);
                currentImage = currentImage + '_light.png';
                document.getElementById('full-hangman-start').src = currentImage;
            }

            for (let i = 0; i < keyboardKeys.length; i++) {
                if (keyboardKeys[i].style.backgroundColor != "#0ff04d" && keyboardKeys[i].style.backgroundColor != "#f81307") {
                    keyboardKeys[i].style.backgroundColor = "#1d4999";
                } 
            }
            mode = "light";
            
            // convert to dark mode
        }else if (mode === "light") {
            document.getElementById("logo").src ="assets/images/full_body.png";
            document.documentElement.style.setProperty('--dark-green', '#033e05');
            document.documentElement.style.setProperty('--white', '#ffffff');
            if (currentImage.includes("_light")) {
                currentImage = currentImage.slice(0, -10);
                currentImage = currentImage + '.png';
                document.getElementById('full-hangman-start').src = currentImage;
            }
            
            for (let i = 0; i < keyboardKeys.length; i++) {
                if (keyboardKeys[i].style.backgroundColor != "#0ff04d" && keyboardKeys[i].style.backgroundColor != "#f81307") {
                    keyboardKeys[i].style.backgroundColor = "#ffffff";
                } 
            }
            mode = "dark";
        }
    });
}

// pick word
function pickWord() {
    var indexOfWordToGuess = Math.floor(Math.random() * WORDS.length);
    var wordToGuess = WORDS[indexOfWordToGuess];
    return wordToGuess.toUpperCase();
}

// format the start of the game when the start button has been clicked
function startGame () {
    word = pickWord();
    individualLetters = word.split("");
    document.getElementById('game-type-buttons').addEventListener('click', function (event) {
        document.getElementById("printing-wrong-letters").innerText = wrongAnswerToPrint;
        document.getElementById("wrong-answers-printed").style.visibility = 'visible';
        resetView();
        mouseSelectLetter(word);
        keyboardSelectLetter(word);
    });
}

function keyboardSelectLetter (word) {
    document.addEventListener("keydown", function(event) {
        let keyPressed = event.key;
        let upperKeyPressed = keyPressed.toUpperCase();
        if (!selectedLetters.includes(upperKeyPressed)) {
            selectedLetters.push(upperKeyPressed);
            if (individualLetters.includes(upperKeyPressed)) {
                right(upperKeyPressed);
            } else {
                wrong(upperKeyPressed);
            }
        }
    });
}

function mouseSelectLetter (word) {
    document.addEventListener("click", function(event) {
        let keyClicked = event.target.innerText;
        let upperKeyClicked = keyClicked.toUpperCase();
        if (!selectedLetters.includes(upperKeyClicked)) {
            selectedLetters.push(upperKeyClicked);
            if (individualLetters.includes(upperKeyClicked)) {
                right(upperKeyClicked);
            } else {
                wrong(upperKeyClicked);
            }
        }
    });
}

// if a letter is pressed and is wrong, the letter block is red and the hangman picture is updated
function wrong (key) {
    if (document.getElementById(key) !== null){
        document.getElementById(key).style.backgroundColor = "#f81307";
        wrongAnswerToPrint += key + ", ";
        document.getElementById("printing-wrong-letters").innerText = wrongAnswerToPrint;
        wrongAnswers += 1;
    
        switch (wrongAnswers) {
            case 1:
                if (mode === "dark"){
                    document.getElementById('full-hangman-start').src = 'assets/images/frame_gain.png';
                } else if (mode === "light") {
                    document.getElementById('full-hangman-start').src = 'assets/images/frame_gain_light.png';
                }
                break;
        
            case 2:
                if (mode === "dark"){
                document.getElementById('full-hangman-start').src = 'assets/images/head_gain.png';
            } else if (mode === "light") {
                document.getElementById('full-hangman-start').src = 'assets/images/head_gain_light.png';
            }
                break;
        
            case 3:
                if (mode === "dark"){
                document.getElementById('full-hangman-start').src = 'assets/images/body_gain.png';
            } else if (mode === "light") {
                document.getElementById('full-hangman-start').src = 'assets/images/body_gain_light.png';
            }
                break;
        
            case 4:
                if (mode === "dark"){
                document.getElementById('full-hangman-start').src = 'assets/images/left_arm_gain.png';
            } else if (mode === "light") {
                document.getElementById('full-hangman-start').src = 'assets/images/left_arm_gain_light.png';
            }
                break;
    
            case 5:
                if (mode === "dark"){
                document.getElementById('full-hangman-start').src = 'assets/images/right_arm_gain.png';
            } else if (mode === "light") {
                document.getElementById('full-hangman-start').src = 'assets/images/right_arm_gain_light.png';
            }
                break;
        
            case 6:
                if (mode === "dark"){
                document.getElementById('full-hangman-start').src = 'assets/images/left_leg_gain.png';
            } else if (mode === "light") {
                document.getElementById('full-hangman-start').src = 'assets/images/left_leg_gain_light.png';
            }
                break;
        }
        if (wrongAnswers == 7) {
            resetEndGameValues();
            if (mode === "dark"){
                document.getElementById('full-hangman-start').src = 'assets/images/full_body.png'; 
            } else if (mode === "light") {
                document.getElementById('full-hangman-start').src = 'assets/images/full_body_light.png';
            }
            document.getElementById("keyboard").style.visibility = "hidden";
            document.removeEventListener("keydown", endGameLoser());
        }
    }
}

// if a letter is pressed and is right, the letter block turns green and it adds letter to screen
function right (key) {
    document.getElementById(key).style.backgroundColor = "#0ff04d";
    let suitableGap = document.getElementsByClassName("word-letter");
    for (let i = 0; i < individualLetters.length; i ++) {
        if (key == individualLetters[i]) {
            suitableGap[i].innerText = key;
            lettersLeft -= 1;
            if (lettersLeft == 0 && endGameWinner() == false) {
                resetEndGameValues();
                document.removeEventListener("keydown", endGameWinner());
                document.getElementById("keyboard").style.visibility = "hidden";
            }
        }
    }
}

// if all the right letters: prompt user for name, show score on leaderboard and ask to play again
function endGameWinner () {
    var answersWrong = wrongAnswers;
    resetEndGameValues();
    document.getElementById("wrong-answers-printed").style.visibility = 'hidden';
    document.getElementById("modal-box-win").style.display = "block";
    document.getElementById("modal-submit-username").addEventListener("click", function (event) {
        event.preventDefault();
        var usernameValue = document.getElementById("name-input").value;
        var winner = `Congrats ${usernameValue}, You Won! You got the correct answer with only ${answersWrong} wrong guess(es).`;
        document.getElementById("replay-heading").innerText = winner;
        document.getElementById("modal-box-win").style.display = "none";
        document.getElementById("replay").style.display = "block";
        document.getElementById("play-again-button").addEventListener("click", function () {
            playAgain();
        });
    });
}

// if guesses run out: say what word was and ask to play again
function endGameLoser () {
    resetEndGameValues();
    document.getElementById("wrong-answers-printed").style.visibility = 'hidden';
    var answer = `You Lost! The answer was ${word}.`;
    document.getElementById("replay-heading").innerText = answer;
    document.getElementById("replay").style.display = "block";
    
    document.getElementById("play-again-button").addEventListener("click", function () {
        playAgain();
    });
}

function playAgain () {
    selectedLetters = [];
    wrongAnswers = 0;
    lettersLeft = 7;
    wrongAnswerToPrint = "Wrong: ";
    document.getElementById("printing-wrong-letters").innerText = wrongAnswerToPrint;
    document.getElementById("wrong-answers-printed").style.visibility = 'visible';
    var keyboardKeys = document.getElementsByClassName("keyboard-button");
    for (let i = 0; i < keyboardKeys.length; i++) {
        if (mode === "dark") {
            keyboardKeys[i].style.backgroundColor = "#ffffff";
        } else if (mode === "light") {
            keyboardKeys[i].style.backgroundColor = "#1d4999";
        }
    }
    document.getElementById("replay").style.display = "none";
    word = pickWord();
    individualLetters = word.split("");
    resetView();
    mouseSelectLetter(word);
    keyboardSelectLetter(word);
}

// resets the view of the screen to the start of a game
function resetView () {
    document.getElementById('game-type-buttons').style.visibility = 'hidden';
    document.getElementById('game-type-buttons').style.display = 'none';
    if (mode === "dark") {
        document.getElementById('full-hangman-start').src = 'assets/images/blank_image.png';
    } else if (mode === "light") {
        document.getElementById('full-hangman-start').src = 'assets/images/blank_image_light.png';
    }
    document.getElementById('guessing-letters').style.paddingTop = "1rem";
    document.getElementById('full-hangman-start').style.paddingTop = "2%";
    var startLettersNodeList = document.querySelectorAll('.word-letter');
    startLettersNodeList.forEach(function (item) {
        item.innerText = "_";
    });
    document.getElementById('keyboard').style.visibility = 'visible';
}

// reset the end game values so they don't continue counting when the user puts in their username
function resetEndGameValues () {
    lettersLeft = 1000;
    wrongAnswers = -1000;
    selectedLetters = [];
}