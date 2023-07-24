import { type Operator } from './parse';

type ICalculatorOperators = {
  add: (operand1: number, operand2: number) => number;
  sub: (operand1: number, operand2: number) => number;
  mult: (operand1: number, operand2: number) => number;
  div: (operand1: number, operand2: number) => number;
};

export class RpnCalculator implements ICalculatorOperators {
  computeOperation(
    operand1: number,
    operand2: number,
    operator: Operator,
  ): number {
    switch (operator) {
      case '+':
        return this.add(operand1, operand2);
      case '-':
        return this.sub(operand1, operand2);
      case '*':
        return this.mult(operand1, operand2);
      case '/':
        return this.div(operand1, operand2);
    }
  }

  add(operand1: number, operand2: number): number {
    return operand1 + operand2;
  }

  sub(operand1: number, operand2: number): number {
    return operand2 - operand1;
  }

  mult(operand1: number, operand2: number): number {
    return operand1 * operand2;
  }

  div(operand1: number, operand2: number): number {
    if (operand2 === 0) {
      throw new Error(`Cannot divide ${operand1} by 0. Discarding input`);
    }
    return operand2 / operand1;
  }
}
