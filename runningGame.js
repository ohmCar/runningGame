const Game=function(){
  this.jumpHeight=200;
  this.timeOutDuration=1000;
  this.intervalTime=100;
  this.cactusMovingDistance=30;
  this.score=0;
  this.runner=document.getElementById("Boy");
  this.cactus=document.getElementById("cactus");
};

Game.prototype={
  makeJump : function(){
    let positionOfBoy = this.runner.offsetTop;
    this.runner.style.top = `${positionOfBoy-this.jumpHeight}px`;
  },
  moveDown : function(){
    let positionOfBoy = game.runner.offsetTop;
    game.runner.style.top = `${positionOfBoy+game.jumpHeight}px`;
  },
  movingCactus : function(){
    game.startScore();
    let positionOfCactus = game.cactus.offsetLeft;
    game.cactus.style.left = `${positionOfCactus-game.cactusMovingDistance}px`;
    if(positionOfCactus==-50){
      clearInterval(interval);
      game.intervalTime-=5;
      interval = setInterval(game.movingCactus,game.intervalTime);
      positionOfCactus = 1300;
      game.cactus.style.left = `${positionOfCactus-game.cactusMovingDistance}px`;
    };
    if(positionOfCactus==70&&game.runner.offsetTop==307) {
      let restartButton=document.getElementById('restart');
      clearInterval(game.score);
      document.getElementById('gameOver').innerText=`Oops! Game Over!!`;
      clearInterval(interval);
      restartButton.style.visibility='visible';
      restartButton.onclick=function(){location.reload();};
    };
  },
  getScore : function(){
    return document.getElementById('score').innerText=`Score: ${game.score}`;
  },
  startScore : function(){
    game.score=setInterval(game.getScore,game.timeOutDuration);
  },
};

const startGame=function () {
  game = new Game();
  interval = setInterval(game.movingCactus,game.intervalTime);
  console.log(game.intervalTime);
  let startButton=document.getElementById('start');
  startButton.style.visibility='hidden';
};

let game;
let interval = 0;
let count=1;

const begin = function(){
  let restartButton=document.getElementById('restart');
  let startButton=document.getElementById('start');
  restartButton.style.visibility='hidden';
  startButton.onclick=startGame;
};

const jump = function(event){
  if((event.key=="ArrowUp"||event.keyCode==32) && game.runner.offsetTop==307){
    game.makeJump();
    setTimeout(game.moveDown,game.timeOutDuration);
  };
};

window.onload=begin;
window.onkeyup=jump;
