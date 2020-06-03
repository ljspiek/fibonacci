fibonacci = (result, len) => {
  if (result.length >= len) {
    return result;
  }
  result.push(result[result.length - 2] + result[result.length - 1]);
  return fibonacci(result, len);
};

console.log(fibonacci([0, 1], 15));
