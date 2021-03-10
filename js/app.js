/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let game;
const startButton = document.querySelector('#btn__reset');
const keyboardButtons = document.querySelectorAll('.key');

//Start Game Event
startButton.addEventListener('click', () => {
    // defining a new game instance
    game = new Game();
    game.startGame();
    game.activePhrase.addPhraseToDisplay();
});


//Keyboard Button Event
keyboardButtons.forEach(button => {
    button.addEventListener('click', () => {
        game.handleInteraction(button);
    });
});





// Commented Code that was used for testing

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

// console.log(game.activePhrase.checkLetter('a'));
    // console.log(game.activePhrase.showMatchedLetter('a'));
    // console.log(game.checkForWin());
    // // console.log(game.removeLife())
    // const randomPhrase = game.getRandomPhrase(); 
// const phrase = new Phrase(randomPhrase);