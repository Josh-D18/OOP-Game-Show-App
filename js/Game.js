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
        // if (letters.classList.indexOf('show')){
        //     return true;
        // }
        // if (letters.classList.contains('show')){
        //     return true;
        // }
    }



    removeLife(){

    }


    gameOver(){

    }

    handleInteraction(){

    }
}