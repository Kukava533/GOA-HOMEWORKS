const pass = "12345678"
let tries = 3
let guesspass;
while(tries>0){
    let guesspass = prompt("enter your guess : ")
    if(guesspass === pass){
        alert("Correct password! ");
    } else {
        alert("Wrong! enter password again (you have" + tries + " tries left)  : ");
        tries--
    }
    
}