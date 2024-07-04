describe("this test the greet function", function () {
 
  it("it should return hello, Chad", function () {
    assert.equal(greet("Chad"), "Hello, Chad");
  });
  it("it should return hello, Bob", function () {
    assert.equal(greet("Bob"), "Hello, Bob");
  });
  it("it should return hello, Sam", function () {
    assert.equal(greet("Sam"), "Hello, Sam");
  });
});
