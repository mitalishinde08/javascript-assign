// 1. Carefully observe this example.
/* function OuterFunction()
{ var outerVariable = 100;
function InnerFunction() {
alert(outerVariable);
}
return InnerFunction;
}
var innerFunc = OuterFunction();
innerFunc();*/


// a) Is the InnerFunction() a closure?
// --> Yes
// b) What is output of this program
// --> 100




//2. What is the difference between a closure and a scope ?

// closure: A function defined inside another function, this inner function is known as closure. 
// scope: There are two types of scopes: local and global:
// -->local scope:A variable declared inside a function can only be accessed within that particular function and not outside.
// -->global scope: A variable declared outside of any functions can be accessed everywhere.


// 3. What is a lexical scope and how is it related to closure?

// When the child function has access to its parent function's variable, the variable has lexical scope. This child function (known as closure) is usually returned so we can use the parent function’s variables even after it is closed.



// 4. Output of following closure ?
for (var i = 0; i < 3; i++) {
setTimeout(function log() {
console.log(i); // What is logged?
}, 1000);
}


// Solution : 3 3 3 is logged

