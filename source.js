let compChoice = '';
let userChoice = prompt("rock, paper or scissor?", "???");;



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
	    compChoice = "scissor"
	    break;
	  default:
	    compChoice = "rock"
	}
	console.log(compChoice);

}






getCompChoice();