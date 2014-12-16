$("#titleHomeIcon").hide();

var winHeight = $(window).height();
var winWidth = $(window).width();

var c = ", ";

var increment1 = [0, 1, 2, 3, 4, 5, 6];
var increment2 = [0, 1, 2, 3, 4, 5, 6];
var intVal1;
var intVal2;
var element1;
var element2;
var preLevel = 0

$("#header").attr('style', "height: " + (winHeight - 55) + "px; width: " + winWidth + "px;");
$('#content_bio').attr('style', "min-height: " + (winHeight - 155) + "px;");
$('#content_work').attr('style', "min-height: " + (winHeight - 155) + "px;");
$('#content_contact').attr('style', "min-height: " + (winHeight - 280) + "px;");

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

// detects when window has loaded
$(window).on('load', function () {
	var currURL = document.URL;

	if ( endsWith(currURL, '#bio') ) {
		setTimeout( function () {
			scrollTo("2");
		}, 500);
	} else if ( endsWith(currURL, '#work') ) {
		setTimeout( function () {
			scrollTo("3");
		}, 500);
	} else if ( endsWith(currURL, '#contact') ) {
		setTimeout( function () {
			scrollTo("4");
		}, 500);
	}
});

// detects window scrolling
$(window).on('scroll', function () {
	pageAdjust( $(this).scrollTop() );

	adjustImage( $(this).scrollTop() + 75 );

});

// detects window resize
$(window).on('resize', function () {
	winHeight = $(window).height();
	winWidth = $(window).width();

	$("#header").attr('style', "height: " + (winHeight - 55) + "px; width: " + winWidth + "px;");
	$('#content_bio').attr('style', "min-height: " + (winHeight - 170) + "px;");
	$('#content_work').attr('style', "min-height: " + (winHeight - 170) + "px;");
	$('#content_contact').attr('style', "min-height: " + (winHeight - 280) + "px;");
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

// shows home icon
$("#navBar_title").mouseenter(function () {

	$("#titleHomeIcon").fadeIn();

});

// starts colorWheel2
$(".navBar_tab_item").mouseenter(function () {

	element2 = $(this).find("div");

	intVal2 = setInterval(colorWheel2, 50);
});

// starts colorWheel1
$("#content_bio_title").mouseenter(function () {
	element1 = $("#titleDecor");

	intVal1 = setInterval(colorWheel1, 50);
})

// hides home icon
$("#navBar_title").mouseleave(function () {

	$("#titleHomeIcon").fadeOut();

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

// stops colorWheel1
$("#content_bio_title").mouseleave(function () {
	clearInterval( intVal1 );

	// $(element1).attr('style', 'none');
})

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

// $('form').on('submit', function() {
// 	event.preventDefault();
// });

function adjustImage (POP) {
	var width;

	var contentBio = $("#content_bio").offset().top;
	var contentWork = $("#content_work").offset().top + 50;
	var contentContact = $("#content_contact").offset().top + 50;

	if ( POP <= contentBio ) {
		$("#content_bio_right_pic").attr('style','');
	
	} else if ( POP > contentBio && POP < contentWork ) {
		width = $('#content_bio_right_pic').width();
		$("#content_bio_right_pic").attr('style',"position: fixed; top: 100px; width: " + width + "px; height: auto;");
	
	} else if ( POP > contentWork && POP < contentContact ) {
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

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

function pageAdjust (position) {
	var i, j, k;
	var tabs = $("#navBar_tab").find("li");
	height = (winHeight > 768)? winHeight: 768;

	var styling = "background: #282828; -moz-box-shadow: inset 0 0 25px rgba(0,0,0,0.5); -webkit-box-shadow: inset 0 0 25px rgba(0,0,0,0.5); max-height: 175px; min-height: 100px; box-shadow: inset 0 0 25px rgba(0,0,0,0.5); color: #FFF; margin: 0; position: relative; text-align: center; width: 100%; "

	if ( position > 0 &&  (position - ($("#content_bio_title").offset().top)) < 0 ) {
		var addHeight = Math.floor( ($("#content_bio_title").offset().top/position - 1)*35 );

		if ( (addHeight + 100) < 175 ) {
			$("#content_bio_title").attr('style', styling + "height: " + (100 + addHeight) + "px; line-height: " + (115 + addHeight) + "px; top: 5px;");
		} else {
			$("#content_bio_title").attr('style', styling + "height: 175px; line-height: 175px; top: 5px;");
		}
	}

	if ( position > 0 &&  (position - ($("#content_work_title").offset().top)) < 0 ) {
		var addHeight = Math.floor( (($("#content_work_title").offset().top - $(window).height())/(position - $(window).height()) - 1)*35 );

		if ( (addHeight + 100) < 175 ) {
			$("#content_work_title").attr('style', styling + "height: " + (100 + addHeight) + "px; line-height: " + (115 + addHeight) + "px;");
		} else {
			$("#content_work_title").attr('style', styling + "height: 175px; line-height: 175px;");
		}
	}

	if ( position > 0 &&  (position - ($("#content_contact_title").offset().top)) < 0 ) {
		var addHeight = Math.floor( (($("#content_contact_title").offset().top - $(window).height()*2)/(position - $(window).height()*2) - 1)*35 );

		if ( (addHeight + 100) < 175 ) {
			$("#content_contact_title").attr('style', styling + "height: " + (100 + addHeight) + "px; line-height: " + (115 + addHeight) + "px;");
		} else {
			$("#content_contact_title").attr('style', styling + "height: 175px; line-height: 175px;");
		}
	}

	if ( position < ($("#content_bio").offset().top - 350) ) {

		window.location.replace('#bio');

		for (i = 0; i < tabs.length; i++) {
			$(tabs[i]).attr('view',"false");
			$(tabs[i]).find("div").attr('style', 'none');
		}

	} else if ( position < ($("#content_work").offset().top - 350) ) {

		window.location.replace('#work');

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

		window.location.replace('#bio');

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
	var displacement;
	var lag

	displacement = preLevel - level;

	if (displacement < -2 || displacement > 2) {
		lag = 2;
	} else {
		lag = 1;
	}

	switch (level) {
		case "1":
			preLevel = level;
			$("html, body").animate({ scrollTop: 0 }, 1000*lag);
			break;

		case "2":
			preLevel = level;
			position = $("#content_bio_title").offset().top;
			$("html, body").animate({ scrollTop: (position - 55) }, 1000*lag);
			break;

		case "3":
			preLevel = level;
			position = $("#content_work_title").offset().top;
			$("html, body").animate({ scrollTop: (position - 55) }, 1000*lag);
			break;

		case "4":
			preLevel = level;
			position = $("#content_contact_title").offset().top;
			$("html, body").animate({ scrollTop: (position - 55) }, 1000*lag);
			break;

		default:
			break;
	}
}


