const choices = ["rock", "paper", "scissors"];

//1: computer choice logic
function getComputerChoice() {
	//randomly return rock, paper or scissors
	let choice = Math.floor(Math.random() * 3);

	return choices[choice];
}


//2: human choice logic
function getHumanChoice() {
	const choice = prompt("Pick rock, paper or scissors: ");
	return choice;
}


//5: Logic to play the entire game
function playGame() {
	//3: player score variables
	let humanScore = 0;
	let computerScore = 0;
	let finished = false;

	//4: Logic to play a single round
	function playRound(humanChoice, computerChoice) {	//take choices as arguments
		//make parameters case insensitive
		humanChoice = humanChoice.toLowerCase();

		//log round winner
		const humanIndex = choices.indexOf(humanChoice);
		const computerIndex = choices.indexOf(computerChoice);
		let result = "";

		if (humanIndex == computerIndex - 1 || humanIndex == 2 && computerIndex == 0) {
			result = "You lose! " + computerChoice + " beats " + humanChoice + ".";
			computerScore++;
		} else if (humanIndex == computerIndex) {
			result = "Tie!";
		} else {
			result = "You win! " + humanChoice + " beats " + computerChoice + ".";
			humanScore++;
		}

		return result;
	}

	while (!finished) {
		console.log(playRound(getHumanChoice(), getComputerChoice()));
		finished = humanScore == 3 || computerScore == 3;
	}

	if (humanScore == 3) {
		console.log("Congrats! You win!");
	} else {
		console.log("Computer wins :(");
	}
}
