const secretNumber = Math.trunc(Math.random() * 20) + 1;
var score = 20;
var highScore = 0;
//check button
document.querySelector(".Check").addEventListener('click', function () {
    var guess = Number(document.querySelector(".guess").value); 

    if (!guess) {
        displayMessage("⛔️ Missing Number");
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score = score - 1;
            document.querySelector('.score').textContent = score;
            document.querySelector('.light').classList.add('dark');
            document.querySelector('.light').textContent = " X";
            document.querySelector('.light').style.color ="white";
        } else {
            displayMessage('You lost! :(');
            document.querySelector('.score').textContent = 0;
            document.querySelector('.light').classList.add('dark');
            document.querySelector('.light').textContent = "X";
            document.querySelector('.light').style.color ="white";
        }
    } else if (guess === secretNumber) {
        displayMessage("Correct Number :)");
        document.querySelector(".light").textContent = secretNumber;
        document.querySelector('.light').classList.remove('dark');
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
});

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector(".reset").addEventListener('click', function () {
    resetGuessing();
});

function resetGuessing() {
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('.light').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.light').classList.remove('dark');
    displayMessage("Start guessing...");
}
