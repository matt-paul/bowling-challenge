describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame;
  });

  describe('Each frame', function() {

    it('should start at 0 points', function() {
      expect(frame.total).toBe(0);
    });

    it('should have 10 pins', function() {
      expect(frame.pins).toBe(10);
    });
  });

  it('pins being hit', function() {
    frame.bowl(6);
    expect(frame.pins).toBe(4);
  });


  describe('Strike', function() {

    it('is a strike when on the first role, ten pins are hit', function() {
      frame.bowl(10)
      expect(frame)
    })
  });

});






//   describe('Frame Score', function() {
//
//     var game = jasmine.createSpyObj('game', ['bowl']);
//     game.bowl.and.callFake(function() {
//       return 5;
//     });
//
//
//     it('should increase by 5 if 5 pins are hit', function() {
//       game.bowl(5);
//       expect(frame.total).toBe(5);
//     });
//   });
