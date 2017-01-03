(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var SimonGame = require('./../js/simon.js').simonModule;
var newGame;
var gameCheck;

$(document).ready(function() {
  $('#new-game').click(function() {
    $('.container').fadeIn();
    newGame = new SimonGame();
    gameCheck = newGame.compare();
    newGame.sequenceCreator();
    lightUp();
  });

  var lightUp = function() {
   newGame.gameArray.forEach(function(color, index) {
     setTimeout(function() {
       $("#" + color).addClass("active").delay(1000).queue(function() {
         $(this).removeClass("active").dequeue();
       });
     }, 2000 * index);
   });
 }

 $(".color").click(function() {
   if ($(this).data("color") == 'red') {
     newGame.userArray.push('red');
   }
   if ($(this).data("color") == 'blue')  {
     newGame.userArray.push('blue');
   }
   if ($(this).data("color") == 'green')  {
     newGame.userArray.push('green');
   }
   if ($(this).data("color") == 'yellow')  {
     newGame.userArray.push('yellow');
   }
   console.log("game array is: " + newGame.gameArray);
   console.log("user array is: " + newGame.userArray);
   gameCheck = newGame.compare();
   if (gameCheck) {
     newGame.userArray = [];
     newGame.sequenceCreator();
     lightUp();
   } else if (newGame.userArray.length == newGame.gameArray.length && !gameCheck){
    $('#lose').fadeIn();
   }
   console.log(gameCheck);
 });
});

},{"./../js/simon.js":1}]},{},[2]);
