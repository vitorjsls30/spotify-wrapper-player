const expect = require('chai').expect;

// Describe our tes scenarios
describe('Main', () => {
  let arr;

  // performs a single run, before the block
  before(() => {
    // initialize db connectio
    // create a dataset
  });

  // runs a single time, after a block
  after(() => {
    // terminate db connection
    // erase the dataset
  });

  // runs every time, after EACH block
  beforeEach(() => {
    arr = [1, 2 , 3];
  });

  // runs every time, after EACH block
  afterEach(() => {

  });

  it('should have a size of 4 when push another value to the array', () => {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  });

  it('should have a size of 2 when pop a value from the array', () => {
    arr.pop();
    expect(arr).to.have.lengthOf(2);
  });

  it('should remove 3 when use pop in our array', () => {
    expect(arr.pop() === 3).to.be.true;
  });

});
