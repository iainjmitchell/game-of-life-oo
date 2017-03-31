const deepEqual = require('deep-equal')

class HashTable {
  static copy (hashTable) {
    const copy = new HashTable()
    Object.keys(hashTable._hashes).forEach((key) => {
      copy._hashes[key] = hashTable._hashes[key]
    })
    copy._keys = hashTable._keys.map((key) => {
      return key
    })
    return copy
  }

  constructor () {
    this._hashes = {}
    this._keys = []
  }

  add (key, value) {
    this._hashes[JSON.stringify(key)] = value
    this._keys.push(key)
  }

  get (key) {
    return this._hashes[JSON.stringify(key)]
  }

  keys () {
    return this._keys
  }

  equal (hashtable) {
    return deepEqual(hashtable._hashes, this._hashes)
  }
}

module.exports = HashTable
