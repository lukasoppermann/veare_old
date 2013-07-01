<?=doctype('html5')."\n"; ?>
<?=html('lang="'.config('lang_abbr').'"', '', false)?>
<head>
	<?
	echo favicon('favicon');
	echo meta();
	echo css('default', FALSE);
	echo css('page', false);
	// title 
	echo title('vea.re | '.variable($meta_title, 'welcome').' | visionary design', 'veare');
	?>
	<!--<script type="text/javascript" src="https://getfirebug.com/firebug-lite-debug.js"></script>-->
	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1,maximum-scale=1">
	<meta name="apple-mobile-web-app-capable" content="yes" />
</head>
<?
	if( mobile() == true && ipad() != true)
	{ 
		$class = ' class="mobile portrait loaded-mobile'.variable($body_class).'"';
	}
	elseif( ipad() == true )
	{
		$class = ' class="tablet loaded-tablet'.variable($body_class).'"';
	}
	else
	{
		$class = ' class="hovers screen'.variable($body_class).'"';
	}
?>
<body<?=$class?> data-page_class="<?=$body_class?>" id="html_body">
	<div id="menu_icon"><div class="veare-sprite"></div></div>
	<div id="body">
		<div id="header">
			<a href="<?=base_url(TRUE)?>home" id="logo" class="no-flicker ajax-link" data-nav="#nav">
				<img class="img-optimized" data-src-x2="<?=base_url(TRUE)?>layout/veare-icons@2x.png" data-src-x1="<?=base_url(TRUE)?>layout/veare-icons.png" alt="veare - visionary design, interface design, iOS, webdesign" />
			</a>
		</div>
		<div class="wrapper">