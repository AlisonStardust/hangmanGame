let answer, attemptsLeft, correctGuesses, wrongGuesses;

const forma = document.querySelector('.website_appforma');
const letterCounter = document.querySelector('.website_letterCounter');
const lettersGuessed = document.querySelector('.website_lettersGuessed');
const input = document.querySelector('.website_app--text');

function start() {
  answer = `david bowie`;
  let split = answer.split('');
  attemptsLeft = 5;
  wrongGuesses = [];
  correctGuesses = [];
  split.forEach(eachLetter => {
  if (eachLetter === ' ') {
    correctGuesses.push('_')
  } else {
    correctGuesses.push('*')
  }
  })
  $(".website_answer").text(correctGuesses.join(' '))
  $(".website_letterCounter").text(attemptsLeft);
}

function printGuesses(letter) {
  if (answer.indexOf(letter) === -1) {
    attemptsLeft--;
    $(".website_letterCounter").text(attemptsLeft);
    wrongGuesses.push(letter);
    $(".website_lettersGuessed").text(wrongGuesses.join(', '))
  } else {
    //split.forEach(eachLetter => if (eachLetter === letter) => correctGuesses[eachLetter] = letter)
    for (var i = 0; i < answer.length; i++) {
      if (answer[i] === letter) {
        correctGuesses[i] = letter;
        $(".website_answer").text(correctGuesses.join(' '))
      }
    }
  }
}

function checkResult() {
  if (correctGuesses.indexOf('*') === -1) {
    alert('You Won!');
  } else if (attemptsLeft === 0) {
    alert('You Lost!');
  }
}

forma.addEventListener('submit', functSubmit);
function functSubmit() {
  if (input.value.length === 1 && input.value.match(/^[a-zA-Z_ ]*$/)) {
  printGuesses(input.value.toLowerCase());
  checkResult();
  } else {
    alert("you dumb?")
    input.value.length === 0;
  }
}

start();