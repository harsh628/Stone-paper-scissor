const handOptions = {
  "rock": "/assets/Rock.png",
  "paper": "/assets/Paper.png",
  "scissors": "/assets/Scissors.png"
}

let SCORE = 0;
let SCORE1=0;
let aaa=document.querySelector(".next1");
let condition=false;
const pickUserHand = (hand) => {
  let hands = document.querySelector(".hands");
  hands.style.display = "none";

  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  // set user Image
  document.getElementById("userPickImage").src = handOptions[hand];

  pickComputerHand(hand);
};

const pickComputerHand = (hand) => {
    let hands = ["rock", "paper", "scissors"];
    let cpHand = hands[Math.floor(Math.random() * hands.length)];
    
    // set computer image 
    document.getElementById("computerPickImage").src = handOptions[cpHand]
    
    referee(hand, cpHand);
};
let element = document.getElementById("cup");
let element2=document.getElementById("ccp");
const referee = (userHand, cpHand) => {
  if (userHand == "paper" && cpHand == "scissors") {
    setDecision("YOU LOSE AGAINST PC");
    aaa.style.display = "none";
    element.classList.remove("winning");
    element2.classList.add("winning");
    setScore1(SCORE1 + 1);

  }
  if (userHand == "paper" && cpHand == "rock") {
    setDecision("YOU WIN AGAINST PC");
    element.classList.add("winning");
    element2.classList.remove("winning");
    setScore(SCORE + 1);
    aaa.style.display = "block";
    document.getElementById("rules").style.right = "150px";
  }
  if (userHand == "paper" && cpHand == "paper") {
    setDecision("TIE UP");
    element.classList.remove("winning");
    element2.classList.remove("winning");
    aaa.style.display = "none";
  }
  if (userHand == "rock" && cpHand == "scissors") {
    setDecision("YOU WIN AGAINST PC");
    element.classList.add("winning");
    element2.classList.remove("winning");
    setScore(SCORE + 1);
    aaa.style.display = "block";
    document.getElementById("rules").style.right = "150px";
  }
  if (userHand == "rock" && cpHand == "paper") {
    setDecision("YOU LOSE AGAINST PC");
    aaa.style.display = "none";
    element.classList.remove("winning");
    element2.classList.add("winning");
    setScore1(SCORE1 + 1);
  }
  if (userHand == "rock" && cpHand == "rock") {
    setDecision("TIE UP");
    aaa.style.display = "none";
    element.classList.remove("winning");
    element2.classList.remove("winning");
  }
  if (userHand == "scissors" && cpHand == "scissors") {
    setDecision("TIE UP");
    aaa.style.display = "none";
    element.classList.remove("winning");
    element2.classList.remove("winning");
  }
  if (userHand == "scissors" && cpHand == "rock") {
    setDecision("YOU LOSE AGAINST PC");
    setScore1(SCORE1 + 1);
    aaa.style.display = "none";
    element.classList.remove("winning");
    element2.classList.add("winning");
  }
  if (userHand == "scissors" && cpHand == "paper") {
    setDecision("YOU WIN AGAINST PC");
    element.classList.add("winning");
    element2.classList.remove("winning");
    setScore(SCORE + 1);
    aaa.style.display = "block";
    document.getElementById("rules").style.right = "150px";
    

  }
  
};


const restartGame = () => {
  let contest = document.querySelector(".contest");
  contest.style.display = "none";

  let hands = document.querySelector(".hands");
  hands.style.display = "flex";
  document.getElementById("rules").style.right = "20px";
  if(condition=true)
  {
    hurray.style.display="none";
  let rr=document.querySelector(".scoreboard");
  rr.style.display = "flex";
  let sss=document.querySelector(".decision");
  sss.style.display="block";
  let ssss=document.querySelector(".computerhand");
  ssss.style.display="block";
  let contest = document.querySelector(".userhand");
  contest.style.display = "block";
  }
  

}

const setDecision = (decision) => {
  document.querySelector(".decision h1").innerText = decision;
}

const setScore = (newScore) => {
  SCORE = newScore;
  document.querySelector(".score h1").innerText = newScore;
}
const setScore1 = (newScore) => {
  SCORE1 = newScore;
  document.querySelector(".score1 h1").innerText = newScore;
}


let hurray=document.querySelector(".hurray");
hurray.style.display="none";
const finishGame = () => {
let contest = document.querySelector(".userhand");
  contest.style.display = "none";

 let rr=document.querySelector(".scoreboard");
  rr.style.display = "none";
  
  let sss=document.querySelector(".decision");
  sss.style.display="none";
  let ssss=document.querySelector(".computerhand");
  ssss.style.display="none";

  let rulesss=document.querySelector(".ruless");
  rulesss.style.display="none";
  let cancelll=document.querySelector(".cancel");
  cancelll.style.display="none";
  let aaaa=document.querySelector(".next1");
  aaaa.style.display="none";
  let pg=document.querySelector(".newGame");
  pg.style.display = "block";
  document.getElementById("rules").style.right = "20px";
  hurray.style.display="block";

  condition=true;

}

let value=0;
const rulesagain= () =>{

  let rulesss=document.querySelector(".ruless");
  let cancelll=document.querySelector(".cancel");
  if(value==0)
  {
  rulesss.style.display="block";
  cancelll.style.display="block";
  value=1;
  }else{
    rulesss.style.display="none";
    cancelll.style.display="none";
    value=0;
  }
  
}

const can= () =>{

  let rulesss=document.querySelector(".ruless");
  rulesss.style.display="none";

  let cancelll=document.querySelector(".cancel");
  cancelll.style.display="none";
  value=0;
}