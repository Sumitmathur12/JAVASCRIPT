// array

const myArr = [0, 1, 2, 3, 4, 5]
// const myHeors = ["shaktiman", "naagraj"]

// const myArr2 = new Array(1, 2, 3, 4)   
// console.log(myArr[1]);                // GIVE ARRAY VALUE AT GIVEN INDEX

// Array methods

// myArr.push(6)    // ADD 6 AT THE LAST 
// myArr.push(7)
// myArr.pop()     // DELETE THE VALUE OF THE LAST INDEX 

// myArr.unshift(9)  // SHIFT THE NUMBER AND PUT THE GIVEN VALUE IN THE BIGINING (INDEX(0)) , SHIFT ALL 
// myArr.shift()          // SHIFT ALL THE NUMBER ONE STEP AND FIRST NUMBER DELETE
// console.log(myArr)

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// // slice, splice

console.log("A ", myArr);     

const myn1 = myArr.slice(1, 3)     // SLICE GIVE 1 to 3 AND BUT 3 NOT INCLUDE LIKE PYTHON RANGE(1,3) -> [1,2] ONLY 

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)   // SPLICE MANIPULATE ORIGINAL ARRAY LIKE [1,2,3] OUT AND REMAIN ONLY IN ORIGINAL ARRAY IS [0,4,5]
console.log("C ", myArr);
console.log(myn2);