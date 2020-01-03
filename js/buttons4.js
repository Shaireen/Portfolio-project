document.getElementById("cweb").addEventListener("click", windowOpen10);

var Window10;

function windowOpen10() {
    Window19 = window.open("http://designhavn.dk/FoodsharingFinal/index.html", "_blank", "width=800, height=600");
}



document.getElementById("strb").addEventListener("click", windowOpen11);

var Window11;

function windowOpen11() {
    Window11 = window.open("4BasicContent/foodsharing_storyboard.pdf", "_blank", "width=800, height=600");
}

document.getElementById("pitch").addEventListener("click", windowOpen12);

var Window12;

function windowOpen12() {
    Window12 = window.open("4BasicContent/Presentation.pdf", "_blank", "width=800, height=600");
}




document.getElementById("homeicon").addEventListener("click", TabOpen);

var Tab;

function TabOpen() {
    Tab = window.location.replace("index.html");
}