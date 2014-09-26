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

// detects window scrolling
$(window).on('scroll', function () {
	pageAdjust( $(this).scrollTop() );

	adjustImage( $(this).scrollTop() + 75 );

});

// detects window resize
$(window).on('resize', function () {
	winHeight = $(window).height();
	winWidth = $(window).width();

	$("#header").attr('style', "height: " + (winHeight - 30) + "px; width: " + winWidth + "px;");
	$('#content_bio').attr('style', "min-height: " + (winHeight - 75) + "px;");
	$('#content_more').attr('style', "min-height: " + (winHeight - 75) + "px;");
	$('#content_contact').attr('style', "min-height: " + (winHeight - 165) + "px;");
});

// content_bio_expansion
$(".content_bio_expansion").on('click', function () {
	$(this).find("i").toggleClass('fa-plus-square-o fa-minus-square-o');

	var value = $(this).attr('value');

	$("#content_bio_expansion" + value + "_text").slideToggle('slow');
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

	var tabs = $("#navBar_tab").find("li");

	for (var i = 0; i < tabs.length; i++) {
		$(tabs[i]).attr('view',"false");
		$(tabs[i]).find("div").attr('style', 'none');
	}

	scrollTo("1");
});

$(".navBar_tab_item").on('click', function () {
	if ( $(this).attr('value') == "1" ) {
		window.location.replace('cv');
	}

	if ( $(this).attr('value') == "5" ) {

		$(this).find("div").css({'background':'#282828'});
		$(this).attr('view',"true");

		return;
	} else if ( $(this).attr('view') === "true" ) {
		scrollTo( $(this).attr('value') );
		return;
	}

	scrollTo( $(this).attr('value') );

	var tabs = $("#navBar_tab").find("li");

	for (var i = 0; i < tabs.length; i++) {
		$(tabs[i]).attr('view',"false");
		$(tabs[i]).find("div").attr('style', 'none');
	}


	$(this).find("div").css({'background':'#282828'});
	$(this).attr('view',"true");
});

function adjustImage (POP) {
	var width;

	var contentBio = $("#content_bio").offset().top + 50;
	var contentMore = $("#content_more").offset().top + 50;
	var contentContact = $("#content_contact").offset().top + 50;

	if ( POP <= contentBio ) {
		$("#content_bio_right_pic").attr('style','');
	
	} else if ( POP > contentBio && POP < contentMore ) {
		width = $('#content_bio_right_pic').width();
		console.log("width: " + width);
		$("#content_bio_right_pic").attr('style',"position: fixed; top: 120px; width: " + width + "px; height: auto; opacity: 1");
	
	} else if ( POP > contentMore && POP < contentContact ) {
		$("#content_bio_right_pic").attr('style','');
	
	} else {
		$("#content_bio_right_pic").attr('style','');
	}

}

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

function pageAdjust (position) {
	var i, j, k;
	var tabs = $("#navBar_tab").find("li");
	height = (winHeight > 768)? winHeight: 768;

	if ( position < ($("#content_bio").offset().top - 350) ) {
		for (i = 0; i < tabs.length; i++) {
			$(tabs[i]).attr('view',"false");
			$(tabs[i]).find("div").attr('style', 'none');
		}

	} else if ( position < ($("#content_more").offset().top - 350) ) {
		for (i = 0; i < tabs.length; i++) {
			$(tabs[i]).attr('view',"false");
			$(tabs[i]).find("div").attr('style', 'none');
		}

		for (j = 0; j < tabs.length; j++) {
			if ( $(tabs[j]).attr('value') == "2" ) {
				$(tabs[j]).find("div").css({'background':'#282828'});
				$(tabs[j]).attr('view',"true");
			}
		}

	} else if ( position < ($("#content_contact").offset().top - 350) ) {
		for (i = 0; i < tabs.length; i++) {
			$(tabs[i]).attr('view',"false");
			$(tabs[i]).find("div").attr('style', 'none');
		}

		for (j = 0; j < tabs.length; j++) {
			if ( $(tabs[j]).attr('value') == "3" ) {
				$(tabs[j]).find("div").css({'background':'#282828'});
				$(tabs[j]).attr('view',"true");
			}
		}
	} else {
		for (i = 0; i < tabs.length; i++) {
			$(tabs[i]).attr('view',"false");
			$(tabs[i]).find("div").attr('style', 'none');
		}

		for (j = 0; j < tabs.length; j++) {
			if ( $(tabs[j]).attr('value') == "4" ) {
				$(tabs[j]).find("div").css({'background':'#282828'});
				$(tabs[j]).attr('view',"true");
			}
		}
	}
}

function scrollTo (level) {
	var position;

	switch (level) {
		case "1":
			$("html, body").animate({ scrollTop: 0 }, 1000);
			break;

		case "2":
			position = $("#content_bio").offset().top;
			$("html, body").animate({ scrollTop: (position - 75) }, 1000);
			break;

		case "3":
			position = $("#content_more").offset().top;
			$("html, body").animate({ scrollTop: (position - 75) }, 1000);
			break;

		case "4":
			position = $("#content_contact").offset().top;
			$("html, body").animate({ scrollTop: (position - 75) }, 1000);
			break;

		default:
			break;
	}
}


