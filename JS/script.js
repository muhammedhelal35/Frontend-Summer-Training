// reverse string 
function REVERSESTRING(str)
{
    return str.split('').reverse().join('');
}
let str1="hello";
console.log("Reverse String : "+REVERSESTRING(str1))

// calculate factorial
function factorial(num) {
    if (num <=1) {
        return 1; 
    }
    return num*factorial(num-1);
}
console.log("Factorial of 5 : "+factorial(5))

//merge 2 obj 
function mergeObjects(obj1, obj2) {
    return {...obj1,...obj2};
}
const object1 = { a: 1, b: 2, c: 3 };
const object2 = { a: 4, d: 5,E: 6 };
console.log(mergeObjects(object1, object2)); 

//------
function TOGGLEBOOLEAN(bool){
    return !bool;
} 
console.log("TOGGLEBOOLEAN : "+TOGGLEBOOLEAN(true))


//Array Program
let array=[10,22,33,45,5,67]
function CalculateSum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    console.log("SUM: "+sum);
}

function MaxNumber(arr){
    let maxnumber;
    maxnumber=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>maxnumber)
        {
            maxnumber=arr[i];
        }
    }
    console.log("MAXIMUM: "+maxnumber);
}

function MinNumber(arr){
    let minnumber;
    minnumber=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<minnumber)
        {
            minnumber=arr[i];
        }
    }
    console.log("MINIMUM: "+minnumber);
}


function CountEvenOdd(arr){
    let evencount=0;
    let oddcount=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0)
        {
            evencount+=1;
        }
        else{
            oddcount+=1;
        }
    }
    console.log('EVEN NUMBERS: '+evencount);
    console.log('ODD NUMBERS: '+oddcount);
}

function generateReport(arr) {
    console.log("ARRAY: "+array);
    CalculateSum(array);
    MaxNumber(array);
    MinNumber(array);
    CountEvenOdd(array);
}
generateReport(array);




