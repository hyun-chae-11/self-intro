var bigimg = document.querySelector(".bigimg");
var bigpic = bigimg.querySelector(".big");  
var bigtext = bigimg.querySelector(".bigtext");
var smallpic = document.querySelectorAll(".small");

for(var i = 0; i<smallpic.length; i++){
    smallpic[i].addEventListener("click", changeimg);
}

function changeimg(){
    var imgAttribute = this.getAttribute("src");
    bigpic.setAttribute("src", imgAttribute);
    var title = this.parentNode.querySelector(".text");
    bigtext.innerHTML = title.innerText;
    console.log(title.innerText);
}

