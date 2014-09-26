var winHeight = $(window).height();
var winWidth = $(window).width();

var c = ", ";

var increment1 = [0, 1, 2, 3, 4, 5, 6];
var increment2 = [0, 1, 2, 3, 4, 5, 6];
var intVal1;
var intVal2;
var element1;
var element2;

$("#header").attr('style', "height: " + (winHeight - 30) + "px; width: " + winWidth + "px;");
$('#content_bio').attr('style', "min-height: " + (winHeight - 75) + "px;");
$('#content_more').attr('style', "min-height: " + (winHeight - 75) + "px;");
$('#content_contact').attr('style', "min-height: " + (winHeight - 165) + "px;");

var cwChoices = [["#fff100", "#ffd400", "#fcb514", "#f7951d", "#f37520", "#f15423", "#ee1d25", "#ee1c2e", "#ee1a3b",
			"#ed1749", "#ed145b", "#ec0a70", "#ec008c", "#91268f", "#92268f", "#732b90", "#5d2d91", "#463092",
			"#2e3092", "#223f99", "#014ea2", "#005ead", "#0072bc", "#0093d8", "#00adef", "#00abc1", "#00a99d",
			"#00a782", "#00a66d", "#00a65d", "#00a550", "#07ad4c", "#54b948", "#81c341", "#a5cd38", "#c5d92d"],
			["#ed1749", "#ed145b", "#ec0a70", "#ec008c", "#91268f", "#92268f", "#732b90", "#5d2d91", "#463092",
			"#2e3092", "#223f99", "#014ea2", "#005ead", "#0072bc", "#0093d8", "#00adef", "#00abc1", "#00a99d",
			"#00a782", "#00a66d", "#00a65d", "#00a550", "#07ad4c", "#54b948", "#81c341", "#a5cd38", "#c5d92d",
			"#fff100", "#ffd400", "#fcb514", "#f7951d", "#f37520", "#f15423", "#ee1d25", "#ee1c2e", "#ee1a3b"],
			["#2e3092", "#223f99", "#014ea2", "#005ead", "#0072bc", "#0093d8", "#00adef", "#00abc1", "#00a99d",
			"#00a782", "#00a66d", "#00a65d", "#00a550", "#07ad4c", "#54b948", "#81c341", "#a5cd38", "#c5d92d",
			"#fff100", "#ffd400", "#fcb514", "#f7951d", "#f37520", "#f15423", "#ee1d25", "#ee1c2e", "#ee1a3b",
			"#ed1749", "#ed145b", "#ec0a70", "#ec008c", "#91268f", "#92268f", "#732b90", "#5d2d91", "#463092"],
			["#00a782", "#00a66d", "#00a65d", "#00a550", "#07ad4c", "#54b948", "#81c341", "#a5cd38", "#c5d92d",
			"#fff100", "#ffd400", "#fcb514", "#f7951d", "#f37520", "#f15423", "#ee1d25", "#ee1c2e", "#ee1a3b",
			"#ed1749", "#ed145b", "#ec0a70", "#ec008c", "#91268f", "#92268f", "#732b90", "#5d2d91", "#463092",
			"#2e3092", "#223f99", "#014ea2", "#005ead", "#0072bc", "#0093d8", "#00adef", "#00abc1", "#00a99d"]];

var cw = cwChoices[Math.floor(Math.random() * 4)];

$("#titleDecor").css({'background-image':"linear-gradient(to right, " + cw[increment1[0]] + c + cw[increment1[1]] + c + cw[increment1[2]] + c + cw[increment1[3]] + c + cw[increment1[4]] + c + cw[increment1[5]] + c + cw[increment1[6]]});
$("#titleDecor").css({'background-image':"-webkit-linear-gradient(to right, " + cw[increment1[0]] + c + cw[increment1[1]] + c + cw[increment1[2]] + c + cw[increment1[3]] + c + cw[increment1[4]] + c + cw[increment1[5]] + c + cw[increment1[6]]});
$("#titleDecor").css({'background-image':"-o-linear-gradient(to right, " + cw[increment1[0]] + c + cw[increment1[1]] + c + cw[increment1[2]] + c + cw[increment1[3]] + c + cw[increment1[4]] + c + cw[increment1[5]] + c + cw[increment1[6]]});
$("#titleDecor").css({'background-image':"-moz-linear-gradient(to right, " + cw[increment1[0]] + c + cw[increment1[1]] + c + cw[increment1[2]] + c + cw[increment1[3]] + c + cw[increment1[4]] + c + cw[increment1[5]] + c + cw[increment1[6]]});

// detects window resize
$(window).on('resize', function () {
	winHeight = $(window).height();
	winWidth = $(window).width();

	$("#header").attr('style', "height: " + (winHeight - 30) + "px; width: " + winWidth + "px;");
	$('#content_bio').attr('style', "min-height: " + (winHeight - 75) + "px;");
	$('#content_more').attr('style', "min-height: " + (winHeight - 75) + "px;");
	$('#content_contact').attr('style', "min-height: " + (winHeight - 165) + "px;");
});

// removes styling from quote button when modal is closed
$(".modalClose").on('click', function () {

	$("#navBar_quote").find("div").attr('style','none');
	$("#navBar_quote").attr('view', "false");
});

// starts colorWheel1
$("#navBar_title").mouseenter(function () {

	element1 = $("#titleDecor");

	intVal1 = setInterval(colorWheel1, 50);
});

// starts colorWheel2
$(".navBar_tab_item").mouseenter(function () {

	element2 = $(this).find("div");

	intVal2 = setInterval(colorWheel2, 50);
});

// stops colorWheel1
$("#navBar_title").mouseleave(function () {

	clearInterval( intVal1 );

	// $(element1).attr('style', 'none');

});

// stops colorWheel2
$(".navBar_tab_item").mouseleave(function () {

	clearInterval( intVal2 );

	if ( $(this).attr('view') === "false" ) {
		$(element2).attr('style', 'none');
	} else {
		$(element2).css({'background':'#282828'});
	}
});

$("#navBar_title").on('click', function () {
	window.location.replace('../');
});

$(".navBar_tab_item").on('click', function () {
	if ( $(this).attr('view') === "true" ) {
		return;
	}

	if ( $(this).attr('value') === "5" ) {

		$(this).find("div").css({'background':'#282828'});
		$(this).attr('view',"true");

		return;
	}

	window.location.replace('../');
});

function colorWheel1 () {
	$(element1).css({'background-image':"linear-gradient(to right, " + cw[increment1[0]] + c + cw[increment1[1]] + c + cw[increment1[2]] + c + cw[increment1[3]] + c + cw[increment1[4]] + c + cw[increment1[5]] + c + cw[increment1[6]]});
	$(element1).css({'background-image':"-webkit-linear-gradient(to right, " + cw[increment1[0]] + c + cw[increment1[1]] + c + cw[increment1[2]] + c + cw[increment1[3]] + c + cw[increment1[4]] + c + cw[increment1[5]] + c + cw[increment1[6]]});
	$(element1).css({'background-image':"-o-linear-gradient(to right, " + cw[increment1[0]] + c + cw[increment1[1]] + c + cw[increment1[2]] + c + cw[increment1[3]] + c + cw[increment1[4]] + c + cw[increment1[5]] + c + cw[increment1[6]]});
	$(element1).css({'background-image':"-moz-linear-gradient(to right, " + cw[increment1[0]] + c + cw[increment1[1]] + c + cw[increment1[2]] + c + cw[increment1[3]] + c + cw[increment1[4]] + c + cw[increment1[5]] + c + cw[increment1[6]]});
	
	for (var i = 0; i < 7; i++) {
		if (increment1[i] == 35) {
			increment1[i] = 0;
		} else {
			increment1[i]++;
		}
	}
}

function colorWheel2 () {
	$(element2).css({'background':"linear-gradient(to right, " + cw[increment2[0]] + c + cw[increment2[1]] + c + cw[increment2[2]] + c + cw[increment2[3]] + c + cw[increment2[4]] + c + cw[increment2[5]] + c + cw[increment2[6]]});
	$(element2).css({'background':"-webkit-linear-gradient(to right, " + cw[increment2[0]] + c + cw[increment2[1]] + c + cw[increment2[2]] + c + cw[increment2[3]] + c + cw[increment2[4]] + c + cw[increment2[5]] + c + cw[increment2[6]]});
	$(element2).css({'background':"-o-linear-gradient(to right, " + cw[increment2[0]] + c + cw[increment2[1]] + c + cw[increment2[2]] + c + cw[increment2[3]] + c + cw[increment2[4]] + c + cw[increment2[5]] + c + cw[increment2[6]]});
	$(element2).css({'background':"-moz-linear-gradient(to right, " + cw[increment2[0]] + c + cw[increment2[1]] + c + cw[increment2[2]] + c + cw[increment2[3]] + c + cw[increment2[4]] + c + cw[increment2[5]] + c + cw[increment2[6]]});
	
	for (var i = 0; i < 7; i++) {
		if (increment2[i] == 35) {
			increment2[i] = 0;
		} else {
			increment2[i]++;
		}
	}
}


