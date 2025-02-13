let temp = [[204,262,723,91],[15,16,34,19]]
let times = ["morning", "afternoon",]

for(let i=0; i<temp.length; i++){
    console.log("Good morning");
    for(let j=0; j<temp[i].length; j++){
        console.log(`${times[j]}: ${temp[i][j]}`);
    }
}