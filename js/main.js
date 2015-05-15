var board = []; //array that represents the board and stores the players moves
var currentMove ; //current move switches between player1 & player2
var player1 = 'X' //player1 token
var player2 = 'O' //player2 token
var movesMade = 0;//moves made// maximum of 9
var winCombinations = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], 
                      [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ];
var winner = ''; //used for getTie function
var nIntervId = '';
$( document ).ready(function() {  

  soundManager.setup({
    url: 'sounds/',
    flashVersion: 9,
    preferFlash: false,
    onready: function() {
      var background = soundManager.createSound({
        url: 'sounds/background.mp3',
        id: 'background' , 
        onresume: true,
        multiShot: true,
        onpause: true,
        volume: 70
      });
      background.play();
    } 
  });//end of soundmanager background track//

  function playSound(filename) {
    var sound = soundManager.createSound({
      url: 'sounds/' + filename ,
      volume: 100
    });
    sound.play();
  }

  // set up event listener
  $('.box').on('click', updateBoard);
   $('#reset').on('click', resetGame);
    $('#mute').on('click', toggleMute); 
 //////////////////////////////////////
   function toggleMute(){
      soundManager.toggleMute('background');
     
  }//end of toggleMute//


  function updateBoard(){          //this function updates the board array
    
     var playMove = Number(this.id) 
     if (movesMade % 2 === 0) {   
       currentMove = player1;
         playSound('insert.wav');
         $('p').css('color','#B6FF00');
     }
    else {
       currentMove = player2;
         playSound('jump.wav');
         $('p').css('color','#FF1177');
     }
    board[playMove] = currentMove;
    movesMade = movesMade+1; 
    $(this).children(':first').html(currentMove); 
    $(this).removeClass("box").addClass("box2");
    getWinner();
    getTie();
    
    console.log(currentMove, movesMade)

  }//end of Updateboard


  function getWinner(){
    $.each(winCombinations, function(index, value){
      if (board[value[0]] === board[value[1]] && board[value[0]] === board[value[2]] && board[value[0]] !== undefined && board[value[2]] !== undefined ){
        if (currentMove === 'X') {
          winner = true;
          $('h1').text('PLAYER 1 WINS!'); 
          winnerAnimation();
          soundManager.toggleMute('background');
          playSound('victory1.mp3');
        }
        else if (currentMove === 'O'){
          $('h1').text('PLAYER 2 WINS');
          winner = true;
         winnerAnimation();
         soundManager.toggleMute('background');
         playSound('victory1.mp3');
         
        }
      }
     })
   //soundManager.resume('background');

  };//end of getWinner function//

  function getTie(){
    if (movesMade === 9 && winner !== true) {
      $('h1').text('Tie Game!');
      tieAnimation();
      soundManager.toggleMute('background');
      playSound('tie.mp3');
      debugger;
    } 
    
  }///end of getTie function//


function resetGame(){
    soundManager.toggleMute('background');
    stopAnimate();
    board = [];//empties array
    currentMove = '';//emtpies var
    movesMade = 0; //resets move count
    winner = ''; //empties var
    $('h1').text('TicTacToe')//resets header
    $('p').html('');
    $.each($('div'), function(index, value){
    if ($(value).hasClass('box2')){
    $(value).removeClass("box2").addClass("box");
     }
    
   }); 
  }//end of reset function//

  function winnerAnimation(){
    $.each($('p'), function(index, value){
      $(value).html(currentMove);
     });
    animate();
  }// end of winnerAnimation function//


  function tieAnimation(){
    $.each($('p'), function(index, value){
      $(value).html('?');
    });
    animate();
  }//end of tieAnimation function //

  function animate(){
     nIntervId = setInterval(function(){          
      $('p').animate( { color: '#B6FF00' }, 50).animate( { color: '#FF1177 ' }, 50); 
    }, 100);    
  }//end of animate function//

  function stopAnimate(){
    clearInterval(nIntervId);
  }//end of stopAnimate//

s
});//document.ready

  







  