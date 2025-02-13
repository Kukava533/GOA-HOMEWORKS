let button = document.getElementById("clicker")
let p = document.getElementById("paragraph")

let counter = 0
button.addEventListener("click", function(){
    counter +=1
    p.textContent = counter
})