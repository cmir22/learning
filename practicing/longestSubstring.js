function longestSubstring(input) {
  // Create a hash table to track characters and their positions
  let charMap = {};

  // Initialize variables for tracking the start and end of the substring
  let start = 0;
  let maxLength = 0;

  // TODO: Implement code here
  for (let i = 0; i < input.length; i++) {
    if (!charMap[input[i]]) {
      maxLength++;
      charMap[input[i]] = input[i];
    }
  }

  return maxLength;
}

// Example usage:
let result = longestSubstring("abcabcbb");
console.log(result); // Output: 3
