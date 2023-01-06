export function calculateExpression(rpn, vars) {
  // eslint-disable-line no-unused-vars
  const stack = [];
  let symbol;

  let a;
  let b;

  // Calculate
  for (let i = 0; i < rpn.length; i += 1) {
    symbol = rpn[i];

    // If the symbol is variable push its value on to the stack
    // If it's a operator, do necessary operation
    if (symbol.match(/[a-z]/i)) {
      stack.push(+vars[symbol]);
    } else {
      switch (symbol) {
        case "&":
          a = stack.pop();
          b = stack.pop();
          stack.push(b && a);
          break;
        case "|":
          a = stack.pop();
          b = stack.pop();
          stack.push(b || a);
          break;
        case "=":
          a = stack.pop();
          b = stack.pop();
          stack.push(+(b === a));
          break;
        case ">":
          a = stack.pop();
          b = +!stack.pop();
          stack.push(+(b || a));
          break;
        case "<":
          a = +!stack.pop();
          b = stack.pop();
          stack.push(+(b || a));
          break;
        case "!":
          a = stack.pop();
          stack.push(+!a);
          break;
        default:
          break;
      }
    }
  }

  return stack[0];
}
