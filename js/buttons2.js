

document.getElementById("datacol").addEventListener("click", windowOpen3);

var Window3;

function windowOpen3() {
    Window3 = window.open("2BasicUX/030101_Data-collection_Marcelina.pdf", "_blank", "width=800, height=600");
}



document.getElementById("prot").addEventListener("click", windowOpen4);

var Window4;

function windowOpen4() {
    Window4 = window.open("2BasicUX/030301_Prototype_Marcelina+Gintare.pdf", "_blank", "width=800, height=600");
}

document.getElementById("dsprint").addEventListener("click", windowOpen4b);

var Window4b;

function windowOpen4b() {
    Window4b = window.open("2BasicUX/030401_Design-Sprint_MoonbarApp.pdf", "_blank", "width=800, height=600");
}



document.getElementById("homeicon").addEventListener("click", TabOpen);

var Tab;

function TabOpen() {
    Tab = window.location.replace("index.html");
}