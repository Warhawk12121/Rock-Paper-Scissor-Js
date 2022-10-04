function getPCchoice(){
    const choices=["rock","paper","scissor"];
    const ch=Math.floor(Math.random()*3)
    return choices[ch]
}


function playRound(playerSelection, computerSelection) {

      if(playerSelection==computerSelection)
        {
          console.log("Player Chose "+playerSelection.toUpperCase()+"\nPc Chose "+computerSelection.toUpperCase());
          console.log("\nIts a Draw");
          return "Draw";
        }
      
        else if(playerSelection=="rock")
      {
          if(computerSelection=="scissor")
            {
              console.log("Player Chose "+playerSelection.toUpperCase()+"\nPc Chose "+computerSelection.toUpperCase());
              console.log("\nPlayer Wins! Rock beats Scissor");
              return "Player";
            }
          else if(computerSelection=="paper")
            {
              console.log("Player Chose "+playerSelection.toUpperCase()+"\nPc Chose "+computerSelection.toUpperCase());
              console.log("\nPC Wins! Paper beats Rock");
              return "PC";
            }
      }
     
      else if(playerSelection=="scissor")
      {
          if(computerSelection=="rock")
            {
              console.log("Player Chose "+playerSelection.toUpperCase()+"\nPc Chose "+computerSelection.toUpperCase());
              console.log("\nPC Wins! Rock beats Scissor");
              return "PC";
            }
          else if(computerSelection=="paper")
            {
              console.log("Player Chose "+playerSelection.toUpperCase()+"\nPc Chose "+computerSelection.toUpperCase());
              console.log("\nPlayer Wins! Scissor beats Paper");
              return "Player";
            }
      }
     
      else if(playerSelection=="paper")
      {
          if(computerSelection=="rock")
            {
              console.log("Player Chose "+playerSelection.toUpperCase()+"\nPc Chose "+computerSelection.toUpperCase());
              console.log("\nPlayer Wins! Paper beats Rock");
              return "Player";
            }
          else if(computerSelection=="scissor")
            {
              console.log("Player Chose "+playerSelection.toUpperCase()+"\nPc Chose "+computerSelection.toUpperCase());
              console.log("\nPC Wins! Scissor beats Paper");
              return "PC";
            }
      }
  }



function Game(){

    let h=0,pc=0;
    let winner;
    while(h!=5 && pc!=5)
    {
        let playerSelection = prompt("Choose : Rock, Paper, Scissor");
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

Game()

   
 