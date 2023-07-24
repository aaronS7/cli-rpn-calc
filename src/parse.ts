import { ImproperFormatForNumberError, InvalidOperatorError } from './errors';

export type Operator = '+' | '-' | '*' | '/';

type ParsedInput = {
  parsedOperands: number[];
  parsedOperators: Operator[];
};

const VALID_OPERATORS = new Set(['+', '-', '*', '/']);

export function parseInput(input: string): ParsedInput {
  const parsedOperands: number[] = [];
  const parsedOperators: Operator[] = [];
  const operandsAndOperators = input.split(' ');

  let idx: number = 0;
  for (idx = 0; idx < operandsAndOperators.length; idx++) {
    if (VALID_OPERATORS.has(operandsAndOperators[idx])) {
      break;
    }
    const value = Number(operandsAndOperators[idx]);
    if (isNaN(value)) {
      throw new ImproperFormatForNumberError();
    }
    parsedOperands.push(value);
  }

  for (; idx < operandsAndOperators.length; idx++) {
    const operator = operandsAndOperators[idx];

    if (!VALID_OPERATORS.has(operator)) {
      throw new InvalidOperatorError(operator);
    }

    parsedOperators.push(operator as Operator);
  }

  return {
    parsedOperands,
    parsedOperators,
  };
}
