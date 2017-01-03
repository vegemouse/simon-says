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
