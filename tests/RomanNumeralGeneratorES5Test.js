var expect = require('expect.js');
var RomanNumeralGenerator = require('../RomanNumeralGeneratorES5');

describe('Testing Roman Numeral Generator ES5: ', function() {
	it('generate should be a function', function() {
		expect(RomanNumeralGenerator.generate).to.be.a('function');
	});

	it('_repeat should not be exposed: ', function() {
		expect(RomanNumeralGenerator._repeat).to.be.a('undefined');
	});

	it('_genNumeralForDigit should not be exposed', function() {
		expect(RomanNumeralGenerator._genNumeralForDigit).to.be.a('undefined');
	});

	it('converting 0 to return nulla', function() {
		expect(RomanNumeralGenerator.generate(0)).to.equal('nulla');
	});

	it('converting 1 to return I', function() {
		expect(RomanNumeralGenerator.generate(1)).to.equal('I');
	});

	it('converting 5 to return V', function() {
		expect(RomanNumeralGenerator.generate(5)).to.equal('V');
	});

	it('converting 10 to return X', function() {
		expect(RomanNumeralGenerator.generate(10)).to.equal('X');
	});

	it('converting 20 to return XX', function() {
		expect(RomanNumeralGenerator.generate(20)).to.equal('XX');
	});

	it('converting 3999 to return MMMCMXCIX', function() {
		expect(RomanNumeralGenerator.generate(3999)).to.equal('MMMCMXCIX');
	});

	it('Passing invalid entries such as {}, undefined to throw a TypeError ', function() {
		expect(RomanNumeralGenerator.generate)
			.withArgs([{}, undefined])
			.to.throwException(function(e) {
				expect(e).to.be.a(TypeError);
			});
	});
});
