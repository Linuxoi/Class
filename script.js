$("#logo").hover(function () {
	$("#autor").show()
	$("#autor_one").show()
	$("#autor_two").show()
    $("#logo").attr("src", "img/youtubesquare.svg")
    $("#white").stop(true, false).animate({
        width: "280px"
    });
}, function () {
	$("#autor").hide()
	$("#autor_one").hide()
	$("#autor_two").hide()
	$("#logo").attr("src", "img/avatarka.jpg");
    $("#white").stop(true, false).animate({
        width: "50px"
    });
});
 
