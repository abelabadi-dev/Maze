/*
@abule
*/
$(function () {
	$('#start').on("click",function () {
		$('#maze .boundary').removeClass("youlose");
	});
	$('.boundary').mouseenter(function () {
		$('#maze .boundary').addClass("youlose");
		$('#status').html("<b>You lose!</b>");
	});
	$('#end').on("click",function () {
		$('#status').html("<b>You win!</b>");
	});
});