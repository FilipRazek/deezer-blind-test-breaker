# Deezer Blind Test Breaker

This is a simple Firefox extension used to demonstrate a vulnerability in the Deezer Blind Test game.
By monitoring the network requests made by the game, matching it with known songs, it is possible to click on the correct answer automatically.

## A word of caution

This extension is for educational purposes only. It is not intended to be used to cheat in the game. It is meant to demonstrate a vulnerability in the game and to raise awareness about the security vulnerabilities that can be found in web applications.
The author of this extension cannot, under any circumstances, be held responsible for any misuse of this extension or its source code.

## Installation

1. Clone this repository
2. Open a Firefox window with the extension (run `web-ext run` or go to `about:debugging` and load the extension temporarily)
3. Go to deezer.com and start a Blind Test game
4. Open the developer console (Ctrl + Shift + J)
5. Follow the console messages to add the songs to your local database
