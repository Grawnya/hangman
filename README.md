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
* [Wireframes](#wireframes "Wireframes")
* [Features](#features "Features")
    * [Existing Features](#existing-features "Existing Features")
        * [Home Page](#home-page "Home Page")
        * [Game Screen (Core of the Application)](#game-screen-(core-of-the-application) "Game Screen (Core of the Application)")


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

![Colour Palette](documentation/final-color-pallette.png)

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

# Wireframes
[Balsamiq](https://balsamiq.com/wireframes/ "Balsamiq") was used to create the conception for the website appearance and flow. I initially created a mobile version in-line with my mobile-first approach and then followed with a medium and large screen version. The key is to make sure that the whole game could fit on the one screen and no scrolling is required.

Basic wireframes can be found below:


### [Large Screen Wireframe](documentation/large-screen.png "Large Screen Wireframe ")
### [Medium/Tablet Screen Wireframe]( documentation/tablet-screen.png " Medium/Tablet Screen Wireframe ")
### [Mobile Wireframe]( documentation/small-mobile-screen.png "Mobile wireframe")


\
&nbsp;
[Back to Top](#table-of-contents)
\
&nbsp;

# Features

## Existing Features
### Home Page
The home page consists of a basic and enticing central hangman image, reminiscent of school days, to lure the user in. The colour scheme reinforces this. The title at the top of the page highlights that the game being played will be hangman. 

The start button’s large design entices the user to click on the button. Below the centrally located start button, the user can find a brief introduction into how the game will function.

This can be seen in the screenshot below:

![Home Page](documentation/home-page-mobile.png)

The larger screen sizes include room either side of the game so the image maintains its aspect ratio and the game is not stretched out. 
\
&nbsp;

### Game Screen (Core of the Application)
The game screen is the screen of most importance in the game as the user spends most of their time here when on the website. The game automatically begins by clearing the default letters HANGMAN, as well as removing the start button, hangman image and the introductory sentence. A keyboard is also introduced at the bottom of the screen, which is ideal for mobile or tablet users, who might not have an external keyboard.

![Game Screen at the Start](documentation/game-screen-at-start.png)

As the game progresses, the correct letters (i.e., the letters contained within the word) are included in the letters underlined on the screen and the associated key on the keyboard turns green.
If the wrong letter is selected (i.e., a letter not found in the word) it is pasted underneath the word in the “Wrong” section and the key associated with the letter turns red on the keyboard, as seen below. The image also changes to add a body part to the hangman.

![Game Screen During the Game](documentation/game-screen-progress.png)

The user can continuously click on or press down keys until one of the 2 criteria are met to end the game:
1. The user has selected all the letters found in the word and therefore has won or
2. The user has selected 7 wrong letters and therefore, has ran out of option to select a new letter and has lost.

Both options prompt the appearance of modal boxes.

\
&nbsp;
