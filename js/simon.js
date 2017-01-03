function SimonGame(){
  this.gameColors = ['red', 'green', 'blue', 'yellow'];
  this.gameArray = [];
  this.userArray = [];
}

SimonGame.prototype.sequenceCreator = function(){
  var randomNumber = Math.floor((Math.random() * 4));
  this.gameArray.push(this.gameColors[randomNumber]);
};

SimonGame.prototype.compare = function(){
  var gameFlag = true;

  for(var i = 0; i < this.gameArray.length; i++){
    if(this.gameArray[i] != this.userArray[i]){
      gameFlag = false;
      return gameFlag;
    }
  }
  return gameFlag;
};

exports.simonModule = SimonGame;
