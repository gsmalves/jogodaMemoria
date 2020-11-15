const cartas = document.querySelectorAll('.carta')
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;




function flipcarta(){
    if(lockBoard) return;
    if(this===firstCard) return;
    this.classList.add('flip')
    if(!hasFlippedCard){
        hasFlippedCard = true
        firstCard=this;
        return
    }
    secondCard=this;
    hasFlippedCard=false;
    checkForMatch();
}
function checkForMatch(){
    if(firstCard.dataset.carta===secondCard.dataset.carta){
        
        disableCards();
        return;
    }
    unflipCards();
}
function disableCards(){
    firstCard.removeEventListener('click', flipcarta)
    secondCard.removeEventListener('click', flipcarta)
}
function unflipCards(){
    lockBoarda = true;

    setTimeout(()=> {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
    
    lockBoard = false;
    },1500);
}

cartas.forEach((carta)=>{
    carta.addEventListener('click',flipcarta);

});
