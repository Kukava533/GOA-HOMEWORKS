
// const budget = prompt("please enter your budget ")
// if(budget > 20000) {
//     console.log("you can buy a car")
// } else {
//     console.log("you can't buy a car")
// }

// for(let i = 20 ; i>=0 ; i--) {
//     console.log(i)
// }

function even_sum(num){
    let sum = 0;
    for (let i = 2; i<= num; i++){
        if(i%2 === 0) {
            sum += i;
        }
    }
    return sum;
}