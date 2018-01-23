var pop = document.getElementById("pop");
var btn = document.getElementById("open");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function(){
    pop.style.display='block';
}
span.onclick = function(){
    pop.style.display='none';
}
window.onclick=function(event){
    if(event.target==pop){
        pop.style.display='none';
    }
}