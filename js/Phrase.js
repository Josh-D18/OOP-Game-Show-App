/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase){
        this.phrase = phrase;
    }

    addPhraseToDisplay(){
        let ul = document.querySelector('#phrase ul');
        let li = document.createElement('li');
        let phrases = document.createTextNode(this.phrase);
        console.log(ul);
        for (let i = 0; i < phrases.length; i++){
            let letters = phrases.nodeValue[i];
            if (letters === ''){
                li.classList.add('space');
                li.insertAdjacentHTML('afterbegin', letters);
                ul.appendChild(li); 
            } else {
                li.classList.add('hide');
                li.classList.add('letter');
                li.insertAdjacentHTML('afterbegin', letters);
                ul.appendChild(li); 
            }   
        }
    }

    checkLetter(){
        
    }

    showMatchedLetter(){

    }

}