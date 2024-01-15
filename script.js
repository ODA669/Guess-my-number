'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
console.log(document.querySelector('.number').textContent);
document.querySelector('.score').textContent = 20;
console.log(document.querySelector('.score').textContent);

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
const secretNumber = Math.trunc(Math.random() * 20) + 1;
//if we erase this line the guest number disapier  and only show in the screen the question mark
//document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highscore = 0;

//add event in the button to check the number
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //if the numbre is wrong or correct validation
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number! ⛔ ';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '👍 Correct Number!  ';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector(`body`).style.backgroundColor = `green`;
    document.querySelector(`.number`).style.width = `30rem`;

    if(score > highscore){
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    // score = score + 1;
    //score++;
    document.querySelector('.score').textContent = score;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High';
      //score = score - 1;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' You lost the game.';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low';
      //score = score - 1;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' You lost the game.';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector('.message').textContent = 'start guessing......';
  document.querySelector('.score').textContent = score;

  document.querySelector('.guess').value = ``;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`body`).style.backgroundColor = `black`;
});
