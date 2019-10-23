

const parseMatrix = (mapping) => {
  let flattenedMatrix = [];
  const helper = (keyOrArray) => {
    // not an array, then return that number
    if (!Array.isArray(keyOrArray)) {
      flattenedMatrix.push(keyOrArray);
      return;
    } else {
      for (let item of keyOrArray) {
        helper(item);
      }
    }
  }
  helper(mapping, (key) => {
    flattenedMatrix.push(key);
  });
  return flattenedMatrix;
}
console.log(parseMatrix([[1, 2, 3], [1, 2, 3]]));

module.exports = {
  parseMatrix
}