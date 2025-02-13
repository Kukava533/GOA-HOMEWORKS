const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const img = document.querySelector('img');

const imgArr = ['car1.jpg', 'car2.avif', 'car3.avif'];
let index = 0;

next.addEventListener('click', function() {
    index++;
    if(index >= imgArr.length) {
        index = 0;
    }
    img.src = imgArr[index];
})

prev.addEventListener('click', function() {
    index--;
    if(index < 0) {
        index = 2;
    }
    img.src = imgArr[index];
})



const div = document.querySelector('#parent');
const button = document.querySelector('#button');

let counter = 0;

button.addEventListener('click', function(){
    const p = document.createElement('p');
    p.textContent = 'Paragraph ' + counter;
    p.id = counter;

    div.appendChild(p);

    counter++;
})