var no = document.getElementById('no');
no.addEventListener('change', myFunction);
function myFunction(){
    var option = no.options[no.selectedIndex].text;
    console.log(option);
}