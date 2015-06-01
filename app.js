"use strict"

format.extend(String.prototype)

var createImg = function(src){
	
}

var createDiv = function(num){
	return "<div data-role='page' id= '{}'><div data-role='content'></div></div>".format(num)
}

$(document).ready(function() {
	console.log("{}".format("hehehe"))
	var pages = aData.list
	pages.forEach(function(page){
		var elements = page.elements
		elements.forEach(function(element){
			var contentId = "#content" + page.num

			$(contentId).append("")
		})
	})
})

