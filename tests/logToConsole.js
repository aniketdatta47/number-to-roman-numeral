var RomanNumeralGenerator = require ('../RomanNumeralGenerator');

// to test ES5 version
// var RomanNumeralGenerator = require ('../RomanNumeralGeneratorES5');

// USAGE:
//  -> RomanNumeralGenerator.generate(n);
// where n is number to convert
// returns roman numeral of 'n'

function printRomanLiteral(num) {
  console.log("generated: " + RomanNumeralGenerator.generate(num) + " for " + num + "\n");
}

printRomanLiteral(1);
printRomanLiteral(5);
printRomanLiteral(10);
printRomanLiteral(20);
printRomanLiteral(3999);
printRomanLiteral(850);
