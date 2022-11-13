document.getElementById("rock").onclick = function(){
	var randomChoice = Math.floor(Math.random() * 3);
	if(randomChoice == 0){//rock - tie
		document.getElementById("random").src = "img/rock.png";
		document.getElementById("result").textContent = "Tie";
	}else if (randomChoice == 1){//paper
		document.getElementById("random").src = "img/paper.png";
		document.getElementById("result").textContent = "You Lose";
	}else{//scissors
		document.getElementById("random").src = "img/scissors.png";
		document.getElementById("result").textContent = "You Win";
	}
}

document.getElementById("paper").onclick = function(){
	var randomChoice = Math.floor(Math.random() * 3);
	if(randomChoice == 0){//rock
		document.getElementById("random").src = "img/rock.png";
		document.getElementById("result").textContent = "You Win";
	}else if (randomChoice == 1){//paper
		document.getElementById("random").src = "img/paper.png";
		document.getElementById("result").textContent = "Tie";
	}else{//scissors
		document.getElementById("random").src = "img/scissors.png";
		document.getElementById("result").textContent = "You Lose";
	}
}

document.getElementById("scissors").onclick = function(){
	var randomChoice = Math.floor(Math.random() * 3);
	if(randomChoice == 0){//rock
		document.getElementById("random").src = "img/rock.png";
		document.getElementById("result").textContent = "You Lose";
	}else if (randomChoice == 1){//paper
		document.getElementById("random").src = "img/paper.png";
		document.getElementById("result").textContent = "You Win";
	}else{//scissors
		document.getElementById("random").src = "img/scissors.png";
		document.getElementById("result").textContent = "Tie";
	}
}