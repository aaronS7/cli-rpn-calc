import { parseInput, type Operator } from './parse';
import { RpnCalculator } from './calculator';

function main(): void {
  const calculator = new RpnCalculator();
  let operators: Operator[] = [];
  let operands: number[] = [];
  process.stdout.write('> ');
  process.stdin.on('data', (data: Buffer) => {
    const input = data.toString().trim();
    if (input === 'q') {
      process.exit(0);
    }

    const { parsedOperands, parsedOperators } = parseInput(input);
    operators = operators.concat(parsedOperators);
    operands = operands.concat(parsedOperands);

    if (operators.length >= operands.length) {
      throw new Error(
        'There are too few operands to support all operators. Discarding input',
      );
    }

    while (operators.length > 0) {
      const operator = operators.shift() as Operator;
      const firstOperand = operands.pop() as number;
      const secondOperand = operands.pop() as number;
      const result = calculator.computeOperation(
        firstOperand,
        secondOperand,
        operator,
      );
      operands.push(result);
    }

    process.stdout.write(`${operands[operands.length - 1]}`);
    process.stdout.write(`\n> `);
  });
}

main();
