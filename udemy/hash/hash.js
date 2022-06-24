class HashTable {
  constructor(size = 4) {
    this.keyMap = new Array(size);
    this.size = size;
  }
  _hash(key) {
    let total = 0;
    let WERID_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = key[i].charCodeAt() - 96;
      console.log(value);
      total = (total * WERID_PRIME + value) % this.size;
    }
    return total;
  }
  set(key, value) {
    let hash = this._hash(key);
    if (!this.keyMap[hash]) {
      this.keyMap[hash] = [];
    }
    this.keyMap[hash].push([key, value]);
  }
  get(key) {
    let hash = this._hash(key);

    if (!this.keyMap[hash]) {
      return undefined;
    } else {
      let value = this.keyMap[hash].find((data) => {
        return data[0] === key;
      });
      return value[1];
    }
  }
  keys() {
    let list = [];
    for (let i = 0; i < this.size; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          list.push(this.keyMap[i][j][0]);
        }
      }
    }
    return list;
  }
  values() {
    let list = [];
    for (let i = 0; i < this.size; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!list.includes(this.keyMap[i][j][1]))
            list.push(this.keyMap[i][j][1]);
        }
      }
    }
    return list;
  }
}
const hashTable = new HashTable(4);

hashTable.set("pink", "#42345");
hashTable.set("gdg", "#fddd");
hashTable.set("gdasdadsdg", "#gggfddd");
hashTable.set("dddfsdf", "#gggfddd");
hashTable.set("ddddd", "#gggfddd");
console.log(hashTable.keys());

console.log(hashTable.values());
