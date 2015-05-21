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

/*
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
*/

/* jQuery - tut 03, Writing Smarter, Better Code --- DRY  and using THIS */
$(function() { 

	$(".panelButton").on("click", function() {		
		
		var panelId = $(this).attr("data-panelId");
		var newContent = "this is a new content";
		
		$("." + panelId).fadeToggle();
	});

});


/* jQuery - tut 04, DOM traversal */
$(function() {

	/*
	
	$("li").first();
	$("li").last();

	$("li").first().hide();
	$("li").first().show();


	$("li").first().addClass("colorRed");
	$("li").last().addClass("colorGreen textBold");

	$("ul").children();
	$("ul:first").children();
	$("ul:last").children();
	$("ul:eq(0)").children();

	$("li:first").siblings();
	$("li:last").siblings();

	$("li:first").parent();
	$("li:last").parent();
	$("li").eq(4).parent();
	$("li").eq(4).parent().parent();
	$("li").eq(4).parent().parent().parent();
	
	$("li").eq(4).parent().parent().prev();
	$("li").eq(4).parent().parent().prev().prev();
	$("li").eq(4).parent().parent().prev().prev().next()

	$("li").firtst().next();

	*/

	// $("li").on('click', function() {
	// 	$(this).next().hide();
	// })

	// $("li").on("click", function(){
	// 	$(this).next().remove();
	// })

	// $("li").on("click", function(){
	// 	$(this).siblings().remove();
	// })

	
	// $("li").on("click", function(){
	// 	$(this).closest(".list").addClass("colorRed");
	// });


	// $("ul.list").on("click", function() {
	// 	// this is just to show ".filter()".. 
	// 	// you can use ".find" only.. :) see code below..
	// 	$(this).find(".special").filter(".special").addClass("textBold");
	// })


	// $("ul.list").on("click", function(){
	// 	$(this).find(".special").remove();
	// 	//$(".special").remove(); //-- this is not efficient, 
	// 	//it needs to check the entire list/page..
	// })


// find more stuff about:
/*

.is
.not
etc..

*/

});

// tutorial #5 - Building a jQuery Tab Panel Widget

$(function() {

	$(".tab-panels .tabs li").on("click", function() {
		

		// this is for tabs..
		// $panel - added $, that thing representing jquery selector
		var $panel = $(this).closest(".tab-panels")	
		$panel.find(".tabs li.active").removeClass("active");

		//modify this, see above code
		//$(".tab-panels .tabs li.active").removeClass("active");
		
		$(this).addClass("active");
	
		//which panel to show
		var panelToShow = $(this).attr("rel");

		//hide current panel
		//call back after slide up..
		//then make it as a function
		//then modify it again, use find..
		//$(".tab-panels .panel.active").slideUp(300, showNextPanel)

		$panel.find(".panel.active").slideUp(300, showNextPanel)

		//show next panel function..
		function showNextPanel() {
			$(this).removeClass("active");

			$("#"+panelToShow).slideDown(300, function() {
				$(this).addClass("active");
			});
		}

	});

}) ;


//jQuery Tutorial #6 - Building a jQuery Baisc Image Slider

$(function() {

	// setInterval
	/*
	var myInterval = setInterval(function() {
		console.log (new Date());
	}, 1000);
	*/

	// clearInterval <----  not working in console, why???

	// animate
	// $(selector).animate(obj, time, callback)

	
	// start to animate..
	// set interval
	// animate margin-left
	
	/*	
		setInterval(function() {
			$("#slider .slides").animate({"margin-left": "-=640px"}, 1000);
		}, 2000);

	*/

	// clean the code.. see old code above..

	// configuration
	var imageWidth = 640;
	var animationSpeed = 1000;
	var imagePause = 3000;
	var currentSlide = 1;

	// cache the DOM
	// make it little bit faster... look once and reference it! :)
	// and add callback
	var $slider = $("#slider");
	var $sliderContainer = $slider.find(".slides");
	var $slides = $sliderContainer.find(".slide");

	var interval; // this variable should be outside the function - scope.. :)


	function startSlider() {

		interval = setInterval(function() {
			$sliderContainer.animate({"margin-left": "-=" + imageWidth}, animationSpeed, function() {
				currentSlide++;
				if (currentSlide === $slides.length) {
					currentSlide = 1;
					$sliderContainer.css("margin-left", 0);
				}
			});
		}, imagePause);

	}

	function stopSlider() {
		clearInterval(interval);
	}

	// onmouse over to pause or stop 
	// resume on mouse leave 
	
	$slider.on("mouseenter", stopSlider).on("mouseleave", startSlider);	
	startSlider();

});


// jQuery Ajax Tutorial #1 - Using AJAX & API's (jQuery Tutorial #7)
//this is to consume API		

		
// GET api - old script
/*
$(function () {		

	var $apiData = $('#apiData');		
		
	$.ajax({		
		type: "GET",		
		url: "http://rest.learncode.academy/api/zabala/friends",
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


$(function() {

	var $friendsList = $("#friendsList");

	$.ajax({
		type: "GET",
		url: "http://rest.learncode.academy/api/zabala/friends",
		success: function(friends) {
			$.each(friends, function(i, friend) {
				$friendsList.append("<li>Name: " + friend.name + ", Age: "+ friend.age +"</li>")
			})
		}
	})

});

































