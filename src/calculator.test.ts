import { RpnCalculator } from './calculator';
import { DivideByZeroError } from './errors';

describe('validate calculator logic works', () => {
  const calculator = new RpnCalculator();

  it('should add numbers', () => {
    let result = calculator.add(5, 7);
    expect(result).toEqual(12);

    result = calculator.add(-9, 7);
    expect(result).toEqual(-2);
  });

  it('should subtract numbers', () => {
    let result = calculator.sub(4, 7);
    expect(result).toEqual(3);

    result = calculator.sub(-9, 7);
    expect(result).toEqual(16);
  });

  it('should multiply numbers', () => {
    let result = calculator.mult(2, 3);
    expect(result).toEqual(6);

    result = calculator.mult(3, 9);
    expect(result).toEqual(27);
  });

  it('should divide numbers', () => {
    let result = calculator.div(3, 9);
    expect(result).toEqual(3);

    expect(() => calculator.div(0, 0)).toThrowError(DivideByZeroError);
  });

  it('should determine which computation to run based on operator', () => {
    let result = calculator.computeOperation(5, 6, '+');
    expect(result).toEqual(11);

    result = calculator.computeOperation(5, 6, '-');
    expect(result).toEqual(1);

    result = calculator.computeOperation(5, 6, '*');
    expect(result).toEqual(30);

    result = calculator.computeOperation(5, 10, '/');
    expect(result).toEqual(2);
  });
});
