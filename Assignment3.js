// 1. Using for loops, write a Javascript program to output the following
// pattern -
// 1
// 2 3
// 4 5 6
// 7 8 9 10

let z=1;
for(i=1;i<=4;i++)
{
    for(j=1;j<=i;j++)
    {
        process.stdout.write(`${z} `);
        z=z+1;
    }
    process.stdout.write('\r')
;
}




// 2. Write a program to find whether a given number is armstrong number or

// not-
// The Armstrong number is a number that is equal to the sum of cubes of

// its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong
// numbers. Let's try to understand why 153 is an Armstrong number.
// 153 = (1*1*1)+(5*5*5)+(3*3*3) where:
// (1*1*1)=1
// (5*5*5)=125
// (3*3*3)=27
// So:
// 1+125+27=153

function armstrong(num)
{
    let sum=0;
    let new_num=num;
    for(i=1;i<=num.toString().length;i++)
    {
    dig = new_num%10;
    new_num = Math.floor(new_num/10);
    sum += dig**3;     
    }

    if (sum == num)
    {
        return 'Armstrong number'
    }

    return 'Not an Armstrong number'

}

console.log(armstrong(153))


// 3. Write a program to find whether a given number is special number or

// not-
// If the sum of the factorial of digits of a number (N) is equal to the

// number itself, the number (N) is called a special number.
// eg- 145 is a special number
// Logic- 1! + 4! + 5!= 1+24+120 i.e 14


function spnum(num)
{
    let sum=0;
    let new_num=num;
    for(i=1;i<=num.toString().length;i++)
    {
    dig = new_num%10;
    new_num = Math.floor(new_num/10);
    fact=1;
    for(j=dig;j>=1;j--)
    {
        fact=fact*j;
    }

    sum += fact;     
    }

    if (sum == num)
    {
        return 'Special number'
    }

    return 'Not a Special number'

}

console.log(spnum(145))


