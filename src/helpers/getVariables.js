export function getVariables(rpn) {
  // eslint-disable-line no-unused-vars
  const vars = [];

  for (let i = 0; i < rpn.length; i += 1) {
    // If the token is a variable (character)
    if (rpn[i].match(/[a-z]/i)) {
      // And it's not in vars array
      if (vars.indexOf(rpn[i]) === -1) {
        vars.push(rpn[i]);
      }
    }
  }


  return vars;
}