/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
const randomPhrase = game.getRandomPhrase(); 
const phrase = new Phrase(randomPhrase);
let startButton = document.querySelector('#btn__reset');

//Start Game Event
startButton.addEventListener('click', () => {
    game.startGame();
    game.getRandomPhrase();
    phrase.addPhraseToDisplay();
    console.log(game.activePhrase.checkLetter('a'));
    console.log(game.activePhrase.showMatchedLetter('a'));
    console.log(game.checkForWin());
    console.log(game.removeLife())
});

// game.phrases.forEach((phrase, index) => {
//     console.log(`Phrase ${index +1} - phrase: ${phrase.phrase}`);
// });

// const logPhrase = (phrase) => { 
//     console.log(`Phrase - phrase: `, phrase); 
// }; 
//     logPhrase(game.getRandomPhrase()); 
//     logPhrase(game.getRandomPhrase()); 
//     logPhrase(game.getRandomPhrase()); 
//     logPhrase(game.getRandomPhrase()); 
//     logPhrase(game.getRandomPhrase());


// console.log(phrase.phrase);
// console.log(game.activePhrase.checkLetter('a'))