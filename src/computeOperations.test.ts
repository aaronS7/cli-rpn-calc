import { computeOperations } from './computeOperations';

describe('validate if evaluating computation of operands and operators is correct', () => {
  it('should output correct message and new operations and operands', () => {
    const { message, operands } = computeOperations(
      [],
      '5 5 1 + +',
    );
    expect(message).toEqual('11');
    expect(operands).toEqual([11]);
  });

  it('should output error message when supplied with too many operators', () => {
    const { message, operands } = computeOperations(
      [1, 0, 1],
      '5 5 1 + + + - * +',
    );
    expect(message).toEqual(
      'There are too few operands to support all operators. Discarding input',
    );
    expect(operands).toEqual([1, 0, 1]);
  });
});
