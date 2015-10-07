//The scoreboard's responsibility is to add up the correct score


describe('Score', function() {

  beforeEach(function() {
    scoreboard = new Scoreboard;
  });

  // it('should add up the numbers on the scoreboard correctly', function() {
  //   game.bowl(5);
  //   game.bowl(4);
  //   expect(game.score).toBe(9);
  // });

  it('has an initial total score of 0', function() {
    expect(scoreboard.total).toBe(0);
  });


  // describe('A bowl', function() {
  //
  //   it('should increase the score by 5 if 5 pins are hit', function() {
  //     game.bowl(5);
  //     expect(game.score).toBe(5);
  //   });
  // });

});
