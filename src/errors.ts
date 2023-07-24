/**
 * Error when attempting to divide by zero
 */
export class DivideByZeroError extends Error {
  constructor(operand: number) {
    super(`Cannot divide ${operand} by 0. Discarding input`);
    this.name = 'DivideByZeroError';
  }
}

/**
 * Error when there are too few operands for all operators
 */
export class InsufficientOperandsError extends Error {
  constructor() {
    super(
      'There are too few operands to support all operators. Discarding input',
    );
    this.name = 'InsufficientOperandsError';
  }
}

/**
 * Error when an invalid operator is detected
 */
export class InvalidOperatorError extends Error {
  constructor(operator: string) {
    super(`Invalid operator of "${operator}". Discarding input`);
    this.name = 'InvalidOperatorError';
  }
}

/**
 * Error when an improperly formatted number is provided
 */
export class ImproperFormatForNumberError extends Error {
  constructor() {
    super('Number is not in proper format. Discarding input');
    this.name = 'ImproperFormatForNumberError';
  }
}

/**
 * Error when no data was inputted
 */
export class MissingInputError extends Error {
  constructor() {
    super('Did not detect any input. Please try again');
    this.name = 'MissingInputError';
  }
}