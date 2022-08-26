// 1. Write a Javascript function to check whether a triangle is equilateral,
// isosceles or scalene

function triangle(s1,s2,s3)
{

    if (s1>0 & s2>0 & s3>0){

        if ((s1==s2) & (s2==s3)) {
            return 'Equilateral triangle'
        }

        if ((s1!=s2) & (s2!=s3) & (s1!=s3)) {
            return 'Scalene triangle'
        }

        else {
            return 'Isosceles triangle'
        }
    }

    else {
        return 'not a triangle'
    }
}

console.log(triangle(1,1,1))



// 2. Write a function using switch case to find the grade of a student based
// on marks obtained
// a. “S grade” if the marks are between 90 and 100.
// b. “A grade” if the marks are between 80 and 90.
// c. “B grade” if the marks are between 70 and 80.
// d. “C grade” if the marks are between 60 and 70.
// e. “D grade” if the marks are between 50 and 60.
// f. “E grade” if the marks are between 40 and 50.
// g. “Student has failed” if the marks are between 0 and 40.
// h. Else output “Invalid marks”.



function grade(marks) {

    switch(true){
        case marks>=0 && marks<40 :
            console.log('Student has failed');
            break;
        case marks>=40 && marks<50 :
            console.log('E grade');
            break;
        case marks>=50 && marks<60 :
            console.log('D grade');
            break;
        case marks>=60 && marks<70 :
            console.log('C grade');
            break;
        case marks>=70 && marks<80 :
            console.log('B grade');
            break;
        case marks>=80 && marks<90 :
            console.log('A grade');
            break;
        case marks>=90 && marks<=100 :
            console.log('S grade');
            break;
        default:
            console.log('Invalid Marks');
            break;
    }
}


grade(45)


// 3. Write a JavaScript program to find the sum of the multiples of 3 and 5
// under 1000

sum = 0;
for (i=1;i<1000;i++)
{
    if ((i%3==0) || (i%5==0)) {
        sum = sum+i;
    }
}
console.log('The sum of multiples of 3 and 5 is',sum)



// 4. Write a program to find the factorial of all prime numbers between a
// given range . Range will be passed as 2 values in the function
// parameters. eg- if it is needed to find the values for numbers 1-100, then
// function declaration can look like - function prime(1,100).


function prime(lr,ur)
{
    if (lr<2)
    {
        lr=2;
    }
    for(i=lr;i<=ur;i++)
    {
        s=0;
        for(j=2;j<i;j++)
        {
            if (i%j==0)
            {
                s=s+1;
            }
        }
        if (s==0)
        {
            console.log('Factorial of ',i,'is :')
            fact = 1;
            for(num=i;num>=1;num--)
            {
                fact = fact * num;
            }
            console.log(fact)
        }
        
    }
    
}

prime(1,100)


