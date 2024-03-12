let content = document.getElementsByClassid(home)

function addtohome(input) {
    home .value += input;
}
function calculate(){
    home .value = eval(home.value);
}
function cleardisplay() {
    home.value = ""
}