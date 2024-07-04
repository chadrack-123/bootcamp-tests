console.log('Loaded greet.tests.js');
describe("this test the isFromBellville function", function () {
  
  it("it should return True", function () {
    assert.equal(isFromBellville('CY 123'), true);
   
  });
  it("it should return False", function () {
 
    assert.equal(isFromBellville('CJ 123'), false);
  });
});
