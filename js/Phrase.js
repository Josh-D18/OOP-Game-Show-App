/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase){
        this.phrase = phrase;
    }


    addPhraseToDisplay(){
        const ul = document.querySelector('#phrase ul');
        const phrases = document.createTextNode(this.phrase);

        for (let i = 0; i < phrases.length; i++){
            const li = document.createElement('li');
            const listOfWords = [phrases];
            li.textContent = listOfWords[0].data[i];

            if (li.textContent === ' '){
                li.classList.add('hide');
                li.classList.add('space');
                ul.appendChild(li); 
            } else {
                li.classList.add('hide');
                li.classList.add('letter');
                ul.appendChild(li); 
            } 
        }
    }

    /** 
    * Checks if passed letter is in phrase 
    * @param (string) letter - Letter to check 
    */ 

    checkLetter(letter){
        let activePhrase = game.activePhrase;
        for (let i = 0; i < activePhrase.length; i++){
            if (letter === activePhrase[i]){
                return true;
            }
        }
    }

    showMatchedLetter(){

    }

}