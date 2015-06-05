"use strict"

format.extend(String.prototype)

var curPage = 1
var MAXPAGE = aData.list.length

var aniMap = {

    "type1": ["fadeInLeft", "", "fadeInRight", ""],
    "type2": ["fadeInLeftBig", "fadeInDownBig", "fadeInRightBig", "fadeInUpBig"],
    "type3": ["pulse", "", "", ""],
    "type8": ["flip", "", "", "flip"],
    "type11": ["flipOutY", "", "", ""],
    "type12": ["rotateInDownLeft", "", "", ""],
    "type13": ["fadeInRight", "", "", ""]

}

var createImg = function(opt) {
    if (opt.src) {
        var src = 'src = "{}"'.format(opt.src)
    } else if (opt.imgsrc) {
        var src = 'src = "{}"'.format(opt.imgsrc)
    }
    if (opt.style) {
        if (opt.style.left)
            opt.style.left = opt.style.left.toString() + "px"
        if (opt.style.right)
            opt.style.right = opt.style.right.toString() + "px"
        if (opt.style.top)
            opt.style.top = opt.style.top.toString() + "px"
        if (opt.style.bottom)
            opt.style.bottom = opt.style.bottom.toString() + "px"
        if (opt.style.height)
            opt.style.height = opt.style.height.toString() + "px"
        if (opt.style.width)
            opt.style.width = opt.style.width.toString() + "px"
        var str = JSON.stringify(opt.style).replace(/,/g, ";").replace(/"/g, "").replace(/\{/, "").replace(/\}/, "")
        var style = 'style = "{}"'.format(str)
    } else if (opt.imgsrc) {
        var str = "cover"
        var style = 'style = "{}"'.format(str)
    }

    return "<img {src} {style}>".format({
        "src": src,
        "style": style
    })
}

var createDiv = function(opt) {
    var id = 'id = "{}"'.format(opt.id)
    if (opt.dataRole) {
        var dataRole = 'data-role = "{}"'.format(opt.dataRole)
    }

    if (opt.class) {
        var cla = ' class = "{}"'.format(opt.class)
    }

    var innerHTML = opt.innerHTML
    if (opt.style) {
        if (opt.style.left)
            opt.style.left = opt.style.left.toString() + "px"
        if (opt.style.right)
            opt.style.right = opt.style.right.toString() + "px"
        if (opt.style.top)
            opt.style.top = opt.style.top.toString() + "px"
        if (opt.style.bottom)
            opt.style.bottom = opt.style.bottom.toString() + "px"
        if (opt.style.height)
            opt.style.height = opt.style.height.toString() + "px"
        if (opt.style.width)
            opt.style.width = opt.style.width.toString() + "px"
        var str = JSON.stringify(opt.style).replace(/,/g, ";").replace(/"/g, "").replace(/\{/, "").replace(/\}/, "")
        var style = 'style = "{}"'.format(str)
    }
    return "<div {id} {class} {dataRole} {style}> {innerHTML} </div>".format({
        "id": id,
        "class": cla,
        "dataRole": dataRole,
        "style": style,
        "innerHTML": innerHTML
    })
}

$(document).ready(function() {
    var pages = aData.list
    var pageStr = ""
    pages.forEach(function(page) {
        var elements = page.elements
        var eleStr = ""
        elements.forEach(function(element) {
            var imgDIV = createImg({
                "src": element.properties.src,
                "imgsrc": element.properties.imgSrc,
                "style": element.properties.imgStyle
            })
            var elementDIV = createDiv({
                "id": null,
                "class": "imgDiv",
                "style": element.css,
                "innerHTML": imgDIV
            })
            eleStr += elementDIV
        })
        var contentDIV = createDiv({
            "innerHTML": eleStr,
            "dataRole": "content"
        })
        var pageDIV = createDiv({
            "id": "page" + page.num,
            "innerHTML": contentDIV,
            "dataRole": "page"
        })
        pageStr += pageDIV
    })
    $("#container").append(pageStr)

    $("#container").on("swipeleft", function() {
        if (curPage <= MAXPAGE - 1) {
            curPage += 1
        }
        window.location.href = "#page" + curPage.toString()

    })

    $("#container").on("swiperight", function() {
        if (curPage >= 2) {
            curPage -= 1
        }
        window.location.href = "#page" + curPage.toString()
    })
})
