const me = {
    name : "nika",
    age : 16,
    country : "Georiga"
}

for(const i in me){ //'In' funqcia wers index
    console.log(me[i]);
} 

const numbers = [1,2,3,4,5,6,7,8,9]; //'of' wers values

for(const num of numbers){
    console.log(num)
}

for(const num in numbers){ //abrunebs indexebs "0,1,2,3,4,5,6,7,8"
    console.log(num)
}