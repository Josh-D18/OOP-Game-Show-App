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
        let phrases =  {
            phrase: {
                'phrase': 'The bewildered tourist was lost'
            },
            phrase: {
                'phrase': 'The lost puppy was a wet and stinky dog'
            },
            phrase: {
                'phrase': 'It was a story as old as time'
            },
            phrase: {
                'phrase': 'Saturday became a cool, wet afternoon'
            },
            phrase: {
                'phrase':  'He was waiting for the rain to stop'
            }
        };
        console.log(phrases)
        return phrases;
    }
    
    getRandomPhrase(){
        let ranNum = Math.floor(Math.random() * 5);
        console.log(this.createPhrases())
        return this.createPhrases()['phrase'][ranNum];
    }

    handleInteraction(){

    }

}