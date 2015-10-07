//Game responsibity is to identify the number of frames played, especially identifying the 10th frame.

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('The game', function() {


    it('starts with the first frame', function() {
      expect(game.frame).toBe(1);
    });
  });




});
