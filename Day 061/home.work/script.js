document.body.children[0].textContent = "nikoloz kukava";
document.body.children[0].style.color = "blue";
console.log(document);

console.log(document.getElementById("p"));

function manual_getElement (id) {
    const elements = document.all

    for(let i = 0; i < elements.length ; i++){
        if(elements[i].id === id){
            return elements[i];
        }
    }


}

console.log(manual_getElement("p"));



console.log(document.getElementsByClassName("cl"));

function manual_gelElementsbyclass(classname) {
    const elements = document.all
    
    for(let i = 0 ; i < elements.length ; i++){
        if(elements[i].class === classname){
            return elements[i];
        }
    }
}

console.log(manual_gelElementsbyclass("cl"));


function manualGetElementsByTagName(tagName) {
    const elements = document.all;
    const result = [];

    for(let i = 0; i < elements.length; i++) {
        if(elements[i].tagName === tagName.toUpperCase()) {
            result.push(elements[i]);
        }
    }

    return result;
}