function MultipleGreet(func , count){
    for(let i = 1 ; i<= count ; i++){
        func();
    }
}
let greet = function(){
    console.log("hello");
    
}
console.log(MultipleGreet(greet , 78))