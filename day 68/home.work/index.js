const divElements = document.getElementsByTagName("div");

for(const div of divElements){
    div.addEventListener("click", () => {
        console.log("div clicked");
    });
    

};