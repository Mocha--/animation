function createDiv(num){
	return "<div data-role='page' id="+ num +"><div data-role='content'></div></div>"
}
$(document).ready(function() {
    for (var i = 1; i <= aData.list.length; i++) {
    	$("#container").append("<div data-role='page' id="+ i +"><div data-role='content'></div></div>")
    }
    for (var i = 1; i <= aData.list.length; i++) {
    	for (var j = 1; j < aData.list[i-1].elements.length; j++) {
            if (aData.list[i-1].elements[j].properties.src) {
                $("#" + i).append("<img src=" + aData.list[i-1].elements[j].properties.src + "> <br />")
            }
           
        }
    }
    
})