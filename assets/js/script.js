// start counter for wrong letters - only 7 possible wrong attempts 
var counter = 0;

removeStartButton();

// start - removes the button and moves down the guessing-letters section
function removeStartButton () {
    document.addEventListener('click', function (event) {
        if (event.detail) {
            console.log('clicked');
            document.getElementById('game-type-buttons').remove();
        };
    })
}

// only 7 letter words - get all possible options and randomly select one

// set the number of underscores to the number of letters in the words

// Let the user both click/select the button on the screen and press the key

// if a letter is pressed and is wrong, the letter block is red, the counter is added and the hangman picture is updated

/* if a letter is pressed and is right, the letter block turns green, the word checks if its equal to the original input
and if not, it lets the user pick another letter */

// if the counter reaches 7, send message that lets the user play again

// if the word is obtained, send message to say well done and play again

// if time: make light and dark mode
