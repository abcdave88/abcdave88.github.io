var board = []; //array that represents the board and stores the players moves
var currentMove ; //current move switches between player1 & player2
var player1 = 'X' //player1 token
var player2 = 'O' //player2 token
var movesMade = 0;//moves made// maximum of 9
 var winCombinations = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], 
                      [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ];

$( document ).ready(function() {

  function updateBoard(){          //this function updates the board array
    $('.box').on('click', function(){ //event listening for a click
      $(this).unbind('click'); 
      var playMove = Number(this.id) //playerMove equal to to id of the clicked position
      if (movesMade % 2 === 0) {   //condition thats decideds if player one moves
        currentMove = player1;
      }
      else {
        currentMove = player2;// player2 moves
      }
      board[playMove] = currentMove;//puts player1or2 move into the correct poistion in the array
      movesMade ++; //increments movesMade by one each time 
      $(this).html(currentMove);//prints player move on hmtl //TEMPORARY//
      getWinner();//calls the getWinner function
    });
  }//end of Updateboard
updateBoard();

  function getWinner(){
    $.each(winCombinations, function(index, value){
      
      if (board[value[0]] === board[value[1]] && board[value[0]] === board[value[2]] && board[value[0]] !== undefined && board[value[2]] !== undefined ){
        // debugger;
        console.log(currentMove + " wins!");
      }
      // else if (movesMade === 9){
      //   console.log('Tie!')
      // }
     })
  };//end of getWinner function//
});//document.ready

  