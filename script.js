'use strict';
/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🥳Correct number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value; */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //if there is no guess, then print that No number!
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔No Number!';
    displayMessage('⛔No Number!');
    //when player wins the game
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent =
    //   '👏Hurray! You got it right!';
    displayMessage('👏Hurray! You got it right!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      /*  document.querySelector('.message').textContent =
        guess > secretNumber
          ? '↗️The guess is too high!'
          : '↙️The guess is too low!'; */
      displayMessage(
        guess > secretNumber
          ? '↗️The guess is too high!'
          : '↙️The guess is too low!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥You lost the game!';
      displayMessage('💥You lost the game!');
      document.querySelector('.score').textContent = 0;
    }

    //guess is too high
  } /* else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '↗️The guess is too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    //guess is too low
  } */ /* else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '↙️The guess is too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } */
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
