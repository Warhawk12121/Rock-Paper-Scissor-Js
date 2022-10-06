
function getPCchoice(){
  const choices=["rock","paper","scissor"];
  const ch=Math.floor(Math.random()*3)
  return choices[ch]
}

function checkWinner(){
  if(h>=5)
  {
      console.log("\nUser has 5 points, User Wins the game!!!");
      document.getElementById("winner").innerText="User has 5 points, PC Wins the game!!!";
      btn1.disabled=true;
      btn2.disabled=true;
      btn3.disabled=true;

  }
  else if(pc>=5)
  { 
      console.log("\PC has 5 points, PC Wins the game!!!");
      document.getElementById("winner").innerText="Pc has 5 points, PC Wins the game!!!";
      btn1.disabled=true;
      btn2.disabled=true;
      btn3.disabled=true;
  }
}

function playRound(playerSelection, computerSelection) {


    if(playerSelection==computerSelection)
      {
        console.log("Player Chose "+playerSelection.toUpperCase()+"\nPc Chose "+computerSelection.toUpperCase());
        console.log("\nIts a Draw");
        document.getElementById("results").innerText="Player Chose "+playerSelection.toUpperCase()+"\nPc Chose "+computerSelection.toUpperCase()+"\nIts a Draw";
        
      }
    
      else if(playerSelection=="rock")
    {
        if(computerSelection=="scissor")
          {
            console.log("Player Chose "+playerSelection.toUpperCase()+"\nPc Chose "+computerSelection.toUpperCase());
            console.log("\nPlayer Wins! Rock beats Scissor");
            document.getElementById("results").innerText="Player Chose "+playerSelection.toUpperCase()+"\nPc Chose "+computerSelection.toUpperCase()+"\nPlayer Wins! Rock beats Scissor";
            h++;
            document.getElementById("user").innerHTML=h;
            checkWinner();

          }
        else if(computerSelection=="paper")
          {
            console.log("Player Chose "+playerSelection.toUpperCase()+"\nPc Chose "+computerSelection.toUpperCase());
            console.log("\nPC Wins! Paper beats Rock");
            document.getElementById("results").innerText="Player Chose "+playerSelection.toUpperCase()+"\nPc Chose "+computerSelection.toUpperCase()+"\nPC Wins! Paper beats Rock";
            
            pc++;
            document.getElementById("pc").innerHTML=pc;
            checkWinner();
          }
    }
   
    else if(playerSelection=="scissor")
    {
        if(computerSelection=="rock")
          {
            console.log("Player Chose "+playerSelection.toUpperCase()+"\nPc Chose "+computerSelection.toUpperCase());
            console.log("\nPC Wins! Rock beats Scissor");
            document.getElementById("results").innerText="Player Chose "+playerSelection.toUpperCase()+"\nPc Chose "+computerSelection.toUpperCase()+"\nPC Wins! Rock beats Scissor";
            
            pc++;
            document.getElementById("pc").innerHTML=pc;
            checkWinner();
          }
        else if(computerSelection=="paper")
          {
            console.log("Player Chose "+playerSelection.toUpperCase()+"\nPc Chose "+computerSelection.toUpperCase());
            console.log("\nPlayer Wins! Scissor beats Paper");
            document.getElementById("results").innerText="Player Chose "+playerSelection.toUpperCase()+"\nPc Chose "+computerSelection.toUpperCase()+"\nPlayer Wins! Scissor beats Paper";
            
           
            h++;
            document.getElementById("user").innerHTML=h;
            checkWinner();
          }
    }
   
    else if(playerSelection=="paper")
    {
        if(computerSelection=="rock")
          {
            console.log("Player Chose "+playerSelection.toUpperCase()+"\nPc Chose "+computerSelection.toUpperCase());
            console.log("\nPlayer Wins! Paper beats Rock");
            document.getElementById("results").innerText="Player Chose "+playerSelection.toUpperCase()+"\nPc Chose "+computerSelection.toUpperCase()+"\nPlayer Wins! Paper beats Rock";
            
           
            h++;
            document.getElementById("user").innerHTML=h;
            checkWinner();
          }
        else if(computerSelection=="scissor")
          {
            console.log("Player Chose "+playerSelection.toUpperCase()+"\nPc Chose "+computerSelection.toUpperCase());
            console.log("\nPC Wins! Scissor beats Paper");
            document.getElementById("results").innerText="Player Chose "+playerSelection.toUpperCase()+"\nPc Chose "+computerSelection.toUpperCase()+"\nPC Wins! Scissor beats Paper";
            
            pc++;
            document.getElementById("pc").innerHTML=pc;
            checkWinner();
          }
    }

}

function pchoice(choice){
  playerSelection=choice;
}

const div=document.querySelector('.results');
const btn1=document.querySelector('#rock');
const btn2=document.querySelector('#paper');
const btn3=document.querySelector('#scissor');
const ref=document.querySelector('#refresh')

let h=0,pc=0;
document.getElementById("user").innerHTML=h;
document.getElementById("pc").innerHTML=pc;

btn1.addEventListener('click',()=>playRound('rock',getPCchoice().toLowerCase()));
btn2.addEventListener('click',()=>playRound('paper',getPCchoice().toLowerCase()));
btn3.addEventListener('click',()=>playRound('scissor',getPCchoice().toLowerCase()));
ref.addEventListener('click',()=>window.location.reload());
