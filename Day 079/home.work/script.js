const rows = 10;
const colums = 8;

const myArray1 = []

for(let i = 0; i < rows; i++) {
myArray1[i] = [];
for (let j = 0; j < colums; j++) {
    myArray1[i][j] = null;
 }   
}

console.log(myArray1);

const myarray2 = new Array(rows);

for(let i = 0; i < myarray2.length; i++) {
    myarray2[i] = new Array(colums);
}

console.log(myArray2);
 const myarray3 = Array.from(array(rows), () => new array(colums));

console.log(myArray3);

const myarray4 = [[],[],[],[],[],[],[],[]];

console.log(myarray4);