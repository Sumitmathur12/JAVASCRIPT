let sum = 56;   //GLOBAL SCOPE
function callsum(a , b){
    let sum = a+b;      // FUNCTION SCOPE 
    console.log(sum); // when we print sum inside function then it prints without error 
}                   
console.log(callsum(1, 4));

//console.log(sum);  ..// we print sum but sum is in fuction and it cannot print outside fuction that's why it get error is (Sum is not defined)
console.log(sum);