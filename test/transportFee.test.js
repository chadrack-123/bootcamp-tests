describe("this test the transport fee function", function () {
 
    it("it should return R20", function () {
        assert.equal(transportFee('morning'), 'R20');
    });
    it("it should return R10", function () {
        assert.equal(transportFee('afternoon'), 'R10');
    });
    it("it should return free", function () {
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    });
  });
  
  



