"use strict"

format.extend(String.prototype)

var createImg = function(opt) {
	var src = 'src = "{}"'.format(opt.src)
	var imgsrc = 'src = "{}"'.format(opt.imgsrc)
	var style = 'style = "{}"'.format(opt.style)
    return "<img {src} {imgsrc} {style}></img>".format({"src": src, "imgsrc": imgsrc, "style": style})
}

var createDiv = function(opt) {
	var id = 'id = "{}"'.format(opt.id)
	var style = 'style = "{}"'.format(opt.sytle)
	var dataRole = 'data-role = "{}"'.format(opt.dataRole)
	var innerHTML = opt.innerHTML
   
    return "<div {dataRole} {id} {style}> {innerHTML} </div>".format({"id": id, "dataRole" : dataRole, "sytle": style, "innerHTML": innerHTML})
    
}

$(document).ready(function() {
    var pages = aData.list
    var pageIndex = ""
    pages.forEach(function(page) {
        var elements = page.elements
        var temp
        console.log("111")
        elements.forEach(function(element) {
            var imgDIV = createImg({
            	"src" : element.properties.src, 
            	"imgsrc" :element.properties.imgSrc, 
            	"style" : element.properties.imgStyle.replace(/","/g, ";")
            })
            console.log(imgDIV)
            var elementDIV = createDiv({
                "id": null,
                "style": element.css.replace(/","/g, ";"),
                "innerHTML": imgDIV
            })
            temp += elementDIV
        })
        var pageDIV = createDiv({"id" : page.num, "innerHTML" : temp, "dataRole": "page"})
        pageIndex += pageDIV
    })
    $("body").append(pageIndex)
})