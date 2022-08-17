// 1. Write a program to find whether a given year is a leap year or not.

function leap_year(year){


    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        return 'Leap year'
    }
    else {
        return 'Not a leap year'
    }
}

console.log(leap_year(2000))

//2. Write a JavaScript program to convert temperatures to and from Celsius,
// Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in
// Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C


let temp_conv = {
c_to_f : (temp) => (9*temp/5) + 32,
f_to_c : (temp) => 5*(temp-32)/9
}
console.log(temp_conv.c_to_f(60))
console.log(temp_conv.f_to_c(45))

// 3. Write a program to find the factorial of a number.

function factorial(num){
    fact = 1;
    for (i=num;i>=1;i--){
        fact = fact * i;
    }
    return fact;
}
console.log(factorial(5))