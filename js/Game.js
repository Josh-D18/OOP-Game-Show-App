/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(missed = 0, phrases, activePhrase){
        this.missed = missed;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

        /** 
    * Begins game by selecting a random phrase and displaying it to user */ 

    startGame(){
        let screenOverlay = document.querySelector(".start");
        screenOverlay.style.display = 'none';
        return this.activePhrase = this.getRandomPhrase();
    }


    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases(){
        let phrases = [
            {
                phrase:  ['The bewildered tourist was lost','The lost puppy was a wet and stinky dog','It was a story as old as time', 'Saturday became a cool, wet afternoon',  'He was waiting for the rain to stop']
            }
        ]
        return phrases.map(phrase => {return phrase['phrase']})
        
    }
    
    getRandomPhrase(){
        let ranNum = Math.floor(Math.random() * 5);
        return new Phrase(this.createPhrases()[0][ranNum]);
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    //    The contains() method checks whether a string contains a sequence of characters.
    // Returns true if the characters exist and false if not.
    checkForWin(){
        let letters = document.querySelectorAll('.letter');

        // .contains => https://www.javascripttutorial.net/dom/css/check-if-an-element-contains-a-class/
        // letters returned an object so I used a for in loop
        for (const key in letters) {
            if(letters[key].classList.contains('show')){
                return true;
            } else {
                return false;
            }
        }
    }

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */

    removeLife(){
        const hearts = document.querySelectorAll('.tries img');
        const lostLife = `images/lostHeart.png`;
        let missed = this.missed;

        for (let i = 0; i < hearts.length; i++){
            let heart = hearts[i].attributes[0].value;
            if(heart === "images/liveHeart.png"){
                hearts[i].src = lostLife;
                break
            };
            missed++;
            if(missed === 4){
                this.gameOver();
            }
        }
    }

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon){
        let gameOverMsg = document.querySelector('#game-over-message');
        let overlay = document.querySelector('.start');
        if (!gameWon){
            overlay.classList.add('lose');
            overlay.classList.remove('start');
            overlay.style.display = 'block';
            gameOverMsg.textContent = 'You Lose!';
        } 

        if (gameWon){
            overlay.classList.add('win');
            overlay.classList.remove('start');
            overlay.style.display = 'block';
            gameOverMsg.textContent = 'You Win!';
        }
    }

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */

    handleInteraction(button){
        button.disabled = true;
        // if (!this.activePhrase.showMatchedLetter(button.innerHTML)){

        // }
        console.log(button, game.activePhrase.showMatchedLetter(button.innerHTML),button.innerHTML)
    }
}