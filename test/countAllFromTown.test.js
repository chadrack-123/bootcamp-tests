describe("this test the Count All From Town function", function () {
  it("it should return 3", function () {
    var fromStellies = countAllFromTown(
      "CL 124,CY 567,CL 345, CJ 456,CL 341",
      "CL"
    );
    //fromStellies should contains
    assert.equal(fromStellies, 3);
  });
  it("it should return 1", function () {
    var fromKuilsriver = countAllFromTown(
      "CJ 124,CY 567,CL 345, CF 456, CL 341",
      "CF"
    );
    //fromStellies should contains
    assert.equal(fromKuilsriver, 1);
  });
});
