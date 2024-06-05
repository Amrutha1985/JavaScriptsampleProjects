
var num=2;
var i=0;
var m=0;
var isPrime=true;
if(num==0 || num==1)
    {
        console.log("Number is not a prime number : "+num);
    }

else{

   

    for(i=2;i<num;i++){

        if(num==2 || num%2==0){
            console.log("number is not prime number");
            isPrime=false;
            break;
        }
        else{
            console.log("is prime number");
            isPrime=true;
            break;
        }

    }
}