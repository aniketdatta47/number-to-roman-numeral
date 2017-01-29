
/* Alternative Roman numeral generator to RomanNumeralGenerator.js
 *
 * This one does not expose private functions such as _repeat and _genNumeralForDigit
 *
 **/
function RomanNumeralGenerator() {
  // repeats a roman numeral 'n' times
	function _repeat(numeral, n) {
		let result = '';
		for (let i = 0; i < n; i++) {
			result += numeral;
		}

		return result;
	}

  // returns a roman numeral for a digit
	function _genNumeralForDigit(number, onesSign, fivesSign, tensSign) {
		switch (number) {
		case 0:
			return '';
		case 1:
		case 2:
		case 3:
			return _repeat(onesSign, number); // e.g. III - 3
		case 4:
			return onesSign + fivesSign; // e.g. IV - 4
		case 5:
			return fivesSign; // e.g V - 5, L - 50
		case 6:
		case 7:
		case 8:
			return fivesSign + _repeat(onesSign, number - 5); // e.g. VI - 6
		case 9:
			return onesSign + tensSign; // e.g. IX - 9
    default:
      throw new TypeError('Invalid digit during numeral generation for a digit');
		}
	}

	function generate(number) {
    if (isNaN(number)) {
      throw new TypeError('Generator expects a number to passed.');
    }

    if (number === 0) {
      return 'nulla'; // ref - https://en.wikipedia.org/wiki/Roman_numerals#Zero
    }

    // lets break down numeral generation based on magnitude
		var thousands = Math.floor(number / 1000) % 10;
		var hundreds  = Math.floor(number / 100) % 10;
		var tens      = Math.floor(number / 10) % 10;
		var ones      = number % 10;

		var romanThousands = _repeat('M', thousands);
		var romanHundreds  = _genNumeralForDigit(hundreds, 'C', 'D', 'M');
		var romanTens      = _genNumeralForDigit(tens, 'X', 'L', 'C');
		var romanOnes      = _genNumeralForDigit(ones, 'I', 'V', 'X');

		return '' + romanThousands + romanHundreds + romanTens + romanOnes;
	}

  return {
    'generate': generate
  };
}

module.exports = new RomanNumeralGenerator();
