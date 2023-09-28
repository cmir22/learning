function findPair(numbers, targetSum) {
  // Create a hash table to track encountered numbers
  let encounteredNumbers = {};

  // TODO: Implement code here
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (count < targetSum) {
      count = count + numbers[i];
      encounteredNumbers[i] = numbers[i];

      if (count === targetSum) {
        return Object.values(encounteredNumbers);
      }
    }
  }

  return null;
}

// Example usage:
let result = findPair([0, 7, 1, 1, 1, 4, 5], 10);
console.log(result); // Output: [3, 7]
