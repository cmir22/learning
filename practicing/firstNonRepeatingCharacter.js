function firstNonRepeatingCharacter(input) {
  // Create a hash table to store the frequency of characters
  let charFrequency = {};

  // Populate charFrequency with character frequencies
  for (let i = 0; i < input.length; i++) {
    let char = input[i];

    if (charFrequency[char]) {
      charFrequency[char]++;
    } else {
      charFrequency[char] = 1;
    }

    // TODO: Implement code here
  }

  // Find the first non-repeating character
  for (let i = 0; i < input.length; i++) {
    if (charFrequency[input[i]] == 1) {
      return input[i];
    }
  }

  // Return the first non-repeating character
  return null;
}

// Example usage:
let result = firstNonRepeatingCharacter("abaccdeff");
console.log(result); // Output: "b"
