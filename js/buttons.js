document.getElementById("mobileweb").addEventListener("click", windowOpen1);

  var Window1; 
 
        function windowOpen1() { 
            Window1 = window.open( 
              "http://designhavn.dk/Mobile_website/index.html", 
                "_blank", "width=800, height=600"); 
        } 


document.getElementById("respweb").addEventListener("click", windowOpen2);

  var Window2; 
 
        function windowOpen2() { 
            Window2 = window.open( 
              "http://designhavn.dk/index.html", 
                "_blank", "width=800, height=600"); 
        } 

document.getElementById("homeicon").addEventListener("click", TabOpen);

var Tab;

function TabOpen() {
    Tab = window.location.replace("../index.html#dtheme1");
}

