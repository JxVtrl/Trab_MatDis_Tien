export function expressionOrder(data) {
  // eslint-disable-line no-unused-vars
  const queue = [];
  const stack = [];

  let input = data.replace(/\s+/g, "");
  input = input.split(/([&|=><()!])/);

  // Clean the array
  for (let i = 0; i < input.length; i += 1) {
    if (input[i] === "") {
      input.splice(i, 1);
    }
  }

  for (let i = 0; i < input.length; i += 1) {
    const token = input[i];

    if (token.match(/[a-z]/i)) {
      queue.push(token);
    } else if ("&|><=!".indexOf(token) !== -1) {
      const o1 = token;
      let o2 = stack[stack.length - 1];

      while ("&|><=!".indexOf(o2) !== -1) {
        queue.push(stack.pop());
        o2 = stack[stack.length - 1];
      }

      stack.push(o1);
    } else if (token === "(") {
      stack.push(token);
    } else if (token === ")") {
      while (stack[stack.length - 1] !== "(") {
        queue.push(stack.pop());
      }

      stack.pop();
    }
  }

  while (stack.length > 0) {
    queue.push(stack.pop());
  }

  console.log(queue);

  return queue;
}
