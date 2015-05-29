"use strict"

var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend"

$(document).ready(function() {
<<<<<<< HEAD
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
=======
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
    $("#page1").on("swiperight", swipeDown)
    $("#page2").on("swipeleft", swipeUp)

    function swipeUp(event) {
        window.location.href = "#page1"
    }
>>>>>>> 43177aa577d35e830421adc4c498905809aa1fcc

    function swipeDown(event) {
            window.location.href = "#page2"
        }
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
        })
    
        $("#container").load("components/page3.html", function() {
            $("#img2").hide()
            $("#img3").hide()
            $("#img4").hide()
            $("#img5").hide()

<<<<<<< HEAD
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

=======
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
        })*/
})
>>>>>>> 43177aa577d35e830421adc4c498905809aa1fcc
