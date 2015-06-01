"use strict"

format.extend(String.prototype)

var createImg = function(src) {
    return '<img src = {src} {name}>'.format({
        "src": "hehehe",
        "name": "lalala"
    })
}


$(document).ready(function() {
    console.log(createImg(11))
    var pages = aData.list
    pages.forEach(function(page) {
        var elements = page.elements
        elements.forEach(function(element) {
            var contentId = "#content" + page.num

            $(contentId).append("")
        })
    })
})
