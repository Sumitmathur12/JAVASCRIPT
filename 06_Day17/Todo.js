let TODO = [];
let req = prompt("Please enter your req");
while (true){
    if (req == "quit"){
        console.log("quiting app");
        break;
    }
    if( req == "list"){
        console.log("------------");
        for( task of TODO){
            console.log(task)
        }
        console.log("------------");
    } else if(req == "add"){
        let task = prompt("Please enter the task you want to add");
        TODO.push(task );
        console.log("task added ")
    } else if(req = "delete"){

    }
}