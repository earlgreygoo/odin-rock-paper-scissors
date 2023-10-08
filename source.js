let compChoice = '';
let userChoice = '';

let numOfRounds = 5;
let userScore = 0;
let computerScore = 0;



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


function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
  	alert("You chose " + playerSelection + ", and the computer chose " + computerSelection + ". You tied this round.");
  } 
  else if (playerSelection == 'rock' && computerSelection == 'paper') {
  	alert("You chose " + playerSelection + ", and the computer chose " + computerSelection + ". You win this round")
  	userScore += 1;
  }
  else if (playerSelection == 'rock' && computerSelection == 'scissors') {
  	alert("You chose " + playerSelection + ", and the computer chose " + computerSelection + ". You lose this round")
  	computerScore +=1;
  }
  else if (playerSelection == 'paper' && computerSelection == 'rock') {
  	alert("You chose" + playerSelection + ", and the computer chose " + computerSelection + ". You win this round")
  	userScore += 1;

  }
  else if (playerSelection == 'paper' && computerSelection == 'scissors') {
  	alert("You chose " + playerSelection + ", and the computer chose " + computerSelection + ". You lose this round")
  	computerScore +=1;
  }
  else if (playerSelection == 'scissors' && computerSelection == 'rock') {
  	alert("You chose " + playerSelection + ", and the computer chose " + computerSelection + ". You lose this round")
  	computerScore +=1;
  }
  else if (playerSelection == 'scissors' && computerSelection == 'paper') {
  	alert("You chose " + playerSelection + ", and the computer chose " + computerSelection + ". You win this round")
  	userScore += 1;
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





//getCompChoice();
//getUserChoice();

game();