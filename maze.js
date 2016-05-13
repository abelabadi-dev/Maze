/*
@abule
*/
var maze = (function () {
	var played = false;
	var won = false;
	var lost = false;

	function init() {
		won = false;
		status("Click the \"S\" to begin.");
		$('#start').on("click",start);
	}
	function start() {
		//played
		if (played === true) {
			$('#maze .boundary').removeClass("youlose");
		}
		//you lose!
		$('.boundary').mouseenter(function () {
			if (won == true){ // reset game after winning.
				location.reload();
			}else{
				$('#maze .boundary').addClass("youlose");
				status("<b>You lose!</b>");
				played = true;
			}
			
			//$(#end).on("click",init());
		});

		//you win!
		$('#end').on("click",function () {
			won = true;
			status("<b>You win!</b>");
			//init();
		});

	}
	function status(gameStatus) {
		$('#status').html(gameStatus);
	}
	return{
		init:init,
		start:start,
		status:status
	};
})();

$(function () {
	maze.init();
});







