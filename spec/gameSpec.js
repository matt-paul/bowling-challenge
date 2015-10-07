describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('The game', function() {

    it('has an initial total score of 0', function() {
      expect(game.score).toBe(0);
    });

    it('starts with the first frame', function() {
      expect(game.frame).toBe(1);
    });
  });

  describe('A bowl', function() {

    it('should increase the score by 5 if 5 pins are hit', function() {
      game.bowl(5);
      expect(game.score).toBe(5);
    });
  });
});
