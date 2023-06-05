'use strict';

let secretNumber = Math.trunc(Math.random() * 30) + 1;
let score = 30;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};



document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // if you did not guess is true then print 'No Number'
  if (!guess) {
    // document.querySelector('.message').textContent = '❌ No Number !';
    displayMessage('❌ No Number !');
    // if you win
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '✅ Bravo! Correct answer';
    displayMessage('✅ Bravo! Correct answer');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '60rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too High !' : '📉 Too Low !';

      displayMessage(guess > secretNumber ? '📈 Too High !' : '📉 Too Low !');
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#ff7f7f';
    } else {
      // document.querySelector('.message').textContent = '💥 You Lost The Game';
      displayMessage('💥 You Lost The Game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// FOR REFERRENCE SAKE

//  if guess is too high
//  else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '📈 Too High !';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = '💥 You Lost The Game';
//     document.querySelector('.score').textContent = 0;
//   }

//   document.querySelector('body').style.backgroundColor = ' 	#ff4c4c';

//   // if guess is too low
// } else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '📉 Too Low !';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = '💥 You Lost The Game';
//     document.querySelector('.score').textContent = 0;
//   }

//   document.querySelector('body').style.backgroundColor = ' 	#ff7f7f';
// }

// again button

document.querySelector('.again').addEventListener('click', function () {
  score = 30;
  secretNumber = Math.trunc(Math.random() * 30) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
