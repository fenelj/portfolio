<!DOCTYPE html>

<html lang="en">
	<head>
		<title>My Life In Color - Fenel Joseph</title>

		<link rel="stylesheet" media="(min-width: 1024px)" type="text/css" href="styling/stylesheet-desktop.css" />
		<link rel="stylesheet" media="(min-width: 840px; max-width: 1023px)" type="text/css" href="styling/stylesheet-desktop.css" />
		<link rel="stylesheet" media="(max-width: 839px)" type="text/css" href="styling/stylesheet-desktop.css" />

		<link rel="stylesheet" type="text/css" href="styling/bio.css" />

		<link rel="icon" type="ico" href="images/favicon.ico">

		<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
		
	</head>

	<body>
		
		<div id="navBar">

			<div>
				<div id="navBar_title">MyLife.<span id="titleDecor">inColor</span>(FJ)</div>
				
				<ul id="navBar_tab">
					<li class="navBar_tab_item" value="2" view="false">Bio
						<div></div>
					</li><!--
					--><li class="navBar_tab_item" value="3" view="false">More
						<div></div>
					</li><!--
					--><li class="navBar_tab_item" value="4" view="false">Contact
						<div></div>
					</li><!--
					--><li class="navBar_tab_item" value="1" view="false">CV
						<div></div>
					</li>
				</ul>

				<a id="navBar_quote" class="navBar_tab_item" href="#modalQuote" alt="Get A Quote" title="Get A Quote" value="5" view="false">
					<i class="fa fa-pencil-square-o fa-2x"></i>
					<div></div>
				</a>
			</div>
		</div>

		<div id="header">
			<?php include('header.html'); ?>
		</div>

		<div id="content">

			<div id="content_bio">
				<h2>BIO</h2>

				<div id="content_bio_right">
					<div>
						<img id="content_bio_right_pic" src="images/fenel.png" alt="Fenel Joseph" title="Fenel Joseph" />
					</div>
				</div>

				<div id="content_bio_left">
					<p>First off, I thank you for visiting my site. I&#39;ve created this site to log projects and
					 what&#39;s current in my life.</p>

					<h3>Who Am I?</h3>
					<p>I am a third-year undergraduate student matriculating at the University of Central Florida,
					 in Orlando, Fl, currently majoring in Computer Engineering as well as Electrical Engineering.
					 I intend to complete my undergraduate coursework (GRADUATE!!) by May 2016. </p> 

					<p>With all that I am learning while in school, I hope to contribute to this technology-enabled
					 world. How will I do this? Simple. Learn what it takes to surpass every obstacle as they come
					 along.. and then some.</p>

					<p>Thinking forward, after the spring of 2016 I hope to continue my education by working for a
					 company leading in innovation or by attending graduate school to further develop my talents.
					 I don&#39;t know my exact path because I believe that my steps are still being ordered. Nevertheless
					 I hope to make an impression on the world just as much as it has done to I.</p>

					<h3 id="content_bio_expansion1" class="content_bio_expansion" value="1">More&nbsp;&nbsp;<i class="fa fa-plus-square-o fa-1x"></i></h3>
					<div id="content_bio_expansion1_text">
						<p>Born in November of 1993, I&#39;m the second of three children. Growing up I always imagined myself
						 being a creator of the some sort. Much of my younger years I devoted to exploring my different career
						 options which went from pharmacist, then bridge builder, followed by architect, proceded by computer
						 programmer, finally to what I have come into realization now, I just like creating.</p>

						<p>"Creating what?", you may ask. Creating not just the next big thing big but rather things that
						 will improve people's lives.</p>

						<h3 id="content_bio_expansion2" class="content_bio_expansion" value="2">Even More&nbsp;&nbsp;<i class="fa fa-plus-square-o fa-1x"></i></h3>
						<div id="content_bio_expansion2_text">
							<p>So you&#39;re really interested, huh?</p>
							
							<p>I am an underachieving over-achiever trying to give my ideas to the world. My contributions,
							 trivial, because I believe more than anything  that what I am doing and what I can do, surely
							 surpasses what I have done. I hope to mold the minds of others with my mannerisms while I myself
							 be impressed by the marvels of my peers.</p>

							<p>I am an un-talented musician &amp; a music lover that has not quite developed an ear of my own.</p>

							<h3 id="content_bio_expansion3" class="content_bio_expansion" value="3">Even, Even More&nbsp;&nbsp;<i class="fa fa-plus-square-o fa-1x"></i></h3>
							<div id="content_bio_expansion3_text">
								<p>Still want more?!</p>
								
								<p>Go ahead and click <i class="fa fa-envelope-o fa-1x"></i> icon to the North-East region of the page to find out how to reach me,
								 or you can fill out the form and I&#39;ll get back to you. (Please don&#39;t SPAM me)</p>
								
								
							</div>
							
						</div>

					</div>

				</div>
			

			</div>

			<div id="content_more">
				<h2>MORE</h2>
				
				<div>
					<p>I plan to create a blog. Look out for that.</p>
				</div>
				
			</div>

			<div id="content_contact">
				<h2>CONTACT</h2>
				
				<div class="left">
					<p>Fill out the form below.</p>

					<form method="POST" name="ContactForm" action="scripts/contact-form-handler.php"> 
						<p>
							<label for='name'>Name:</label> <br>
							<input type="text" name="name">
						</p>
						<p>
							<label for='email'>Email Address:</label> <br>
							<input type="text" name="email"> <br>
						</p>
						<p>
							<label for='message'>Message:</label> <br>
							<textarea name="message"></textarea>
						</p>

						<input type="submit" value="Submit"><br>
					</form>

					<script language="JavaScript" type="text/javascript" src="scripts/gen_validatorv31.js">

						var frmvalidator  = new Validator("ContactForm");
						frmvalidator.addValidation("name","req","Please provide your name");
						frmvalidator.addValidation("email","req","Please provide your email");
						frmvalidator.addValidation("email","email","Please enter a valid email address");

					</script>
				</div>

				<div class="right">
				    
				</div>
				
			</div>

		</div>

		<?php include('footer.html'); ?>

		<div id = "modalQuote" class = "modal">

			<div>
			<a href="#close" class="modalClose" alt="Close" title="Close" class="modalClose">X</a>	
				<div>
					Hi
				</div>
			</div>
		</div>

		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
		<!--<script src="styling/jquery.min.js"></script>-->
		<script type="text/javascript" src="scripts/index.js"></script>
		<script type="text/javascript" src="scripts/gen_validatorv31.js"></script>
		
	</body>


</html>