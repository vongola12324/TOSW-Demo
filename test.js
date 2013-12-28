var add = require("./add.js");
var assert = require("assert");

describe('Add', function() {
  it('Should Return 2 When 1 + 1', function() {
    assert.equal(2, add(1, 1));
  });
});
