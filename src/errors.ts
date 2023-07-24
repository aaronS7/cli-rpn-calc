export class DivideByZeroError extends Error {
  constructor(operand: number) {
    super(`Cannot divide ${operand} by 0. Discarding input`);
    this.name = 'DivideByZeroError';
  }
}

export class InsufficientOperandsError extends Error {
  constructor() {
    super(
      'There are too few operands to support all operators. Discarding input',
    );
    this.name = 'InsufficientOperandsError';
  }
}

export class InvalidOperatorError extends Error {
  constructor(operator: string) {
    super(`Invalid operator of "${operator}". Discarding input`);
    this.name = 'InvalidOperatorError';
  }
}

export class ImproperFormatForNumberError extends Error {
  constructor() {
    super('Number is not in proper format. Discarding input');
    this.name = 'ImproperFormatForNumberError';
  }
}
