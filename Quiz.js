class Quiz {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        contestent = new contestent();
        var contestentCountRef = await database.ref('contestentCount').once("value");
        if(contestentCountRef.exists()){
        contestentCount = contestentCountRef.val();
          player.getCount();
        }
        question = new Question()
        question.display();
      }
  
      
    }
  
    play(){
      question.hide();
        background("yellow");
        fill(0);
        textSize(30);
        text("Result of quize",340,50);
        text("--------------------",320,65);
        Contestent.getPlayerInfo();
      if(allContestent !== undefined){
        debugger;
        var display_Answer = 230;
        fill("blue");
        textSize(20);
        text("NOTE:-Correct Answer Show  in green colour",130,230);
  
        for(var plr in allContestents){
          debugger;
          var correctAns = "2"
          if( correctAns === allContestent[plr].answer)
          fill("green");
          else
          fill("red");

          display_Answer+=30;
          textSize(20);
          text(allContestent[plr].name+ ":" +allContestent[plr].answer,250,display_Answer);
          
        }
        
  
      }
  
      
      drawSprites();
    }
  }
  