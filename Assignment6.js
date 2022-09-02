// 1) Perform the following operations to provide the implementation for a
// Rectangle class. The operations are:
// 1. Add an area() method to the Rectangle class.
// 2. Create a Square class that satisfies the following conditions:
// ○ It is a subclass of Rectangle.
// ○ It contains a constructor and no other methods.
// ○ It can use the Rectangle class' area method to print the area
// of a Square object.

class Rectangle {
    constructor(length,breadth) {
        this.length = length;
        this.breadth = breadth;
    }

    area() {
        return this.length*this.breadth
    }
}

class Square extends Rectangle {
    constructor(length,breadth) {
        super(length,breadth);
        this.length = length;
        this.breadth = breadth;
    }
}

let square = new Square(4,4);
console.log(square.area())


// 2) Write a javascript function find_largest to return the nth largest number

// in an array-
// eg- given an array of integers- [3,45,6,7,23,5,7,8]

// find_largest(3) will return third largest number from the above array -
// which is 8.


function find_largest(n,arr) {
    // sorting the array in descending order and then using n-1 as index to get the nth largest number
    arr.sort(function(a, b){return b - a})
    return arr[n-1]
}

console.log(find_largest(3,[3,45,6,7,23,5,7,8]))


// 3) Write a JavaScript program which accept a number as input in the
// function parameter and insert dashes (-) between each two even
// numbers.


function computeDash(num) {
    num = num.toString()
    num = num.split('');
    let i=0;
    indexes=[];
    while (i<=num.length-1){
        if (['0','2','4','6','8'].includes(num[i])) {
            if (['0','2','4','6','8'].includes(num[i+1])) {
                indexes.push(num[i],'-')
                i++  
            }
            else {
                indexes.push(num[i])
                i++
            }
        }
        else {
            indexes.push(num[i])
            i++
        }
    }
    return indexes.join('')
}

console.log(computeDash(22345846))



