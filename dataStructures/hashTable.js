class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  _hash(key = "") {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % this.size;
  }

  set(key, value) {
    const index = this._hash(key);

    if (!this.table[index]) {
      this.table[index] = [];
    }

    this.table[index].push({ key, value });
  }

  get(key) {
    const index = this._hash(key);

    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i].key === key) {
          return this.table[index][i].value;
        }
      }
    }
    return undefined;
  }
}

const hashTable = new HashTable(10);

hashTable.set("Adilene", "Machado");
hashTable.set("Cruz", "Ibarra");
hashTable.set("Cruzd", "Ibarra");
// hashTable.set("Cwadwruz", "Ibarra");

hashTable.get("Cruz");
hashTable.get("Cruzd");
