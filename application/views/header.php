<?=doctype('html5')."\n"; ?>
<html lang="<?=config('lang_abbr')?>">
<head>
<?
echo favicon('favicon');
echo meta();
echo css('default', FALSE);
echo title('All variables for title are missing | Form&amp;System');
?>
</head>
<body<?=variable($body_id).variable($body_class); ?>>
	<div id="sidebar_box" class="closed">
		<div id="sidebar" style="width: 70px;">
			<a href="<?=base_url()?>en/blog/" id="logo">
				<div class="hidden logo-big">
					<img src="<?=base_url()?>/media/layout/logo.png" alt="veare - visionary design" />
				</div>
				<div class="visible logo-small">
					<img src="<?=base_url()?>/media/layout/logo_small.png" alt="veare - visionary design" />
				</div>
			</a>
			<ul id="nav">
				<!-- <li id="portfolio_link"><a href="portfolio.html">
						<span class="icon-container"><span class="icon portfolio"></span></span>
						<span class="text">Portfolio</span>
				</a></li> -->
				<li id="blog_link">
					<a href="<?=base_url()?>en/blog/">
					<span class="icon-container"><span class="icon blog"></span></span>
					<!-- <span class="text">Blog</span> -->
					</a>
				</li>
				<!-- <li id="about_link"><a href="about.html">
					<span class="icon-container"><span class="icon about"></span></span>
					<span class="text">About</span>
					</a></li>
				<li id="labs_link"><a href="labs.html">
					<span class="icon-container"><span class="icon labs"></span></span>
					<span class="text">Labs</span>
					</a></li>	 -->
				<li id="contact_link">
					<a href="<?=base_url()?>en/contact/">
					<span class="icon-container"><span class="icon mail"></span></span>
					<!-- <span class="text">Contact</span> -->
					</a>
				</li>				
			</ul>
			<div id="sidebar_bottom">
				<ul id="follow_nav" class="vertical" style="width: 50px; height: 120px; margin-left: 5px;">
					<li><a class="button first twitter" href="https://twitter.com/#!/vearenet" target="_blank"><span class="icon-small twitter"></span></a></li>
					<li><a class="button middle dribbble" href="http://dribbble.com/lukasoppermann" target="_blank"><span class="icon-small dribbble"></span></a></li>
					<li><a class="button middle xing" href="https://www.xing.com/profile/Lukas_Oppermann" target="_blank"><span class="icon-small xing"></span></a></li>
					<li><a class="button last mail" href="mailto:mail@veare.net" target="_blank"><span class="icon-small mail"></span></a></li>
				</ul>
			</div>
			<!-- <div id="sidebar_handle"></div> -->
		</div>
	</div>	
	<div id="stage">
		
