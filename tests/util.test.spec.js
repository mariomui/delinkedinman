const { generateRandomNumber } = require('../serverUtils');
const { parseMatrix } = require('../serverUtils')
const testAmount = 20;
const testMatrix = [
  [1, 3, 3, 4, 5, 6, 7],
  '123456789'.split(''),
  '123456789'.split('')
]
describe('generateRandomNumber', () => {
  it('should be between 10 and 20', () => {
    for (var i = 0; i < testAmount; i++) {

      let target = generateRandomNumber(10, 20);

      expect(target).toBeGreaterThanOrEqual(10);
      expect(target).toBeLessThanOrEqual(20);
    }
  })
})

describe('parser', () => {
  it('should have testMastrix', () => {
    expect(testMatrix.length).toBe(3);
  });

  it('should spit out 25 element', () => {
    expect(parseMatrix(testMatrix).length).toBe(25);
  })
})