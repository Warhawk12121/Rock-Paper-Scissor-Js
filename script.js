/*
For UI
Buttons needed for User Input



*/
function getPCchoice(){
    const choices=["rock","paper","scissor"];
    const ch=Math.floor(Math.random()*3)
    return choices[ch]
}


function playRound(playerSelection, computerSelection) {

      const res=document.createElement('p');
      

      if(playerSelection==computerSelection)
        {
          console.log("Player Chose "+playerSelection.toUpperCase()+"\nPc Chose "+computerSelection.toUpperCase());
          console.log("\nIts a Draw");
          res.textContent=("Player Chose "+playerSelection.toUpperCase()+"\nPc Chose "+computerSelection.toUpperCase()+"\nIts a Draw");
          div.appendChild(res);
          return "Draw";
        }
      
        else if(playerSelection=="rock")
      {
          if(computerSelection=="scissor")
            {
              console.log("Player Chose "+playerSelection.toUpperCase()+"\nPc Chose "+computerSelection.toUpperCase());
              console.log("\nPlayer Wins! Rock beats Scissor");
              res.textContent=("Player Chose "+playerSelection.toUpperCase()+"\nPc Chose "+computerSelection.toUpperCase()+"\nPlayer Wins! Rock beats Scissor");
              div.appendChild(res);
              return "Player";
            }
          else if(computerSelection=="paper")
            {
              console.log("Player Chose "+playerSelection.toUpperCase()+"\nPc Chose "+computerSelection.toUpperCase());
              console.log("\nPC Wins! Paper beats Rock");
              res.textContent=("Player Chose "+playerSelection.toUpperCase()+"\nPc Chose "+computerSelection.toUpperCase()+"\nPC Wins! Paper beats Rock");
              div.appendChild(res);
              return "PC";
            }
      }
     
      else if(playerSelection=="scissor")
      {
          if(computerSelection=="rock")
            {
              console.log("Player Chose "+playerSelection.toUpperCase()+"\nPc Chose "+computerSelection.toUpperCase());
              console.log("\nPC Wins! Rock beats Scissor");
              res.textContent=("Player Chose "+playerSelection.toUpperCase()+"\nPc Chose "+computerSelection.toUpperCase()+"\nPC Wins! Rock beats Scissor");
              div.appendChild(res);
              return "PC";
            }
          else if(computerSelection=="paper")
            {
              console.log("Player Chose "+playerSelection.toUpperCase()+"\nPc Chose "+computerSelection.toUpperCase());
              console.log("\nPlayer Wins! Scissor beats Paper");
              res.textContent=("Player Chose "+playerSelection.toUpperCase()+"\nPc Chose "+computerSelection.toUpperCase()+"\nPlayer Wins! Scissor beats Paper");
              div.appendChild(res);
              return "Player";
            }
      }
     
      else if(playerSelection=="paper")
      {
          if(computerSelection=="rock")
            {
              console.log("Player Chose "+playerSelection.toUpperCase()+"\nPc Chose "+computerSelection.toUpperCase());
              console.log("\nPlayer Wins! Paper beats Rock");
              res.textContent=("Player Chose "+playerSelection.toUpperCase()+"\nPc Chose "+computerSelection.toUpperCase()+"\nPlayer Wins! Paper beats Rock");
              div.appendChild(res);
              return "Player";
            }
          else if(computerSelection=="scissor")
            {
              console.log("Player Chose "+playerSelection.toUpperCase()+"\nPc Chose "+computerSelection.toUpperCase());
              console.log("\nPC Wins! Scissor beats Paper");
              res.textContent=("Player Chose "+playerSelection.toUpperCase()+"\nPc Chose "+computerSelection.toUpperCase()+"\nPC Wins! Scissor beats Paper");
              div.appendChild(res);
              return "PC";
            }
      }
  }

  function pchoice(choice){
    playerSelection=choice;
  }


function Game(){

    let h=0,pc=0;
    let winner;
    while(h!=5 && pc!=5)
    {
        let playerSelection;

        // const btn1=document.querySelector('#Rock');
        // const btn2=document.querySelector('#Paper');
        // const btn3=document.querySelector('#Scissor');

        // btn1.addEventListener('click',pchoice('Rock'))
        // btn2.addEventListener('click',pchoice('Paper'))
        // btn3.addEventListener('click',pchoice('Scissor'))

        let computerSelection = getPCchoice();
        winner=playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase());
        if(winner=="Player")
          h++;
        else if(winner=="PC")
          pc++;
        else
          continue;

        console.log("Points\nPlayer: "+h+"\nPC: "+pc+"\n--------------------------------------------");
    }

    if(h==5)
      console.log("Player has 5 points, Player Wins the game!!!")
    else if(pc==5)
      console.log("PC has 5 points, PC Wins the game!!!")

}

// Game()

 const div=document.querySelector('.results');
 const btn1=document.querySelector('#rock');
 const btn2=document.querySelector('#paper');
 const btn3=document.querySelector('#scissor');
  
 btn1.addEventListener('click',()=>playRound('rock',getPCchoice().toLowerCase()));
 btn2.addEventListener('click',()=>playRound('paper',getPCchoice().toLowerCase()));
 btn3.addEventListener('click',()=>playRound('scissor',getPCchoice().toLowerCase()));