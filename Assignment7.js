// 1. Input a String S, and check its length and if the length is greater than 4,
// truncate the input String and output the result -
// Input: Ice Output: Ice
// Input:Icecream Output:Icec...

function string_truncate(s) {
    if (s.length>4) {
        return s.substring(0, 4);
    }
    return s;
}

console.log(string_truncate('ice'))


//2. Input a String S with multiple words, and remove whitespaces and
// output the result -
// Input: “Hii Boy” Output: “HiiBoy”

function rm_spaces(s) {
    return s.replace(/ /g,"");
}

console.log(rm_spaces("Hii Boy"))

// 3.Input a String S with two words, and replace first word with second word
// and display the result -
// Input: “Hii Boy” Output: “Boy Hii”


function rev(s) {
    let s_arr = s.split(" ");
    return s_arr.reverse().join(" ");
}

console.log(rev("Hii Boy"))


// 4. Input a String S with a word, and replace character “a” with “x” and
// display the result -
// Input: “apple” Output: “xpple”

function replace_a(s) {
    return s.replace(/a/g,"x");
}

console.log(replace_a("apple"))

// 5. What string method can be used to convert string into array ?

// String.split() and the parameter should be passed as a string on which we have to split, 
// for eg if we have to split the string "Hi there how are you" on spaces we would use :
console.log("Hi there how are you".split(" "));

// 6. What string method can be used to check the occurrence of a specified
// text in a string?

// We can first try to match the required text using regex and then find the length of the array that is returned. 
// For eg, here we are trying to find the occurence of "are" in the string:
console.log("Hi there how are are are you".match(/are/g).length);


// 7. How can you break a string to a newline in Javascript ?

// By using the character "\n"
console.log("Hey there!\nI hope you're doing fine.")

// 8. Write a Javascript function to test whether the first character of a string
// is lowercase.

function lower(s) {
    if (s.match(/^[a-z]/)!=null) {
        return true;
    }
    return false;
}

console.log(lower("blockchain"));
console.log(lower("Blockchain"));

// 9. Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc
// (any combination) using string methods.
// How will you handle that ?

function correct(s) {
        if (s.match(/^yes$/i)!=null) {
            return "correct";
        }
        return "incorrect";
    }

    console.log(correct("yes"));
    console.log(correct("Yes"));
    console.log(correct("YES"));


    

// 10. Given a String S, achieve following tasks

class Tasks {
    constructor(S) {
        this.S = S;
    }

    to_upper() {
        console.log(this.S.toUpperCase());
    }

    first_letter_upper() {
        console.log(this.S.charAt(0).toUpperCase() + this.S.slice(1));
    }

    to_lower() {
        console.log(this.S.toLowerCase());
    }

    halves() {
        let length = this.S.length;
        console.log(this.S.slice(length/2) + this.S.slice(0, length/2));
    }

    no_char() {
        let obj = new Object();
        for (let i of this.S) {
            if (obj.hasOwnProperty(i)) {
                obj[i] = obj[i] + 1;
            }
            else {
                obj[i] = 1;
            }
        }
        let counter=0;
        for (const [key, value] of Object.entries(obj)) {
            if (value>1) {
                counter = counter + 1;
            }
        }
        console.log(`${counter} characters are repeated`)

    } 

    rev() {
        console.log(this.S.split("").reverse().join(""))
    }
}


let task = new Tasks("Cool");


// a) Convert the String into upper case.
task.to_upper();

// b) Convert only the first character to uppercase.
task.first_letter_upper();

// c) Convert the String into lower case.
task.to_lower();

// d) Break the string into two halves and swap them.
task.halves();

// e) Count the repeating characters.
task.no_char();

// f) Reverse the string
task.rev();


