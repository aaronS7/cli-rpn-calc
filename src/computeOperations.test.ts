import { computeOperations } from './computeOperations';
import { InsufficientOperandsError } from './errors';

describe('validate if evaluating computation of operands and operators is correct', () => {
    it('should output correct message and new operations and operands', () => {
        const { message, operands, operators} = computeOperations([], [], "5 5 1 + +");
        expect(message).toEqual('11');
        expect(operands).toEqual([11]);
        expect(operators).toEqual([]);
    });

    it ('should output error message when supplied with too many operators', () => {
        const { message, operands, operators} = computeOperations(["+", "-"], [1, 0, 1], "5 5 1 + + + / *");
        expect(message).toEqual('There are too few operands to support all operators. Discarding input');
        expect(operands).toEqual([1, 0, 1]);
        expect(operators).toEqual(["+", "-"]);
    });
});