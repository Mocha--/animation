
"use strict"

format.extend(String.prototype)

var createImg = function(src){
	
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
