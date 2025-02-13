const box = document.querySelector("#box");

box.classList.add("transparent","dcode");
box.classList.remove("rounded");
box.classList.toggle("active", 1===1);
box.classList.replace("transpanrent", "filled");

console.log(box.classlist.contains("filled"));