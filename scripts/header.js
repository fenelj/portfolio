$("#head_1").css({'opacity': "1"});

var showPrev = 3;
var showCurr = 1;
var showNext = 2;
var playPause = true;

var slider = setInterval(player, 4000);

$('#playPause').click(function() {
    if ( playPause ) {
		$('#playPauseButton').html("<i class=\"fa fa-play fa-1x\"></i>");
		clearInterval( slider );
		playPause = false;
    } else {
		$('#playPauseButton').html("<i class=\"fa fa-pause fa-1g\"></i>");
		slider = setInterval(player, 5000);
		playPause = true;
    }
    
});

function player () {
	$("#head_" + showCurr).attr('style', 'none');
	$("#head_" + showNext).css({'opacity': "1"});
	
	showPrev = (showPrev === 3)? 1: showPrev + 1;
	showCurr = (showCurr === 3)? 1: showCurr + 1;
	showNext = (showNext === 3)? 1: showNext + 1;
}