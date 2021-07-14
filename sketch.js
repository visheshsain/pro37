var canva,backgroundImg;
var gameState = 0;
var contestentCount;
var allContestent;
var answer;
var database;

var question,quiz,contestent;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();

}


function draw(){
  background("pink");
  if(contestentCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }

  
}
