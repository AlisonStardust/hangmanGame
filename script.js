const hangmanApp = () => {

  let answer, attemptsLeft, correctGuesses, wrongGuesses;

  const forma = document.querySelector('.website_appforma');
  const letterCounter = document.querySelector('.website_letterCounter');
  const lettersGuessed = document.querySelector('.website_lettersGuessed');
  const input = document.querySelector('.website_app--text');
  const websiteAnswer = document.querySelector('.website_answer');
  const websiteApp = document.querySelector('.website_app--submit');


  const start = () => {
    answer = `david bowie`;
    let split = answer.split('');
    attemptsLeft = 6;
    wrongGuesses = [];
    correctGuesses = [];
    correctGuesses = split.map(letter => letter === ' ' ? '_' : '*');
    websiteAnswer.innerText = correctGuesses.join(' ');
    lettersGuessed.innerText = `Wrong letters: ${wrongGuesses.join(', ')}`
    letterCounter.innerText = `Attempts left: ${attemptsLeft}`;
  }

  forma.addEventListener('submit', functSubmit);

  function functSubmit(event) {
    event.preventDefault();
    if (input.value.length === 1 && input.value.match(/^[a-zA-Z_ ]*$/) && attemptsLeft > 0) {
    printGuesses(input.value.toLowerCase());
    checkResult();
    setTimeout(() => forma.reset(), 500);
    } else if (attemptsLeft <= 0) {
      alert("you already lost, goodbye")
    } else {
      alert("Please provide only one letter each time!");
    }
  }

  const printGuesses = (letter) => {
    if (answer.indexOf(letter) === -1) {
      input.classList.add("website_app--text--shake");
      setTimeout(() => input.classList.remove("website_app--text--shake"), 500);
      attemptsLeft--;
      letterCounter.innerText = `Attempts left: ${attemptsLeft}`;
      letterCounter.classList.add("website_letterCounter--wrong");
      setTimeout(() => letterCounter.classList.remove("website_letterCounter--wrong"), 1000);
      wrongGuesses.push(letter);
      lettersGuessed.innerText = `Wrong letters: ${wrongGuesses.join(', ')}`;
    } else {
      for (var i = 0; i < answer.length; i++) {
        if (answer[i] === letter) {
          correctGuesses[i] = letter;
        }
      }
      websiteAnswer.innerText = correctGuesses.join(' ');
    }
  }

  const checkResult = () => {
    if (correctGuesses.indexOf('*') === -1) {
      alert('You Won!');
    } else if (attemptsLeft === 0) {
      alert('You Lost!');
    }
  }

  start();
}

hangmanApp();