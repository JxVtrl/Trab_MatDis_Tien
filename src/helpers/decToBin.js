export const decToBin = (dec, varList) => {
  let bin = (dec >>> 0).toString(2);

  while (bin.length !== varList.length) {
    bin = `0${bin}`;
  }

  return bin;
};
