//Stack and Heap MEMORY
// Stack (Primitive)  // Heap (Non- Primitive)

let MyyoutubeName = "SumitMathur";
let AnotherName = MyyoutubeName;
AnotherName = "AnupMathur";
console.log(MyyoutubeName)
console.log(AnotherName)

//Whenever we use Stack Memory this make a copy of another Variable that's Why this can't change main variable like Myyoutubename directly becauwse 
// when i assign MyyoutubeName in AnotherName this make a copy of MyyoutubeName and then Assign so this not make any affect in main var

let userone = {
    email: "sm4596932@gmail.com",
    name: "sumit",
}
let usertwo = userone 
usertwo.email = "anup@1234.com"
console.log(userone)
console.log(usertwo)

//Whenever we use Heap memory this is not make a copy this refrence a original value when we decalere variable so the value is taken from original value
// like in userone email sm45942332@gmail.com when we assign userone in usertwo then this make a orignal path that's why when we change usertwo to userone bhi 
// change ho gya kyoki original path se connected tha na