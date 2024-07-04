describe("this test the Count Reg Number function", function () {
 
    it("it should return 3", function () {
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);
    });
    it("it should return 1", function () {
        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);
    });
    
  });
  