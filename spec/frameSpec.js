describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('Each frame', function() {

    it('should start at 0 points', function() {
      expect(frame.score).toBe(0);
    });
  });

  describe('Frame Score', function() {

    var game = jasmine.createSpyObj('game', ['bowl']);
    game.bowl.and.callFake(function() {
      return 5;
    });


    it('should increase by 5 if 5 pins are hit', function() {
      game.bowl(5);
      expect(frame.score).toBe(5);
    });
  });
});
