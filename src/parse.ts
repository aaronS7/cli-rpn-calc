export type Operator = '+' | '-' | '*' | '/';

type ParsedInput = {
  parsedOperands: number[];
  parsedOperators: Operator[];
};

export function parseInput(input: string): ParsedInput {
  const parsedOperands: number[] = [];
  const parsedOperators: Operator[] = [];
  const operandsAndOperators = input.split(' ');
  const validOperator = new Set(['+', '-', '*', '/']);

  let idx: number = 0;
  for (idx = 0; idx < operandsAndOperators.length; idx++) {
    if (validOperator.has(operandsAndOperators[idx])) {
      break;
    }
    const value = Number(operandsAndOperators[idx]);
    if (isNaN(value)) {
      throw new Error('Number is not in proper format. Discarding input');
    }
    parsedOperands.push(value);
  }

  for (; idx < operandsAndOperators.length; idx++) {
    const operator = operandsAndOperators[idx];

    if (!validOperator.has(operator)) {
      throw new Error(`Invalid operator of "${operator}". Discarding input`);
    }

    parsedOperators.push(operator as Operator);
  }

  return {
    parsedOperands,
    parsedOperators,
  };
}
