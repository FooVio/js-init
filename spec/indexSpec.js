import { expect } from 'chai';
import { sum } from '../src/index';

describe('sum', () => {
  it('should sum the numbers', function() {
    expect(sum(3, 2)).to.equal(5);
  });
});
