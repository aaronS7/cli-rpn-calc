import { RpnCalculator } from './calculator';
import { InsufficientOperandsError } from './errors';
import { type Operator, parseInput } from './parse';

type ComputedResult = {
  message: string;
  operands: number[];
};

const calculator = new RpnCalculator();

/**
 * This function is used to compute the new operands after receiving some user input.
 * This will also handle discarding the input and keeping the state of the operands
 * if the user input is malformed
 * @param operators The operators that exist before input
 * @param input The input that will be parsed
 * @returns The message to return to the console as well as the new operands after the computations
 */
export function computeOperations(
  operands: number[],
  input: string,
): ComputedResult {
  try {
    const { parsedOperands, parsedOperators } = parseInput(input);
    if (
      parsedOperators.length >=
      operands.length + parsedOperands.length
    ) {
      throw new InsufficientOperandsError();
    }
    const copyOfOperands = [...operands, ...parsedOperands];

    while (parsedOperators.length > 0) {
      const operator = parsedOperators.shift() as Operator;
      const firstOperand = copyOfOperands.pop() as number;
      const secondOperand = copyOfOperands.pop() as number;
      const result = calculator.computeOperation(
        firstOperand,
        secondOperand,
        operator,
      );
      copyOfOperands.push(result);
    }

    return {
      message: `${copyOfOperands[copyOfOperands.length - 1]}`,
      operands: copyOfOperands,
    };
  } catch (error) {
    return {
      message: `${(error as Error).message}`,
      operands,
    };
  }
}
