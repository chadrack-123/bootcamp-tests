describe("this test the yearsAgo function", function () {
 
    it("it should return Years back", function () {

        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
      });
      it("it should return Years back", function () {

        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
      });
      
    
});
    

  