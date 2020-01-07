document.getElementById("sprite").addEventListener("click", windowOpen5);

var Window5;

function windowOpen5() {
    Window3 = window.open("http://designhavn.dk/sprite.html", "_blank", "width=1120, height=675");
}



document.getElementById("anim").addEventListener("click", windowOpen6);

var Window6;

function windowOpen6() {
    Window4 = window.open("http://designhavn.dk/animation.html", "_blank", "fullscreen==yes");
}

document.getElementById("prpool1").addEventListener("click", windowOpen7);

var Window7;

function windowOpen7() {
    Window7 = window.open("http://designhavn.dk/JS_day1/circle.html", "_blank", "width=800, height=600");
}

document.getElementById("prpool2").addEventListener("click", windowOpen8);

var Window8;

function windowOpen8() {
    Window8 = window.open("http://designhavn.dk/JS_day2/random.html", "_blank", "fullscreen==yes");
}

document.getElementById("onboarding").addEventListener("click", windowOpen9);

var Window9;

function windowOpen9() {
    Window9 = window.open("http://designhavn.dk/KEA_Mystery/index.html", "_blank", "fullscreen==yes");
}



document.getElementById("homeicon").addEventListener("click", TabOpen);

var Tab;

function TabOpen() {
    Tab = window.location.replace("../index.html#dtheme3");
}