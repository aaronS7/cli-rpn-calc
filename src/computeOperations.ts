import { RpnCalculator } from './calculator';
import { InsufficientOperandsError } from './errors';
import { type Operator, parseInput } from './parse';

type ComputedResult = {
  message: string;
  operators: Operator[];
  operands: number[];
}

const calculator = new RpnCalculator();
export function computeOperations(
  operators: Operator[],
  operands: number[],
  input: string,
): ComputedResult {
  try {
    const { parsedOperands, parsedOperators } = parseInput(input);
    if (
      operators.length + parsedOperators.length >=
      operands.length + parsedOperands.length
    ) {
      throw new InsufficientOperandsError();
    }
    const copyOfOperands = [...operands, ...parsedOperands];
    const copyOfOperators = [...operators, ...parsedOperators];

    while (copyOfOperators.length > 0) {
      const operator = copyOfOperators.shift() as Operator;
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
      operators: copyOfOperators,
    };
  } catch (error) {
    return {
      message: `${(error as Error).message}`,
      operands,
      operators,
    };
  }
}
