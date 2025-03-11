const choices = ["rock", "paper", "scissors"];
//3: player score variables
let humanScore = 0;
let computerScore = 0;
let ended = false;

//1: computer choice logic
function getComputerChoice() {
	//randomly return rock, paper or scissors
	let choice = Math.floor(Math.random() * 3);

	return choices[choice];
}

//4: Logic to play a single round
function playRound(humanChoice, computerChoice) {	//take choices as arguments
	if(!ended) {
		//make parameters case insensitive
		humanChoice = humanChoice.toLowerCase();

		//get player's and computer's choice value in the array
		const humanIndex = choices.indexOf(humanChoice);
		const computerIndex = choices.indexOf(computerChoice);
		let result = "";

		//if player's choice goes after computer's choice in the array or is the special case computer = rock and human = scissors, computer wins
		if (humanIndex == computerIndex - 1 || humanIndex == 2 && computerIndex == 0) {
			result = "You lose! " + computerChoice + " beats " + humanChoice + ".";
			computerScore++;
		//if it's the same choice, it's a tie
		} else if (humanIndex == computerIndex) {
			result = "Tie!";
		//otherwise, player won
		} else {
			result = "You win! " + humanChoice + " beats " + computerChoice + ".";
			humanScore++;
		}

		return (result + "\n");
	}
}

//function to display endgame message
function endgame() {
	let res = "";
	
	if (humanScore == 5) {
		res += "Congrats! You win!";
		ended = true;
	} else if (computerScore == 5) {
		res += "Computer wins :( \n";
		ended = true;
	}

	if (ended) {
		res += "Player score: " + humanScore + "\nComputer score: " + computerScore;
	}

	return res;
}

//---------------------------------UI-------------------------------------------
const buttons = document.querySelectorAll(".picks");
const resDiv = document.getElementById("result");

//add events to each button, to play the round with the corresponding player's choice
buttons.forEach(button => {
	button.addEventListener("click", () => {
		if (!ended) {
			let roundRes = playRound(button.id, getComputerChoice());

			resDiv.innerText = roundRes + endgame();
		}
	});
});
