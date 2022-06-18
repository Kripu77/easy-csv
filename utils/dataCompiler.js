//2D array to 1DArray Converter fn
function twoDarray(twoDarray) {
  let output = twoDarray
    .map((singleArr) => {
      return singleArr.join(",");
    })
    .join("\n");
  return output;
}

//AOO to AOA to 1DArray converter fn
function arrayObj(input) {
  let outputData = arrayTwo.map(Object.values);
  outputData = twoDarray(outputData);
  return outputData;
}

module.exports = { twoDarray, arrayObj };
