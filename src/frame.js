var Frame = function() {
  this.total = 0;
  this.pins = 10;
};

Frame.prototype.total = function() {
  this.total = this.total;
};

Frame.prototype.bowl = function(pinsHit) {
  this.pins = (this.pins - pinsHit);
};
