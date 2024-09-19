//Dates
let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())

// console.log(myDate.getDate())  // GIVING EXACT DATE ONLY

// console.log(myDate.toDateString())  // ONLY DAY DATE , MONTH AND YEAR

// console.log(myDate.toJSON()) //  

// console.log(myDate.toLocaleDateString())

// console.log(myDate.toLocaleTimeString()) // GIVE TIME

// console.log(myDate.toUTCString())


console.log(typeof myDate)

let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);               //Mytimestamp is used for like making quizzes , polls for exact timing
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
