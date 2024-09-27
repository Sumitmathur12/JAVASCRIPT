// function outerFuc(){
//     let x = 5; 
//     let y = 6;
//     function innerFunc(){
//         console.log(x);
//         console.log(y)
//     }
//     innerFunc()
    
// } 
// outerFuc()

function outerFuc(){
    function innerFunc(){
        console.log(x);
        console.log(y)
    }
    let x = 5; 
    let y = 6;
  
    innerFunc()
    
} 
outerFuc()