/*****************************
 Game over big screen view
*****************************/
  //This is the view displayed on the main screen after a round is over 
  //It is triggered from game.js after a winner is declared.
  //After an eight second pause, the game will restart on the main lobby screen
  //Listens for: none
  //Emits: 'reset game'

var gameOver = function(game){};
 
gameOver.prototype = {
  init: function(){
  },

  preLoad: function(){
    this.game.load.image('gameover', 'assets/gameover.png');
    this.game.load.image('play', 'assets/playButton.png');

  },
  create: function(){

    //Add images to home screen

    var gameOverTitle = this.game.add.sprite(game.world.width * (1/2), game.world.height * (1/3),'gameover');
    gameOverTitle.anchor.setTo(0.5,0.5);
    //This button is currently inactive. The change from the "game over" state to the "lobby" game state is triggered 
    //by the setTimeout function below.
    var playButton = this.game.add.button(game.world.width * (1/2), game.world.height * (2/3),"play",null,this);
    playButton.anchor.setTo(0.5,0.5);

    //Change view back to lobby screen after 8 seconds
    setTimeout(function(){
      socket.emit("reset game");
      game.state.start("Lobby",true,false);
    },8000);
  }
};