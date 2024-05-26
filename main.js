const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');
const resultDiv = document.getElementById('result');
const choices = document.querySelectorAll('.choice-btn');
const playerSelectionSpan = document.getElementById('player-selection');
const computerSelectionSpan = document.getElementById('computer-selection');

let playerScore = 0;
let computerScore = 0;
resultDiv.textContent = 'Start Playing';
choices.forEach(choice => choice.addEventListener('click', () => {
    const playerChoice = choice.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    displaySelections(playerChoice, computerChoice);
    displayResult(winner);
    updateScores(winner);
}));

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getWinner(player, computer) {
    if (player === computer) {
        return 'draw';
    }
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'scissors' && computer === 'paper') ||
        (player === 'paper' && computer === 'rock')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

function displaySelections(player, computer) {
    const emojiMap = {
        rock: '✊',
        paper: '✋',
        scissors: '✌️'
    };
    playerSelectionSpan.textContent = emojiMap[player];
    computerSelectionSpan.textContent = emojiMap[computer];
}

function displayResult(winner) {
    if (winner === 'draw') {
        resultDiv.textContent = 'Draw';
    } else if (winner === 'player') {
        resultDiv.textContent = 'Player wins';
    } else {
        resultDiv.textContent = 'Computer wins';
    }
}

function updateScores(winner) {
    if (winner === 'player') {
        playerScore++;
        playerScoreSpan.textContent = playerScore;
    } else if (winner === 'computer') {
        computerScore++;
        computerScoreSpan.textContent = computerScore;
    }
}
