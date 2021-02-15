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
        


        [phrases].forEach((phrase, i) => {
            console.log(i);
            if (phrase === ' '){
                li.classList.add('space');
            } 
                li.classList.add('hide');
                li.classList.add('letter');
            
            li.insertAdjacentHTML('afterbegin', phrase[i]);
            ul.appendChild(li);
        });





        // for (let i = 0; i < phrases.length; i++){
        //     let letters = phrases.nodeValue[i];
    
        //     if (letters === ' '){
        //         li.classList.add('space');
        //     } 
        //         li.classList.add('hide');
        //         li.classList.add('letter');
            
        //     li.insertAdjacentHTML('afterbegin', letters);
        //     ul.appendChild(li);
        //     console.log(li);
        // }
    }

    checkLetter(){
        
    }

    showMatchedLetter(){

    }

}