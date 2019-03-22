//Rock, Paper, scissors, Lizard, Spock
//two players.---- human & computer
//player choose weapon---- event listener
//computer chooses random weapon---- math.random
//computer and human "face" off
//Create array of weapon choices
//Scissors cuts paper. Paper covers rock. Rock crushes lizard. Lizard poisons Spock. Spock smashes scissors. Scissors decapitates lizard. Lizard eats paper. Paper disproves Spock. Spock vaporizes rock. Rock crushes scissors. ----WIN conditionals
//counts who wins
//If players show the same things, they go again.-ELSE CONDITION

const weapons= ["rock", "paper", "scissors", "lizard", "spock",]
let player1= ""


let playerScore = 0;
let botScore = 0;

//need to make each button clickable (event listener)
const clickIt = document.querySelectorAll("i").forEach(function(select){
 select.addEventListener("click", pickWeapon)

})
//user selects by clicking one of the images, bot then chooses and we compare

function pickWeapon(){
  console.log (this)
  player1 === this.id;
  //weapon[comp]
  let comp = Math.floor(Math.random()* weapons.length)
  let bot = weapons[comp];
  console.log (bot)
// --------------------ROCK----------------------------------
if( this.id === weapons[0] && (bot === weapons[2]|| bot === weapons[3])){
console.log("ROCK! YOU WIN")
document.querySelector("img").src = ("media/rock.png")
document.querySelector("h3").textContent = "SMASH! YOU WIN"
playerScore+=1

// --------------------PAPER--------------------------------
}else if( this.id === weapons[1] && (bot === weapons[0]|| bot === weapons[4])){
  console.log("PAPER! YOU WIN")
  document.querySelector("img").src = ("media/paper.png")
  document.querySelector("h3").textContent = "SHEET! YOU WIN!"
  playerScore+=1

// --------------------SCISSORS--------------------------------
}else if( this.id === weapons[2] && (bot === weapons[1]|| bot === weapons[3])){
  console.log("SCISSORS! YOU WIN")
  document.querySelector("img").src = ("media/scissors.png")
  document.querySelector("h3").textContent = "SNIP SNIP! YOU WIN!"
  playerScore+=1

// --------------------LIZARD--------------------------------
}else if( this.id === weapons[3] && (bot === weapons[1]|| bot === weapons[4])){
  console.log("LIZARD! YOU WIN")
  document.querySelector("img").src = ("media/ultimate-Lizard.png")
  document.querySelector("h3").textContent = "Sssss! YOU WIN!"
  playerScore+=1

// --------------------SPOCK--------------------------------
}else if( this.id === weapons[4] && (bot === weapons[0]|| bot === weapons[1])){
  console.log("SPOCK! YOU WIN")
  document.querySelector("img").src = ("media/spocks.png")
  document.querySelector("h3").textContent = "LIVE LONG AND PROSPER! YOU WIN!"
  playerScore+=1
// --------------------DRAW--------------------------------
}else if( this.id === weapons[0]&&[1]&&[2]&&[3]&&[4] && bot === weapons[0] &&[1] &&[2] &&[3] &&[4]){
  document.querySelector("h3").textContent = "IT'S A DRAW! PLAY AGAIN"
  console.log("Draw")
}else{
  document.querySelector("img").src = ("media/bot.png")
  document.querySelector("h3").textContent = "FOOLISH HUMAN, YOU ONLY WIN WHEN I LET YOU! YOU LOSE!"
  console.log("you lost")
  botScore+=1
}

console.log(playerScore)
console.log(botScore)
document.querySelector('#userScore').textContent = playerScore;
document.querySelector('#compScore').textContent = botScore;
}
