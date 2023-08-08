'use strict';

let secretNumber = Math.trunc(Math.random() * 20)+1;
let score = 20
let highscore = 0;

document.querySelector('.check').addEventListener('click', ()=>{
    const guess = Number(document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent = 'No Number!';
    } else if(guess === secretNumber){
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.message').textContent = '🎉 Correct Number!';

        if(score>highscore){
            highscore = score
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (guess > secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = 'Too high!';
            score--;
            document.querySelector('.score').textContent = score
        }
        else{
            document.querySelector('.message').textContent = 'you lost the game';
            document.querySelector('.score').textContent = 0
        }
        
    } else if (guess < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = 'Too low!';
            score--;
            document.querySelector('.score').textContent = score
        }
        else{
            document.querySelector('.message').textContent = 'you lost the game';
            document.querySelector('.score').textContent = 0
        }
    }
});

//coding challenge 1
document.querySelector('.again').addEventListener('click', ()=>{
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20)+1;
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.guess').value = '';
})
//coding challenge 1