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


/* jQuery - tut 01, basic jquery, basic bootstrap */
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


/* jQuery - tut 02, events..*/
$(function() { 

	// jQ .html
	$("#btn1").html("myNewBtnLabel").on("click", function(){
		$(".panel01").html("this is panel 01...");
	});

	//jQ .on
	$("#btn2").on("click", function(){
		$(".panel02").slideToggle(1000);
	});


	$("#btn3").on("click", function(){
		$(".panel03").toggle();
	});

	$(".panel03").on("click", function(){
		$(".panel03").toggle();
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