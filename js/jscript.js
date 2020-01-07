
/** $(document).scroll(function() {
    var pageTopScroll = $(document).scrollTop()
    var pageBottomScroll = pageTopScroll + $(window).height()
    var tags = $(".scroll")
    
    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i]
        
        if ($(tag).position().top < pageBottomScroll) {
            $(tag).addClass("appear")
        } else {
            $(tag).removeClass("appear")
        }
        }
    }) **/


(function() {

    var windowHeight = window.innerHeight;
    var tags = document.getElementsByClassName("scroll");
    
    function init() {
        var tags = document.getElementsByClassName("scroll");
        var windowHeight = window.innerHeight;
    }
    
    function position() {
        for (var i = 0; i < tags.length; i++) {
            var tag = tags[i];
            var positionTop = tags[i].getBoundingClientRect().top;
            
            if (positionTop - windowHeight <= 0) {
                tag.classList.add("appear")
            } else {
                tag.classList.remove("appear");
            }
        }
    }

 
 window.addEventListener("scroll", position);
 window.addEventListener("resize", init);
  position();

init();
position();
}) ();


(function() {

    var windowHeight = window.innerHeight;
    var tags = document.getElementsByClassName("scroll2");
    
    function init() {
        var tags = document.getElementsByClassName("scroll2");
        var windowHeight = window.innerHeight;
    }
    
    function position() {
        for (var i = 0; i < tags.length; i++) {
            var tag = tags[i];
            var positionTop = tags[i].getBoundingClientRect().top;
            
            if (positionTop - windowHeight <= 0) {
                tag.classList.add("appear")
            } else {
                tag.classList.remove("appear");
            }
        }
    }

 
 window.addEventListener("scroll", position);
 window.addEventListener("resize", init);
  position();

init();
position();
}) ();

