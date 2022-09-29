// 1. Can we put duplicate values in the set object ?

/* No, set can only have unique values.*/

// ---------------------------------------------

// 2. Write the syntax for
// a) Creating new set object
let s = new Set();

// b) Adding new element to set object
s.add("new element");
console.log(s);

// c) Deleting element from set object
s.delete("new element");
console.log(s);

// 3. Create a set object with four random numbers from 0 to 10. Check if this
// newly created set object has 8 in it. Use set object methods.
let set_obj = new Set([...new Array(4)].map(() => Math.floor(Math.random() * 11)));
console.log(set_obj);
console.log(set_obj.has(8));