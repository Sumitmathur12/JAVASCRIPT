let heroes = [  ["Ironman" , "spiderman " , "Thor " ],
                [ "Superman" ,  "WOnder woman" , "Flash"]
];
for( let i = 0 ; i < heroes.length ; i++){
    console.log( i, heroes[i]);
    for(let j = 0 ; j< heroes[i].length ; j++){
        console.log(`j=${j} , ${heroes[i][j]}`)
    }
}