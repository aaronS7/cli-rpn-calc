import { parseInput } from './parse';

function main(): void {
  let operators: string[] = [];
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

    process.stdout.write(`${operands[operands.length - 1]}`);
    process.stdout.write(`\n> `);
  });
}

main();
