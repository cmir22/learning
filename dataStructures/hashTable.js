//
// Hash table
//

class hashTable {
  constructor(size) {
    this.size = size;
    this.data = new Array(size);
  }

  _hash(key = "") {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.size;
    }

    return hash;
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][0];
        }
      }
    }

    return undefined;
  }
}

const myHashTable = new hashTable(50);

myHashTable.set("John Doe", 28);
myHashTable.set("Jane Smith", 32);

console.log(myHashTable.get("John Doe")); // Output: 28
console.log(myHashTable.get("Jane Smith")); // Output: 32
console.log(myHashTable.get("Bob Johnson")); // Output: undefined
