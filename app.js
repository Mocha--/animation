"use strict"

format.extend(String.prototype)

var pages = aData.list
var curPage = 0
var MAXPAGE = aData.list.length

var createImg = function(opt) {
    if (opt.src) {
        var src = 'src = "{}"'.format(opt.src)
    } else if (opt.imgsrc) {
        var src = 'src = "{}"'.format(opt.imgsrc)
    }
    if (opt.style) {
        var tmp = Object.create(opt.style)
        if (tmp.left)
            tmp.left = tmp.left.toString() + "px"
        if (tmp.right)
            tmp.right = tmp.right.toString() + "px"
        if (tmp.top)
            tmp.top = tmp.top.toString() + "px"
        if (tmp.bottom)
            tmp.bottom = tmp.bottom.toString() + "px"
        if (tmp.height)
            tmp.height = tmp.height.toString() + "px"
        if (tmp.width)
            tmp.width = tmp.width.toString() + "px"
        var str = JSON.stringify(tmp).replace(/,/g, ";").replace(/"/g, "").replace(/\{/, "").replace(/\}/, "")
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
        var tmp = Object.create(opt.style)
        if (tmp.left)
            tmp.left = tmp.left.toString() + "px"
        if (tmp.right)
            tmp.right = tmp.right.toString() + "px"
        if (tmp.top)
            tmp.top = tmp.top.toString() + "px"
        if (tmp.bottom)
            tmp.bottom = tmp.bottom.toString() + "px"
        if (tmp.height)
            tmp.height = tmp.height.toString() + "px"
        if (tmp.width)
            tmp.width = tmp.width.toString() + "px"
        var str = JSON.stringify(tmp).replace(/,/g, ";").replace(/"/g, "").replace(/\{/, "").replace(/\}/, "")
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

var loadPage = function(pageIndex) {

    var elements = pages[pageIndex].elements
    var eleStr = ""
    elements.forEach(function(element, eleIndex) {
        var imgDIV = createImg({
            "src": element.properties.src,
            "imgsrc": element.properties.imgSrc,
            "style": element.properties.imgStyle
        })
        var elementDIV = createDiv({
            "id": "p{}e{}".format(pageIndex, eleIndex),
            "class": "imgDiv",
            "style": element.css,
            "innerHTML": imgDIV
        })
        eleStr += elementDIV
        console.log(element.css)
    })
    var pageDIV = createDiv({
        "id": "p{}".format(pageIndex),
        "innerHTML": eleStr
    })
    $("#container").html("")
    $("#container").append(pageDIV)
}

var init = function() {
    loadPage(curPage)
}

$(document).ready(function() {
    /*
    var pages = aData.list
    var pageStr = ""
    pages.forEach(function(page, pageIndex) {
        var elements = page.elements
        var eleStr = ""
        elements.forEach(function(element, eleIndex) {
            var imgDIV = createImg({
                "src": element.properties.src,
                "imgsrc": element.properties.imgSrc,
                "style": element.properties.imgStyle
            })
            var elementDIV = createDiv({
                "id": "p{}e{}".format(pageIndex, eleIndex),
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
            "id": "p{}".format(pageIndex),
            "innerHTML": contentDIV,
            "dataRole": "page"
        })
        pageStr += pageDIV
    })
    $("#container").append(pageStr)
    */

    init()

    $("#container").on("swipeleft", function() {
        if (curPage >= MAXPAGE - 1) {
            return
        }
        curPage += 1
        loadPage(curPage)
    })

    $("#container").on("swiperight", function() {
        if (curPage <= 0) {
            return
        }
        curPage -= 1
        loadPage(curPage)
    })
})
