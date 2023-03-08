function getComputerChoice() {
	num = Math.floor(Math.random() * 3) + 1;
	if (num === 1) {
		return 'Rock';
	} else if (num === 2) {
		return 'Paper';
	} else {
		return 'Scissors';
	}
}
function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		return 'Tie! Nobody Wins';
	} else if (playerSelection === 'Rock') {
		if (computerSelection === 'Paper') {
			return `You Lose! ${computerSelection} beats ${playerSelection}`;
		} else {
			return `You Win! ${playerSelection} beats ${computerSelection}`;
		}
	} else if (playerSelection === 'Paper') {
		if (computerSelection === 'Scissors') {
			return `You Lose! ${computerSelection} beats ${playerSelection}`;
		} else {
			return `You Win! ${playerSelection} beats ${computerSelection}`;
		}
	} else if (playerSelection === 'Scissors' || playerSelection === 'Scissor') {
		if (computerSelection === 'Rock') {
			return `You Lose! ${computerSelection} beats ${playerSelection}`;
		} else {
			return `You Win! ${playerSelection} beats ${computerSelection}`;
		}
	}
}

function capitalizeFirst(str) {
	const arr = str.split(' ');
	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
	}
	let str2 = arr.join(' ');
	return str2;
}
function game() {
	let computerScore = 0;
	let playerScore = 0;
	for (let i = 0; i < 5; i++) {
		let playerSelection = capitalizeFirst(prompt('Rock Paper Scissors?'));
		let computerSelection = getComputerChoice();
		if (
			playRound(playerSelection, computerSelection) ===
			`You Lose! ${computerSelection} beats ${playerSelection}`
		) {
			computerScore++;
		} else if (
			playRound(playerSelection, computerSelection) ===
			`You Win! ${playerSelection} beats ${computerSelection}`
		) {
			playerScore++;
		}
		console.log(playRound(playerSelection, computerSelection));
		console.log(
			`Your Score = ${playerScore} || Computer Score = ${computerScore}`
		);
	}
	if (computerScore === playerScore) {
		console.log('The Game is tied');
	} else if (playerScore > computerScore) {
		console.log('You Won the Game, Hurrah!');
	} else {
		console.log('Nooo! You lost the Game.');
	}
}
game();
