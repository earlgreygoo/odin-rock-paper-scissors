let compChoice = '';
let userChoice = '';



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
  	alert("You chose " + playerSelection + ", and the computer chose " + computerSelection + ". You tied!");
  } 
  else if (playerSelection == 'rock' && computerSelection == 'paper') {
  	alert("You chose " + playerSelection + ", and the computer chose " + computerSelection + ". You Win!")
  }
  else if (playerSelection == 'rock' && computerSelection == 'scissors') {
  	alert("You chose " + playerSelection + ", and the computer chose " + computerSelection + ". You Lose!")
  }
  else if (playerSelection == 'paper' && computerSelection == 'rock') {
  	alert("You chose" + playerSelection + ", and the computer chose " + computerSelection + ". You Win!")
  }
  else if (playerSelection == 'paper' && computerSelection == 'scissors') {
  	alert("You chose " + playerSelection + ", and the computer chose " + computerSelection + ". You Lose!")
  }
  else if (playerSelection == 'scissors' && computerSelection == 'rock') {
  	alert("You chose " + playerSelection + ", and the computer chose " + computerSelection + ". You Lose!")
  }
  else if (playerSelection == 'scissors' && computerSelection == 'paper') {
  	alert("You chose " + playerSelection + ", and the computer chose " + computerSelection + ". You Win!")
  }
  else {
  	alert('wuhoh, mustve made a whoopsie :(');
  }
}





//getCompChoice();
//getUserChoice();

playRound(getUserChoice(),getCompChoice());