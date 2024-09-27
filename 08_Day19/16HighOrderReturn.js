
function OddorEvenFactory(request){
    if( request == "odd"){
        let odd = function(n){
            console.log(!(n%2==0))
        }
        return odd;

    } else if(request == "even"){
        let even = function (n){
            console.log(n%2==0);
        }
        return even
    }else{
        console.log("Wrong Request");
    }
}
let request = "odd"
// let func = OddorEvenFactory(request)
// func(3)
request = "even"
let func = OddorEvenFactory(request)
func (4)