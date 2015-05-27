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
        $("#img2").hide()
        $("#img3").hide()
        $("#img4").hide()
        $("#img5").hide()

        $("#img6").addClass("animated flip")
        $("#img7").addClass("animated bounceInRight")
        $("#img8").addClass("animated bounceInLeft")

        $("#img1")
            .addClass("animated fadeInDownBig")
            .one(animationEnd, function() {
                $("#img2")
                    .show()
                    .addClass("animated fadeInDownBig")
                    .one(animationEnd, function() {
                        $("#img3")
                            .show()
                            .addClass("animated fadeInRightBig")
                            .one(animationEnd, function() {
                                $("#img4")
                                    .show()
                                    .addClass("animated fadeInRightBig")
                                    .one(animationEnd, function() {
                                        $("#img5")
                                            .show()
                                            .addClass("animated fadeInLeftBig")
                                    })
                            })
                    })
            })
    })
})

