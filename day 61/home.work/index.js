function changeColor(){
    let elements = document.getElementsByClassName('colorDiv')

    for(let i = 0; i < elements.length; i++){
        elements[i].style.backgroundColor = 'red'
    }
}

changeColor()

function counter(){
    let list = document.getElementsByTagName('li')
    let count = 0

    for(let i = 0; i < list.length; i++){
        count+=1
        console.log(count)
    }
}

counter()


function restyler(){
    let h1 = document.getElementById("h1")
    h1.style.color = 'blue'
    h1.style.fontSize = '40px'
}



function myGetElementByID(id){
    const elements = document.all;

    for(let i = 0; i < elements.length; i ++){
        if (elements[i].id === id){
            return elements[i]
        }
    }
}

console.log(myGetElementByID('Paragraph'))



function manualGetElementsByClassName(className) {
    const elements = document.all;
    const result = [];

    for(let i = 0; i < elements.length; i++) {
        if(elements[i].classList.contains(className)) {
            result.push(elements[i]);
        }
    }

    return result;
}

manualGetElementsByClassName()





function pChanger(){
    let elements = document.getElementsByTagName('p')

    for(let i = 0; i < elements.length; i++){
        elements[i].innerHTML = 'programming'
    }
}

pChanger()



let button = document.getElementById('btn')

button.addEventListener('click', function(){
    let elements = document.getElementsByClassName('colorDiv')

    for(let i = 0; i< elements.length; i++){
        elements[i].style.visibility = 'hidden'
    }
    
})




function Highlighter(){
    let table = document.getElementsByTagName('tr')

    for(let i = 0; i<table.length; i++){
        if(i % 2 !== 0){
            table[i].style.backgroundColor = 'purple'
        }
    }
}






function mylGetElementsByTagName(tagName) {
    const elements = document.all;
    const result = [];

    for(let i = 0; i < elements.length; i++) {
        if(elements[i].tagName === tagName.toUpperCase()) {
            result.push(elements[i]);
        }
    }

    return result;
}

mylGetElementsByTagName()