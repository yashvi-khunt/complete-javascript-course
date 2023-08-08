'use strict';

//selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentEl0 = document.getElementById('current--0');
const currentEl1 = document.getElementById('current--1');

const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;

//initial view
score0El.textContent = 0;
score1El.textContent = 0;
diceEL.classList.add('hidden');


//rolling dice
btnRoll.addEventListener('click', ()=>{
    //1. Generating a random dice roll
    const diceValue = Math.trunc(Math.random()*6)+1;
    
    //2. Display dice
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${diceValue}.png`;

    //3. Check for 1
    if(diceValue !== 1){
        //Add dice value to current score
        currentScore += diceValue;

        document.getElementById(`current--${activePlayer}`).textContent = currentScore
    }
    else{
        //current player reset & bg change
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
     
        //switch player
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
        
    }
})

btnHold.addEventListener('click',()=>{
    //1. add current score to active player's score
    scores[activePlayer] += currentScore;
    // document.getElementById(`current--${activePlayer}`).textContent = scores[activePlayer];
    //check if player's score is >= 100
    //finish game


    //Switch to the next player
})

