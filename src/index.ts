import { computeOperations } from './computeOperations';

function main(): void {
  process.stdout.write('> ');
  let operands: number[] = [];
  process.stdin.on('data', (data: Buffer) => {
    const input = data.toString().trim();
    if (input === 'q') {
      process.exit(0);
    }

    const {
      message,
      operands: newOperands,
    } = computeOperations(operands, input);
    operands = newOperands;

    process.stdout.write(message);
    process.stdout.write(`\n> `);
  });
}

main();
