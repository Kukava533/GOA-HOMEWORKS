const arr = new Array();
const evenArr = new Array();
let i = 0;
while (i<101){
    arr.push(i)
    i++
}

for(x in arr){
    if(x % 2 === 0){
        evenArr.push(arr[x])
    }
}

console.log(evenArr)

// შექმენით მასივი რომელშიც ჩაამატებთ ყველა რიცხვს 0-იდან 100-ის ჩათვლით, 
// შემდეგ მასივზე კიდევ იმუშავებთ for ციკლით და ყველა ლუწი 
// რიცხვის ჯამს გამოიტანთ

/*let arr = [];
for(let i = 0; i < 100; i++){
    arr.push(i)
}

let evenSum = 0;
for(let i = 0; i < evenSum.length; i++){
    if(i % 2 === 0){
        evenSum += i;
    }
}

console.log(evenSum)*/