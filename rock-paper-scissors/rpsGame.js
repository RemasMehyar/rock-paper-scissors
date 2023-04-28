let userScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('input')

function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random() * 3)]
}

function disableButtons() {
    buttons.forEach(e => {
        e.disabled = true
    })
}

function gameChecker(userMove) {
    let computerMove = computerPlay()
    let result = ""

    if ((userMove == 'Rock' && computerMove == 'Scissors') ||
        (userMove == 'Scissors' && computerMove == 'Paper') ||
        (userMove == 'Paper' && computerMove == 'Rock')) {
        
            userScore++;
        result = ('You won' + userMove + ' beats ' + computerMove
            + "<br><br>your score: " + userScore + "<br>Computer score: " + computerScore);

        if (userScore == 5) {
            result += '<br><br>You won  Reload the page to play again';
            disableButtons();
        }
    }
    else if (userMove == computerMove) {
        result = ('It\'s a tie. You both chose ' + userMove
            + "<br><br>your score: " + userScore + "<br>Computer score: " + computerScore);
    }
    else {
        computerScore ++;
        result = ('You lose! ' + computerMove + ' beats ' + userMove
            + "<br><br>your score: " + userScore + "<br>Computer score: " + computerScore);

        if (computerScore == 5) {
            result += '<br><br>conmputer won Reload the page to play again';
            disableButtons();
        }
    }

    document.getElementById('result').innerHTML = result;
    return;
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        gameChecker(button.value);
    })
})