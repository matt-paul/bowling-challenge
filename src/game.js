var Game = function() {
  this.score = 0;
  this.frame = 1;
  this.frameScore = 0;
};

Game.prototype.score = function() {
  this.score;
};

Game.prototype.frame = function() {

};

Game.prototype.bowl = function(pins) {
  this.score = (this.score + pins);
  this.frameScore = this.frameScore + pins;
};
