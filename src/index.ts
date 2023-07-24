import { type Operator } from './parse';
import { computeOperations } from './computeOperations';

function main(): void {
  process.stdout.write('> ');
  let operators: Operator[] = [];
  let operands: number[] = [];
  process.stdin.on('data', (data: Buffer) => {
    const input = data.toString().trim();
    if (input === 'q') {
      process.exit(0);
    }

    const {
      message,
      operands: newOperands,
      operators: newOperators,
    } = computeOperations(operators, operands, input);
    operators = newOperators;
    operands = newOperands;

    process.stdout.write(message);
    process.stdout.write(`\n> `);
  });
}

main();
