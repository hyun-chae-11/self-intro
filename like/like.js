var bigpic = document.querySelector(".big");  
var smallpic = document.querySelectorAll(".small");

for(var i = 0; i<smallpic.length; i++){
    smallpic[i].addEventListener("click", changeimg);
}

function changeimg(){
    var smallAttribute = this.getAttribute("src");
    bigpic.setAttribute("src", smallAttribute);
}