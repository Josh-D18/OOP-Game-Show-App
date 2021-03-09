/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase){
        this.phrase = phrase;
    }


    addPhraseToDisplay(){
        const ul = document.querySelector('#phrase ul');
        const phrases = document.createTextNode(game.activePhrase['phrase']);
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
        const activePhrase = this.phrase;
        return activePhrase.includes(letter);
    }

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter){
        let wordChosen = document.querySelectorAll('.letter');
        for (let i = 0; i < wordChosen.length; i++){
                if (letter === wordChosen[i].innerHTML){
                    wordChosen[i].classList.remove('hide');
                    wordChosen[i].classList.add('show');
                }
        }
    }

}