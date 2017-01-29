var RomanNumeralGenerator = require ('../RomanNumeralGenerator');

function printRomanLiteral(num) {
  console.log("generated: " + objGen.generate(num) + " for " + num + "\n");
}

var objGen = new RomanNumeralGenerator();

printRomanLiteral(1);
printRomanLiteral(5);
printRomanLiteral(10);
printRomanLiteral(20);
printRomanLiteral(3999);
printRomanLiteral(850);
