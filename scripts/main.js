// javaScript

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