'use strict';

// console.log(document.querySelector('.message'));

// document.querySelector('.score').textContent = "8";

let number = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

function displayMessage( message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
  
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess);

//Invalid input or nothing given!
  if(!guess || guess < 0 || guess > 20){
    displayMessage('❌ Not a Valid Number');
  }
//Guess is correct! Player wins!
  else if(guess === number){
    displayMessage("🎉Correct Number");
    document.querySelector('body').style.backgroundColor = "#60b347";
    document.querySelector('.number').style.width = "30rem";
    document.querySelector('.number').textContent = number;

    if(score > highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

  }
//For all other cases
  else{
    if(score > 1){
      displayMessage((guess < number)?"😭 too low!":"🤯 too high!"); //string changes based on guess greater or lesser than correct number
      score--; 
      document.querySelector('.score').textContent = score;
      }
    else{
      displayMessage("☠️☠️☠️ Game Over ☠️☠️☠️");
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Again button functionality! Reset original form !!


document.querySelector('.again').addEventListener('click',function(){
  
  number = Math.trunc(Math.random()*20) + 1;
  score = 20;

  displayMessage("Start guessing...");
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = "?";
  document.querySelector('.guess').value = "";
  document.querySelector('body').style.backgroundColor = "#222";
  document.querySelector('.number').style.width = "15rem";

});

