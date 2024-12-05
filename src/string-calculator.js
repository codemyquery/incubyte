class StringCalculator {
    add(numbers) {
      if (!numbers) return 0;
  
      // Custom delimiter handling
      let delimiter = /,|\n/;
      if (numbers.startsWith('//')) {
        const delimiterLineEnd = numbers.indexOf('\n');
        delimiter = new RegExp(numbers.slice(2, delimiterLineEnd));
        numbers = numbers.slice(delimiterLineEnd + 1);
      }
  
      // Split the input into numbers
      const numberArray = numbers.split(delimiter).map(Number);
  
      // Check for negative numbers
      const negatives = numberArray.filter(num => num < 0);
      if (negatives.length) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
      }
  
      // Calculate the sum
      return numberArray.reduce((sum, num) => sum + num, 0);
    }
  }
  
  module.exports = StringCalculator;
  