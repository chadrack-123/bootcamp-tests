describe("this test the isWeekDay function", function () {
 
    it("it should return False for Saturday", function () {
        assert.equal(isWeekday('Saturday'), false);
    });
    it("it should return False for Sunday", function () {
        assert.equal(isWeekday('Sunday'), false);
    });
    it("it should return True for Monday", function () {
        assert.equal(isWeekday('Monday'), true);
    });
    it("it should return True for Tuesday", function () {
        assert.equal(isWeekday('Tuesday'), true);
    });
    it("it should return True for Tuesday", function () {
        assert.equal(isWeekday('Wednesday'), true);
    });
    it("it should return True for Wednesday", function () {
        assert.equal(isWeekday('Thursday'), true);
    });
    it("it should return True for Friday", function () {
        assert.equal(isWeekday('Friday'), true);
    });
  });
  

  





