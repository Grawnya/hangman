# Hangman

# Introduction

# Project Aim
Welcome to a website dedicated to playing the popular childhood game Hangman. The user essentially guesses what letters are contained in a word, that has been randomly selected by the computer.

[Visit the Website Here](https://grawnya.github.io/hangman/)

[Visit the Project's GitHub Repository Here]( https://github.com/Grawnya/hangman)

![Responsive Display](documentation/responsive-screens.png)

# Table of Contents

* [UX](#ux "UX")
    * [User Goals](#user-goals "User Goals")
    * [User Stories](#user-stories "User Stories")
    * [User Requirements and Expectations](#user-requirements-and-expectations)
        * [Requirements](#requirements)
        * [Expectations](#expectations)
    * [Design Choices](#design-choices "Design Choices")
        * [Font](#font "Font")
        * [Icons](#icons "Icons")
        * [Colours](#colours "Colours")
        * [Structure](#structure "Structure")

# UX

## User Goals
* Easy to navigate around
* All content remains centrally located on the device screen
* Quick flowing game with no interruptions or slow loading times
* Simple change between light and dark mode
* Clear knowledge of which letters pressed are right or wrong

## User Stories
* As a user, I want to easily interact with the game.
* As a user, I want to know how to play the game.
* As a user, I want to play a game that is not slow to run.
* As a user, I want to know if the letter I selected is in the word or not in the game.

## User Requirements and Expectations
### Requirements
* Easy to navigate on the different screen sizes – mobile, tablet and larger screens.
* Present basic introductory sentence to play the game.
* Let the user know if the letter they select is contained within the word or not.
* Entice the user to play again with aesthetically pleasing modal boxes.

### Expectations
* I expect the game to flow nicely with a clear, logical progression of the game.
* I expect the website to be completely responsive to all screen sizes
* I expect to set up the form if the user wins, so that it has to be correctly filled out in order for it to be successfully submitted and used to manipulate the DOM.
* I expect the user to utilise the dark/light mode functionality of the website throughout the game.


\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

## Design Choices
### Font
To deviate from the standard fonts, [Google Fonts](https://fonts.google.com/ "Google Fonts") was used to obtain a font style, which would be reminiscent of a classroom blackboard. [Pangolin]( https://fonts.google.com/specimen/Pangolin?query=pangolin) fulfilled the criteria for the game’s text, as it was easily readable, yet had that nostalgic childhood vibe.

### Icons
In order to obtain some icons for the website, [Font Awesome](https://fontawesome.com/ "Font Awesome") will be utilised. An icon is only required for the dark/light mode button as the hangman images are all pictures.

### Colours
To select the colour palette for the project, was inspired by a traditional blackboard for the dark mode, and by a whiteboard for the light mode. For dark mode, when checking the contrast of the colours on [Web AIM](https://webaim.org/resources/contrastchecker/ "Web AIM"), the dark green with the white passed. For the light mode, the dark blue with the white also passed. Therefore, the following colours were selected for the project:

![Colour Palette](documentation/final-color-pallette.jpg)

Where:
*  #033e05 (also known as --dark green) is used for the background of the game in dark mode, as well as the font and the button background colour of the modal boxes.
*  #1d4999 is used for the image and fonts of the game in light mode, as well as the background colour of the modal boxes.
*  #ffffff (also known as --white) is used for the images, fonts and modal box background colour in dark mode, but is used for the background of the game, as well as the font and button background in the modal boxes in light mode.
*  #0ff04d is used for the background of the key if it is correct and contained in the word.
*  #f81307 is used for the background of the key if it is wrong and not contained in the word.

### Structure
The website will be built for a small mobile screen of width 320px and then will also meet the requirements for a medium/tablet and large screen, as shown in the table below.

| Screen Size   | Breakpoint |
| -----------   | ---------- |
| small/mobile  |    320px   |
| medium/tablet |    768px   |
| large         |   992+px   |


\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;
