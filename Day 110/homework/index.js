//n1 

// 7x6 მასივის შექმნა
let rows = 7;
let columns = 6;
let matrix = [];

// მასივის მონაცემების შესატანი ფუნქცია
function inputMatrix() {
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < columns; j++) {
            row.push(Number(prompt(`შეიტანეთ რიცხვი სტრიქონზე ${i+1}, სვეტში ${j+1}:`)));
        }
        matrix.push(row);
    }
}

// საშუალო არითმეტიკული რიგების მიხედვით
function rowAverages() {
    console.log("თითოეული სტრიქონის საშუალო არითმეტიკული:");
    for (let i = 0; i < rows; i++) {
        let rowSum = 0;
        for (let j = 0; j < columns; j++) {
            rowSum += matrix[i][j];
        }
        let average = rowSum / columns;
        console.log(`სტრიქონი ${i+1}: ${average}`);
    }
}

// საშუალო არითმეტიკული სვეტების მიხედვით
function columnAverages() {
    console.log("თითოეული სვეტის საშუალო არითმეტიკული:");
    for (let j = 0; j < columns; j++) {
        let colSum = 0;
        for (let i = 0; i < rows; i++) {
            colSum += matrix[i][j];
        }
        let average = colSum / rows;
        console.log(`სვეტი ${j+1}: ${average}`);
    }
}

// მთავარი ფუნქცია
function main() {
    inputMatrix();   // მონაცემების მიღება
    rowAverages();   // სტრიქონების საშუალო
    columnAverages(); // სვეტების საშუალო
}

main();

//n2

// მასივის ცვლა და გამოთვლები
function modifyMatrix() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (j % 2 === 0) { // ლუწინდექსიანი სვეტები
                matrix[i][j] = matrix[i][j] / 2;
            } else { // კენტინდექსიანი სვეტები
                matrix[i][j] = matrix[i][j] % 13;
            }
        }
    }
}

// მასივის გამოტანა
function printMatrix() {
    console.log("მომხმარებლის მიერ შეცვლილი მასივი:");
    for (let i = 0; i < rows; i++) {
        console.log(matrix[i].join(' '));
    }
}

// მთავარი ფუნქცია
function main() {
    inputMatrix();        // მონაცემების მიღება
    modifyMatrix();       // მასივის ცვლილება
    printMatrix();        // შედეგის ამოტანა
}

main();
//n3

// ელემენტების ადგილების გაცვლა
function swapFirstAndLast() {
    let firstElement = matrix[0][0];  // პირველ ელემენტს ვიღებთ
    let lastElement = matrix[rows - 1][columns - 1];  // ბოლო ელემენტს ვიღებთ

    // ადგილების გაცვლა
    matrix[0][0] = lastElement;
    matrix[rows - 1][columns - 1] = firstElement;
}

// შედეგის გამოტანა
function printMatrix() {
    console.log("გადამუშავებული მასივი:");
    for (let i = 0; i < rows; i++) {
        console.log(matrix[i].join(' '));
    }
}

// მთავარი ფუნქცია
function main() {
    inputMatrix();        // მონაცემების მიღება
    swapFirstAndLast();   // პირველი და ბოლო ელემენტების ადგილების გაცვლა
    printMatrix();        // შედეგის ამოტანა
}

main();

//n4

// 6x5 ზომის boolean ტიპის მასივის შექმნა
let rows = 6;
let columns = 5;
let matrix = [];

// მონაცემების შესატანი ფუნქცია
function inputMatrix() {
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < columns; j++) {
            // ვკითხ
//n5

// მასივის ზომების განსაზღვრა
let n = parseInt(prompt("შეიტანეთ სტრიქონების რაოდენობა (n):"));
let m = parseInt(prompt("შეიტანეთ სვეტების რაოდენობა (m):"));

// მასივის შექმნა
let matrix = [];

// მონაცემების შესატანი ფუნქცია
function inputMatrix() {
    for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j < m; j++) {
            row.push(parseInt(prompt(`შეიტანეთ რიცხვი სტრიქონზე ${i+1}, სვეტში ${j+1}:`)));
        }
        matrix.push(row);
    }
}

// ყველაზე დიდი ელემენტის კოორდინატების გამოთვლა
function findMaxElementCoordinates() {
    let maxElement = matrix[0][0]; // პირველ ელემენტად დავაყენებთ პირველ რიგის პირველ სვეტს
    let coordinates = { row: 0, column: 0 }; // კოორდინატების პირველი მნიშვნელობა

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] > maxElement) {
                maxElement = matrix[i][j];
                coordinates.row = i; // სტრიქონის ნომერი
                coordinates.column = j; // სვეტის ნომერი
            }
        }
    }

    return coordinates;
}

// შედეგის გამოტანა
function printResult() {
    let coordinates = findMaxElementCoordinates();
    console.log(`მნიშვნელობით ყველაზე დიდი ელემენტი მდებარეობს სტრიქონში ${coordinates.row + 1} და სვეტში ${coordinates.column + 1}.`);
}

// მთავარი ფუნქცია
function main() {
    inputMatrix();         // მონაცემების შესატანი ფუნქცია
    print

