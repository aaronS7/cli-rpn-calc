import { ImproperFormatForNumberError, InvalidOperatorError } from './errors';
import { parseInput } from './parse';

describe('validate if parsing input functions accurately', () => {
    it('operations and operands format parses correctly', () => {
        const { parsedOperands, parsedOperators} = parseInput("5 5 1 + +");
        expect(parsedOperands).toEqual([5, 5, 1]);
        expect(parsedOperators).toEqual(["+", "+"]);
    });

    it ('single operand can be parsed', () => {
        const { parsedOperands, parsedOperators} = parseInput("5");
        expect(parsedOperands).toEqual([5]);
        expect(parsedOperators).toEqual([]);
    });

    it('single operation can be parsed', () => {
        const { parsedOperands, parsedOperators} = parseInput("-");
        expect(parsedOperands).toEqual([]);
        expect(parsedOperators).toEqual(["-"]);
    });

    it('Throws error when improper number format', () => {
        expect(() => parseInput("5dsfd 1 6 + -")).toThrowError(ImproperFormatForNumberError);
        expect(() => parseInput("5 1 6 + f")).toThrowError(InvalidOperatorError);
    });

});