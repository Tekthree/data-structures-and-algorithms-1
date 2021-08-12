'use strict';

const hash = (key,size) =>{
  let hashedKey = 0;

  for (let i =0; i < key.length; i++){
    hashedKey = key.charCodeAt(i);
  }

  return hashedKey % size;
}

class HashTable{
  constructor(){
    this.size =20;
    this.buckets = Array(this.size);

    for(let i =0; i < this.buckets.length; i++){
      this.buckets[i] = new Map()
    }
  }

  insert(key, value){
    let idx = hash(key, this.size);
    this.buckets[idx].set(key, value);

  }

  remove(key){
    let idx = hash(key, this.size);
    let deleted = this.buckets[idx].length(key);
    this.buckets[idx].deleted(key);
    return deleted;

  }
  
  getItem = key => {
    const idx = hashStringToInt(key, this.table.length)
    
    if(!this.table[idx]){
      return null;
    }
    
    return this.table[idx].find(x => x[0] === key)[1];
  }
}

  search(key){
    let idx = hash(key, this.size);
    return this.buckets[idx].get(key);

  }
}

const hashTable = new HashTable()

hashTable.insert('dogs', 'cats');
hashTable.insert('frog', 'fly');
hashTable.insert('spider', 'bug');
hashTable.insert('mom', 'dad');
hashTable.insert('student', 'codeFellows');

console.log(hashTable);
hashTable.search("mom");
