# CLI RPN Calculator

## Description of Solution
This is my solution for the reverse polish notation calculator.
The operands were processed/stored in a Last in First Out (LIFO) manner.
This mapped very well to a stack and I utilized an array in javascript for this functionality.
The operators follow a First in First Out (FIFO) manner.
This could have been implemented using a queue, but I utilized an array for the sake of simplicity.
If multiple operands are provided (whether one by one or in a sequence), they are stored until there is an operator that can consume them.
If multiple operators are provided, the program will determine if there are enough operands to perform the actions.
If there are too few operands, the operators are discarded and the operands will remain.
If a list of operands and operators is provided, but there are too few operands, the entire input is discarded and operands previously stored are still intact.

## Implementation Reasoning/Justification
The calculator was implemented as a class in order to make extending in the future easier.
While this could have been implemented with a few functions, adding it as a class makes supporting other binary or unary operations in the future much easier.
Parsing user input was abstracted to a few helper functions in order to minimize logic in the main function.
This should allow for adopting other forms of transferring data (TCP, websockets, HTTP API, etc) if the need arises.

## Tradeoffs
One of the tradeoffs I made included using an array for storing and processing operators. Since popping from the beginning of an array is O(N), the more efficient solution would have been to implement a queue.
Due to the sake of simplicity and time, I stuck with an array.
However, if we had large inputs, utilizing a queue would result in an O(1) when pushing and popping elements.

## Running code
Install the latest lts verison of node and run (assumes linux shell): `npm ci && npm run build && npm start`.
This will install all necessary dependencies, build the project, and run the project.
If you prefer to use docker, you can run the following in the root of the project:
```
docker build -t rpn-cli .
docker run -it rpn-cli
```
To execute test, you can run
`npm run test`.

