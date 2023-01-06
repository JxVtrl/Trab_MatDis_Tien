export const convertToJsx = (code) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(code, "text/html");
  const jsx = doc.body.innerHTML;
  return jsx;
};
