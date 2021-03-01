var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var form, contestant, game;

function preload(){
 
}

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
 
  if(contestantCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  
}
