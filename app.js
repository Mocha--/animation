"use strict"

format.extend(String.prototype)

var createImg = function(opt) {
    if (opt.src) {
        var src = 'src = "{}"'.format(opt.src)
    } else if (opt.imgsrc) {
        var src = 'src = "{}"'.format(opt.imgsrc)
    }
    var style = 'style = "{}"'.format(opt.style)
    return "<img {src} {style}>".format({
        "src": src,
        "style": style
    })
}

var createDiv = function(opt) {
    var id = 'id = "{}"'.format(opt.id)
    var style = 'style = "{}"'.format(opt.sytle)
    if (opt.dataRole) {
        var dataRole = 'data-role = "{}"'.format(opt.dataRole)
    }
    var innerHTML = opt.innerHTML

    return "<div {dataRole} {id} {style}> {innerHTML} </div>".format({
        "id": id,
        "dataRole": dataRole,
        "sytle": style,
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
            console.log(imgDIV)
            var elementDIV = createDiv({
                "id": null,
                "style": element.css,
                "innerHTML": imgDIV
            })
            eleStr += elementDIV
        })
        var pageDIV = createDiv({
            "id": page.num,
            "innerHTML": eleStr,
            "dataRole": "page"
        })
        pageStr += pageDIV
    })
    $("#container").append(pageStr)
})
