const CalculatorModule = require('../src/string-calculator.js');

describe('String Calculator', () => {
    let calculator;
  
    beforeEach(() => {
      calculator = new CalculatorModule();
    });
  
    test('returns 0 for an empty string', () => {
      expect(calculator.add('')).toBe(0);
    });
  
    test('returns the number for a single number input', () => {
      expect(calculator.add('1')).toBe(1);
    });
  
    test('returns the sum of two numbers', () => {
      expect(calculator.add('1,2')).toBe(3);
    });
  
    test('handles multiple numbers', () => {
      expect(calculator.add('1,2,3,4')).toBe(10);
    });
  
    test('handles new lines between numbers', () => {
      expect(calculator.add('1\n2,3')).toBe(6);
    });
  
    test('supports custom delimiters', () => {
      expect(calculator.add('//;\n1;2')).toBe(3);
    });
  
    test('throws an exception for negative numbers', () => {
      expect(() => calculator.add('1,-2')).toThrow('Negative numbers not allowed: -2');
    });
  
    test('shows all negative numbers in the exception message', () => {
      expect(() => calculator.add('-1,-2,3')).toThrow('Negative numbers not allowed: -1, -2');
    });
  });