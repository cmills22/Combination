var pop = document.getElementById("pop");
var btn = document.getElementById("open");
var span = document.getElementsByClassName("close")[0];
var date = document.getElementById('datepicker');
var tag = document.getElementById('tag');
var description = document.getElementById('textarea');
var saveBtn = document.getElementById('save');
var taskName = document.getElementById('taskName');
var dropDown = document.getElementById('status');
dropDown.addEventListener('change', outputStatus);
function outputStatus(){
    console.log(dropDown.options[dropDown.selectedIndex].text);
}
btn.onclick = function(){
    taskName.value="";
    date.value="";
    tag.value="";
    description.value="";
    dropDown.selectedIndex = 0;
    pop.style.display='block';
}
span.onclick = function(){
    pop.style.display='none';
}
window.onclick = function(event){
    if(event.target==pop){
        pop.style.display='none';
    }
}