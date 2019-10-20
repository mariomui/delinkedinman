const { generateRandomNumber } = require('../serverUtils');
const testAmount = 20;
describe('generateRandomNumber', () => {
  it('should be between 10 and 20', () => {
    for (var i = 0; i < testAmount; i++) {

      let target = generateRandomNumber(10, 20);

      expect(target).toBeGreaterThanOrEqual(10);
      expect(target).toBeLessThanOrEqual(20);
    }
  })
})