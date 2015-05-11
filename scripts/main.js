// javaScript

/*
** ready your jQuery lib
---
$(document).ready(function(){ 

});
---

or use this

---
$(function() {
	
});
----

*/


/* jQuery - Bootstap tut 01 */
$(function() { 

	//$(".col01").hide(500).delay(100).show(300);

	// column 3 animation...
	// fadeIn or fadeToggle
	$(".col03").slideUp(500).delay(1000).fadeIn(300);

	// .ccs
	$(".col01").css({color: "red"});
	$(".col01 h2").css({color: "green"});
	$(".col01 h2").css("font-size", "70px");

	//or

	$(".col02 h2").css({
		fontSize: "75px", 
		'color': "brown",
		"padding-top": "25px",
		fontWeight: 'bold'
	});

	//or

	// $(".col03").css("opacity", "0.5");
	$(".col03").css({
		opacity: 0.5,
		color: "green"
	});

});






/* 
** this is to consume API

$(function (){

	var $apiData = $('#apiData');

	$.ajax({
		type: "GET",
		//url: "https://api.arlo.co/theme-test/api/2012-02-01/pub/resources/eventsearch",
		url: 'http://rest.learncode.academy/api/johnbob/friends',
		success: function(apiItems) {
			$.each(apiItems, function (index, apiItem) {
				$apiData.append("<li>" + apiItem.name + "<br/>" + apiItem.age + "<br/>" + apiItem.id + "</li>");
			});
		},
		error: function() {
			alert ("api loading error");
		}
	})

})
*/