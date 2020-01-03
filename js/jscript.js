$(document).scroll(function() {
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
    })