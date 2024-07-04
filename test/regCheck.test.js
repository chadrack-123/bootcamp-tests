describe("this test the regCheck function", function () {
  it("it should return True for the first test and False for the second test", function () {
    assert.equal(regCheck("DC 55 YU GP", "GP"), true);
    assert.equal(regCheck("DC 55 YU GP", "EC"), false);
  });
  it("it should return True for the first test and False for the second test", function () {
    assert.equal(regCheck("5566 L", "L"), true);
    assert.equal(regCheck("5566 L", "M"), false);
  });
  it("it should return True for the first test and False for the second test", function () {
    assert.equal(regCheck("ERT 123 EC", "EC"), true);
    assert.equal(regCheck("ERT 123 EC", "GP"), false);
  });
  it("it should return True for the first test and False for the second test", function () {
    assert.equal(regCheck("FGT 123 MP", "MP"), true);
    assert.equal(regCheck("FGT 123 MM", "MP"), false);
  });
});
