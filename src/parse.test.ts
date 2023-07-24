import { ImproperFormatForNumberError, InvalidOperatorError } from './errors';
import { parseInput } from './parse';

describe('validate if parsing input functions accurately', () => {
  it('should parse operations and operands', () => {
    const { parsedOperands, parsedOperators } = parseInput('5 5 1 + +');
    expect(parsedOperands).toEqual([5, 5, 1]);
    expect(parsedOperators).toEqual(['+', '+']);
  });

  it('should parse single operand', () => {
    const { parsedOperands, parsedOperators } = parseInput('5');
    expect(parsedOperands).toEqual([5]);
    expect(parsedOperators).toEqual([]);
  });

  it('should parse single operation', () => {
    const { parsedOperands, parsedOperators } = parseInput('-');
    expect(parsedOperands).toEqual([]);
    expect(parsedOperators).toEqual(['-']);
  });

  it('should throw an error when improper number format', () => {
    expect(() => parseInput('5dsfd 1 6 + -')).toThrowError(
      ImproperFormatForNumberError,
    );
    expect(() => parseInput('5 1 6 + f')).toThrowError(InvalidOperatorError);
  });
});
