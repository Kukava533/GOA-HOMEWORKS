const p = document.createElement('p')
p.textContent = 'hello, world!'

const body = document.body
body.appendChild(p)



const list = document.getElementById('list')
let liElement = document.getElementById('two')

list.removeChild(liElement)

console.log(list)




let h1 = document.getElementById('h1')
const h2 = document.createElement('h2')
h2.textContent = 'genuinely tweaking'
body.replaceChild(h2, h1)




let paragraph = document.getElementById('txt')
paragraph.remove()




let span = document.createElement('span')

spanArr = [span, span, span]
for(let i = 0; i < spanArr.lenght; i++){
    div.appendChild(spanArr[i])
}


let img = document.querySelector("img")
const div1 = document.getElementById("div1")
const div2 = document.getElementById('div2')

img.remove()
div2.appendChild(img)



let text = document.createElement('p')
text.textContent = 'mersedes'
text.remove()