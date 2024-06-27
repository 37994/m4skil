const first = document.getElementById("js--first");
const switches = document.getElementsByClassName("product");

first.onclick = function(){
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "none";
    }
    document.getElementById("js--firstModal").style.display = "grid";
}

const firstClose = document.getElementById("js--firstClose");

firstClose.onclick = function(){
    document.getElementById("js--firstModal").style.display = "none";
    for(let i = 0; i < switches.length; i++){
        switches[i].style.display = "block";
    }
}