"use strict"

format.extend(String.prototype)

var pages = aData.list
var curPage = 0
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
        var tmp = {}
        var keys = Object.keys(opt.style)
        console.log(keys.length)
        for(var i = 0; i < keys.length; i++){
            if(keys[i] == "left")
                tmp["left"] = opt.style.left.toString() + "px"
            else if (keys[i] == "right")
                tmp["right"] = opt.style.right.toString() + "px"
            else if (keys[i] == "top")
                tmp["top"] = opt.style.top.toString() + "px"
            else if (keys[i] == "bottom")
                tmp["bottom"] = opt.style.bottom.toString() + "px"
            else if (keys[i] == "height")
                tmp["height"] = opt.style.height.toString() + "px"
            else if (keys[i] == "width")
                tmp["width"] = opt.style.width.toString() + "px"
            else
                tmp[keys[i]] = opt.style[keys[i]]
        }
        /*
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
            tmp.width = tmp.width.toString() + "px"*/
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
    var innerHTML = opt.innerHTML
    if (opt.style) {
        var tmp = {}
        var keys = Object.keys(opt.style)
        console.log(keys.length)
        for(var i = 0; i < keys.length; i++){
            if(keys[i] == "left")
                tmp["left"] = opt.style.left.toString() + "px"
            else if (keys[i] == "right")
                tmp["right"] = opt.style.right.toString() + "px"
            else if (keys[i] == "top")
                tmp["top"] = opt.style.top.toString() + "px"
            else if (keys[i] == "bottom")
                tmp["bottom"] = opt.style.bottom.toString() + "px"
            else if (keys[i] == "height")
                tmp["height"] = opt.style.height.toString() + "px"
            else if (keys[i] == "width")
                tmp["width"] = opt.style.width.toString() + "px"
            else
                tmp[keys[i]] = opt.style[keys[i]]
        }
        /*
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
            tmp.width = tmp.width.toString() + "px"*/
        //console.log(tmp)
        var str = JSON.stringify(tmp).replace(/,/g, ";").replace(/"/g, "").replace(/\{/, "").replace(/\}/, "")
            //var style = 'style = "{}"'.format(str)
    }
    var animation = {}
    if (opt.anim) {
        if (opt.anim.type != null && opt.anim.direction != null) {
            animation.class = "animated " + aniMap["type{}".format(opt.anim.type)][opt.anim.direction]

        }
        if (opt.anim.duration != null && opt.anim.delay != null && opt.anim.countNum != null) {
            animation.style = " ;-vendor-animation-duration: {duration};-vendor-animation-delay: {delay};-vendor-animation-iteration-count: {countNum};".format({
                "duration": opt.anim.duration,
                "delay": opt.anim.delay,
                "countNum": opt.anim.countNum
            })
        }
    }

    if (opt.class) {
        var cla = ' class = "{} {}"'.format(opt.class, animation.class)
    }
    if (animation.style) {
        var style = ' style = "{}"'.format(str + animation.style)
    } else {
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

        if (element.properties.anim) {
            var animationAttr = element.properties.anim[0]
        } else {
            var animationAttr = null
        }

        if(element.content != ""){
            var content = createDiv({
                "innerHTML": element.content,
                "style": element.css,
                "class": "contentDiv",
                "anim": animationAttr 
            })
        }

        var elementDIV = createDiv({
            "id": "p{}e{}".format(pageIndex, eleIndex),
            "class": "imgDiv",
            "style": element.css,
            // mu qian wei zhi , bu zhidao hui bu hui you duo ge dong hua
            "anim": animationAttr,
            "innerHTML": imgDIV
        })
        eleStr += elementDIV
        eleStr += content
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
