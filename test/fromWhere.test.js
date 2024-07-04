describe("this test the From Where function", function () {
 
    it("it should return Bellville", function () {
        assert.equal(fromWhere('CY 567489'), 'Bellville'); 
    });
    it("it should return Paarl", function () {
        assert.equal(fromWhere('CJ 343502'), 'Paarl');
    });
    it("it should return Cape Town", function () {
        assert.equal(fromWhere('CA 987504'), 'Cape Town');
    });
    it("it should return Some other place!", function () {
        assert.equal(fromWhere('ZN 568593'), 'Some other place!');
    });
  });
  