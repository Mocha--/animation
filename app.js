"use strict"

var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend"

$(document).ready(function() {
    /*$("#container").load("components/page1.html", function() {
        $("#img2").hide()
        $("#img3").hide()
        $("#img1")
            .addClass("animated flip")
            .one(animationEnd, function() {
                $(this)
                    .removeClass("flip")
                    .addClass("fadeOut")
                    .one(animationEnd, function() {
                        $("#img2")
                            .show()
                            .addClass("animated rollIn")
                        $("#img3")
                            .show()
                            .addClass("animated bounceInRight")
                    })
            })
    })*/

    $("#container").load("components/page3.html", function() {
        $("#img1").addClass("animated fadeInDownBig")
        $("#img2").addClass("animated fadeInDownBig")
        $("#img3").addClass("animated fadeInRightBig")
        $("#img4").addClass("animated fadeInRightBig")
        $("#img5").addClass("animated fadeInLeftBig")
        $("#img6").addClass("animated flip")
    })
})

