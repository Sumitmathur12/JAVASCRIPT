const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) // concat all the elements not like adding maknng all single element add
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]  // ... spread operator makes all the arrays spread and divide in single element

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))         // MAKE ARRAY OF HITESH WITH WORD TOD TOD KE LIKE "H" , "i" , "t" ETC.....
console.log(Array.from({name: "hitesh"})) // interesting ,, AAPKO BATANA PADEGA KI KEYS YA VALUE KA ARRAY BANANA HAI WRNA EMPTY DEGA

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));