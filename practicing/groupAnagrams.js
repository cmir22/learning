function groupAnagrams(words = []) {
  // Create a hash table to group anagrams
  let anagramGroups = {};

  for (let i = 0; i < words.length; i++) {
    const sortedWord = words[i].split("").sort().join("");

    if (anagramGroups[sortedWord]) {
      anagramGroups[sortedWord].push(words[i]);
    } else {
      anagramGroups[sortedWord] = [words[i]];
    }

    console.log(sortedWord);
  }

  // TODO: Implement code here

  // Convert the hash table values to an array and return
  return Object.values(anagramGroups);
}

// Example usage:
let result = groupAnagrams([
  "listen",
  "silent",
  "enlist",
  "hello",
  "hobby",
  "done",
]);

console.log(result); // Output: [["listen", "silent", "enlist"], ["hello"], ["hobby"], ["done"]]
