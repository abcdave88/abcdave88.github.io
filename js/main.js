var board = []; //array that represents the board and stores the players moves
var currentMove ; //current move switches between player1 & player2
var player1 = 'X' //player1 token
var player2 = 'O' //player2 token
var movesMade = 0;//moves made// maximum of 9
var winCombinations = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], 
                      [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ];
var winner = ''; //used for getTie function

$( document ).ready(function() {  

  soundManager.setup({
    url: 'sounds/',
    flashVersion: 9,
    preferFlash: false,
    onready: function() {
      var background = soundManager.createSound({
        url: 'sounds/background.mp3',
        id: 'background'
      });
      background.play();
    }      
  });//end of soundmanager background track//

  // set up event listener
  $('.box').on('click', updateBoard);
   $('#reset').on('click', resetGame);
    $('#mute').on('click', toggleMute); 
 
   function toggleMute(){
      soundManager.toggleMute('background');
     
  }


  function updateBoard(){          //this function updates the board array
    
     var playMove = Number(this.id) //playerMove equal to to id of the clicked position
     if (movesMade % 2 === 0) {   //condition thats decideds if player one moves
       currentMove = player1;
         $('p').css('color','#B6FF00');
     }
    else {
       currentMove = player2;// player2 moves
         $('p').css('color','#FF1177');
     }
    board[playMove] = currentMove;//puts player1or2 move into the correct poistion in the array
    movesMade = movesMade+1; //increments movesMade by one each time 
    $(this).children(':first').html(currentMove);//prints player move on hmtl 
    $(this).removeClass("box").addClass("box2");
    //$(this).off('click'); 
    getWinner();//calls the getWinner function
    getTie();//calls the getTie function
    
    console.log(currentMove, movesMade)

  }//end of Updateboard


  function getWinner(){
    $.each(winCombinations, function(index, value){
      if (board[value[0]] === board[value[1]] && board[value[0]] === board[value[2]] && board[value[0]] !== undefined && board[value[2]] !== undefined ){
        if (currentMove === 'X') {
          winner = true;
          $('h1').text('PLAYER 1 WINS!'); 
          // resetGame();
        }
        else if (currentMove === 'O'){
          $('h1').text('PLAYER 2 WINS');
          winner = true;
        }
      }
     })

  };//end of getWinner function//

  function getTie(){
    if (movesMade === 9 && winner !== true) {
      $('h1').text('Tie Game!');
    } 
    
  }///end of getTie function//


function resetGame(){
    board = [];
    currentMove = '';
    movesMade = 0;
    winner = ''; 
    $('h1').text('TicTacToe')
    // $('.box').html(''); 
    $('.box').on('click', updateBoard)
    $('p').html('');
    $.each($('div'), function(index, value){
    if ($(value).hasClass('box2')){
    $(value).removeClass("box2").addClass("box");
     }
   });

    //debugger;
  
  }//end of reset function//

});//document.ready









  