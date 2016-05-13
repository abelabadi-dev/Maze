/*
@abule
*/
var maze = (function () {

	function init() {
		//won = false;
		status("Click the \"S\" to begin.");
		$('#start').on("click",start);
	}
	function start() {
		//played
		//if (played === true) {
			$('#maze .boundary').removeClass("youlose");
		//}
		//you lose!
		$('#maze').on('mouseenter','.boundary',function () {
			
				$('#maze .boundary').addClass("youlose");
				status("<b>You lose!</b>");
				played = true;
				$('#end').off('click');
				setTimeout(init,1500);
		});
		$('#maze').on('mouseleave',function () {
				$('#end').off('click');
				status("<b>out of maze</b>")
				setTimeout(init,1500);
		});
		//you win!
		$('#end').on("click",function () {
			won = true;
			status("<b>You win!</b>");
			$('#maze').off("mouseenter");
			setTimeout(init,2000);
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







