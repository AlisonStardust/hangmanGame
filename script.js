let answer, attemptsLeft, correctGuesses, wrongGuesses;

const forma = document.querySelector('.website_appforma');
const letterCounter = document.querySelector('.website_letterCounter');
const lettersGuessed = document.querySelector('.website_lettersGuessed');
const input = document.querySelector('.website_app--text');
const websiteAnswer = document.querySelector('.website_answer');
const websiteApp = document.querySelector('.website_app--submit');


function start() {
  answer = `david bowie`;
  let split = answer.split('');
  attemptsLeft = 6;
  wrongGuesses = [];
  correctGuesses = [];
  correctGuesses = split.map(letter => letter === ' ' ? '_' : '*');
  websiteAnswer.innerText = correctGuesses.join(' ');
  letterCounter.innerText = attemptsLeft;
}

forma.addEventListener('submit', functSubmit);

function functSubmit(event) {
  event.preventDefault();
  if (input.value.length === 1 && input.value.match(/^[a-zA-Z_ ]*$/) && attemptsLeft > 0) {
  printGuesses(input.value.toLowerCase());
  checkResult();
  } else if (input.value.match(/^[a-zA-Z_ ]*$/) === false) {
    alert("you dumb? Please provide only one letter each time!")
    input.value.length === 0;
  } else if (attemptsLeft <= 0) {
    alert("you already lost, goodbye")
  }
}

function printGuesses(letter) {
  if (answer.indexOf(letter) === -1) {
    attemptsLeft--;
    letterCounter.innerText = attemptsLeft;
    wrongGuesses.push(letter);
    lettersGuessed.innerText = wrongGuesses.join(', ');
  } else {
    for (var i = 0; i < answer.length; i++) {
      if (answer[i] === letter) {
        correctGuesses[i] = letter;
      }
    }
    websiteAnswer.innerText = correctGuesses.join(' ');
  }
}

function checkResult() {
  if (correctGuesses.indexOf('*') === -1) {
    alert('You Won!');
  } else if (attemptsLeft === 0) {
    alert('You Lost!');
  }
}

start();