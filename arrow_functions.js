//function def using arrow
var add=(num1,num2)=>num1+num2;

var welcome=()=>"Hi Welcome to my World!";
var square=(num)=>num*num;

var power=(num1,num2)=>Math.pow(num1,num2);

var Hello=  (name)=>"Hello "+ name;
var WelcomeMesage=(newmesage)=>""+newmesage+" Welcome again";

var isPrimeNumber=(num)=>
    {

var  isprime = true;

if (typeof num !== 'number') {
    console.log("It is not a number");
}
else if (num === 1) {
    console.log("Number is not prime or composite");
}
else if (num > 1) {
    for (var i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            isprime = false;
            break;
        }
    }
}

return isprime;

    }

console.log(add(3,4));
console.log(welcome());
console.log(square(4))
console.log(power(2,3));
console.log(Hello("Amrutha"))
console.log(WelcomeMesage("Hi Amrutha"));
console.log(isPrimeNumber(33));