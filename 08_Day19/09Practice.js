let str = ["hi" ," ", "sumit" ," ", "How" ," ", "Are" ," ", "YOU"," " ,"?" ];

function concation(str){
    let result  = "";
    for( let i = 0 ; i<str.length ; i++){
        result += str[i];

    }
    return result;
}

console.log(concation(str));