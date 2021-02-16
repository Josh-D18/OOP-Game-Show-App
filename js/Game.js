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
        return ['The bewildered tourist was lost', 'The lost puppy was a wet and stinky dog', 'It was a story as old as time', 'Saturday became a cool, wet afternoon', 'He was waiting for the rain to stop']
    }
    
    getRandomPhrase(){
        let ranNum = Math.floor(Math.random() * 5);
        return this.createPhrases()[ranNum];
    }

    handleInteraction(){

    }

}