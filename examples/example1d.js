/* Example 1d - Deleting a Key-Value Pair from a Trie*/

const { Trie } = require("@ethereumjs/trie"); // We import the library required to create a basic Merkle Patricia Tree

const trie = new Trie(); // We create an empty Merkle Patricia Tree
console.log("Empty trie root: ", trie.root); // The trie root

async function test() {
  const key = Buffer.from("testKey");
  const value = Buffer.from("testValue");
  await trie.put(key, value); // We update (using "put") the trie with the key-value pair "testKey": "testValue"
  const valuePre = await trie.get(key); // We retrieve (using "get") the value at key "testKey"
  console.log("Value (String): ", valuePre.toString()); // We retrieve our value
  console.log("Updated trie root:", trie.root); // The new trie root

  await trie.del(key);
  const valuePost = await trie.get(key); // We try to retrieve the value at (deleted) key "testKey"
  console.log('Value at key "testKey": ', valuePost); // Key not found. Value is therefore null.
  console.log("Trie root after deletion:", trie.root); // Our trie root is back to its initial value
}

test();

/*
Results:
Empty trie root:  <Buffer 56 e8 1f 17 1b cc 55 a6 ff 83 45 e6 92 c0 f8 6e 5b 48 e0 1b 99 6c ad c0 01 62 2f b5 e3 63 b4 21>
Value (String):  testValue
Updated trie root: <Buffer 8e 81 43 67 21 33 dd 5a b0 0d fc 4b 01 14 60 ea 2a 7b 00 d9 10 dc 42 78 94 2a e9 10 5c b6 20 74>
Value at key "testKey":  null
Trie root after deletion: <Buffer 56 e8 1f 17 1b cc 55 a6 ff 83 45 e6 92 c0 f8 6e 5b 48 e0 1b 99 6c ad c0 01 62 2f b5 e3 63 b4 21>
*/
