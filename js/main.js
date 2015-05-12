var board = [];
var player1board = [];
var player2board = [];
var currentMove ;
var lastMove= true;
var player1 = 'X'
var player2 = 'O'
var movesMade = 0;


$( document ).ready(function() {
   // console.log( "ready!" );

  function toggleMove() {
    if (lastMove = true) {
      currentMove = player1;
      lastMove = false;
    }
   else {
     currentMove = player2;
     lastMove = true;
    }
    movesMade ++;
 } 
toggleMove();
console.log(movesMade)

  


  function updateArrays(){
    $('.box').on('click', function(){

      var playMove = Number(this.id)
      board[playMove] = playMove  
      
    });
  }

});//document.ready