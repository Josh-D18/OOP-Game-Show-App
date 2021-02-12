/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
const phrase = new Phrase();
let startButton = document.querySelector('#btn__reset');

//Start Game Event
startButton.addEventListener('click', () => {
    game.startGame();
    // game.getRandomPhrase();
    
});

game.phrases.forEach((phrase, index) => {
    console.log(`Phrase ${index} - phrase: ${phrase}`);
});

