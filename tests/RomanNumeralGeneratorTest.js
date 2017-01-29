var expect = require('expect.js');
var RomanNumeralGenerator = require('../RomanNumeralGenerator');

describe('Testing Roman Numeral Generator: ', function () {
  it('should expose a function', function () {
    expect(RomanNumeralGenerator.generate).to.be.a('function');
  });

  it('converting 5 must be equal to V: ', function () {
    expect(RomanNumeralGenerator.generate(5)).to.equal('V');
  });
});
