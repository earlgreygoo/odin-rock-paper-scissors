let compChoice = '';
let userChoice = '';

let numOfRounds = 5;
let userScore = 0;
let computerScore = 0;

const buttonContainer = document.querySelector('#button-container');
const scoreContainer = document.querySelector("#score-container")

let rockButton = document.createElement('button');
let paperButton = document.createElement('button');
let scissorButton = document.createElement('button');


rockButton.textContent = 'Rock';
paperButton.textContent = 'Paper';
scissorButton.textContent = 'Scissors';

buttonContainer.appendChild(rockButton);
buttonContainer.appendChild(paperButton);
buttonContainer.appendChild(scissorButton);



let userScoreCard = document.createElement('h1');
let computerScoreCard = document.createElement('h1');
let announcer = document.createElement('p');

userScoreCard.textContent = userScore;
computerScoreCard.textContent = computerScore;
announcer.textContent = "make a selection";


scoreContainer.appendChild(userScoreCard);
scoreContainer.appendChild(computerScoreCard);
scoreContainer.appendChild(announcer);




function getCompChoice() {
	let choice = Math.floor(Math.random()*3);
	console.log(choice);

	switch(choice) {
	  case 0:
	    compChoice = "rock"
	    break;
	  case 1:
	    compChoice = "paper"
	    break;
	    case 2:
	    compChoice = "scissors"
	    break;
	  default:
	    compChoice = "rock"
	}
	console.log(compChoice);
	return compChoice;

}

function getUserChoice() {
	userChoice = prompt("rock, paper or scissors?", "???").toLowerCase();
	return userChoice;
}

function reset() {
	userScore = 0;
	computerScore = 0;
	updateScore();
}

function winCheck(){
	if (userScore >= 5){
		announcer.textContent = 'you win!!! Play again?'
		reset();

	} 
	else if (computerScore >= 5){
		announcer.textContent = 'you lose!!! Play again?'
		reset();
	}
}
function updateScore(){
	computerScoreCard.textContent = computerScore;
	userScoreCard.textContent = userScore;
}

function announce(msgA,msgB) {
	announcer.textContent = msgA + msgB; 
}


function playRound(playerSelection, computerSelection) {
	let selectionMsg = "You chose " + playerSelection + ", and the computer chose " + computerSelection;
	let winMsg = ". You win this round";
	let loseMsg = ". You lose this round"
	let tieMsg = ". You tied this round."


  if (playerSelection === computerSelection) {
  	
  	announce(selectionMsg,tieMsg);
  } 
  else if (playerSelection == 'rock' && computerSelection == 'paper') {
  	announce(selectionMsg,winMsg);
  	userScore += 1;
  	updateScore()
  	winCheck()
  }
  else if (playerSelection == 'rock' && computerSelection == 'scissors') {
  	announce(selectionMsg,loseMsg);
  	computerScore +=1;
  	updateScore()
  	winCheck()
  }
  else if (playerSelection == 'paper' && computerSelection == 'rock') {
  	announce(selectionMsg,winMsg);
  	userScore += 1;
  	updateScore()
  	winCheck()

  }
  else if (playerSelection == 'paper' && computerSelection == 'scissors') {
  	announce(selectionMsg,loseMsg);
  	computerScore +=1;
  	updateScore()
  	winCheck()
  }
  else if (playerSelection == 'scissors' && computerSelection == 'rock') {
  	announce(selectionMsg,loseMsg);
  	computerScore +=1;
  	updateScore()
  	winCheck()
  }
  else if (playerSelection == 'scissors' && computerSelection == 'paper') {
  	announce(selectionMsg,winMsg);
  	userScore += 1;
  	updateScore()
  	winCheck()
  }
  else {
  	alert('wuhoh, mustve made a whoopsie :(');
  }
}



function game() {
	for (let i = 0; i < numOfRounds; i ++){
		playRound(getUserChoice(),getCompChoice());
		console.log("computer: " + computerScore +", player: " + userScore);
	}
	
	if (userScore === computerScore) {
		alert('Its a draw!')
	}	else if (userScore > computerScore) {
		alert ('YOU WIN!!!!');
	}
		else {
			alert("YOU LOSE!!!!");
		}
}



rockButton.addEventListener('click',() => {
	userChoice = "rock";
	playRound(userChoice,getCompChoice());
});

paperButton.addEventListener('click',() => {
	userChoice = "paper";
	playRound(userChoice,getCompChoice());
});

scissorButton.addEventListener('click',() => {
	userChoice = "scissors";
	playRound(userChoice,getCompChoice());
});


