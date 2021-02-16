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

    checkLetter(){
        
    }

    showMatchedLetter(){

    }

}