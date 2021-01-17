let circles = document.getElementsByClassName("circle");
let percentage = [90, 80, 40, 30]
let text = ['HTML', 'CSS', 'JS', 'JAVA']

for(let i = 0; i<circles.length; i++){
    circles[i].addEventListener('mouseover', function(){
        let num = percentage[i];
        circles[i].style.background = `linear-gradient(0deg,  #5F4B8B1e ${num}%,  #ffffff31 ${num+1}%)`;
        circles[i].innerHTML = num+"%";
    })
    circles[i].addEventListener('mouseleave', ()=>{
        circles[i].style.background = `linear-gradient(0deg,  #75bceb44 0%,  #ffffff31 1%)`;
        circles[i].innerHTML = text[i];
    })
}