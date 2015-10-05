var lobby = function(game){};

lobby.prototype = {
  preload: function(){
    this.game.load.image('title', '../assets/title.png');
    this.game.load.image('start_button', '../assets/startgamebutton.png');
    socket.off("flip controllers");

  },

  create: function(){

    socket.on("confirm player", function(){game.state.start("Waiting")});
    socket.on("reject player", function(){game.state.start("Reject")});
    
    var style = { font: 'bold 12pt Arial', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 450 };
    var text = game.add.text(game.world.centerX, game.world.centerY, "-Press to Start-", style);
    text.anchor.set(0.5);

    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;

    buttonleft = game.add.button(game.world.centerX, game.world.centerY-45, 'start_button', this.playTheGame, this, 0, 1, 0, 1);
        buttonleft.events.onInputDown.add(function(){left=true;});
        buttonleft.events.onInputUp.add(function(){left=false;});
        buttonleft.anchor.set(0.5);
  },

  playTheGame: function(){
    socket.emit("player ready");
  }
};