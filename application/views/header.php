<?=doctype('html5')."\n"; ?>
<?=html('lang="'.config('lang_abbr').'"', '', false)?>
<head>
<?
echo favicon('favicon');
echo meta();
echo css('default', FALSE);
echo css('page', FALSE, "data-type='page' data-namespace='".$namespace."'");
// title
echo title(variable($meta_title, 'Welcome').' | vea.re – visionary design');
?>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
</head>
<?
if( mobile() == true && ipad() != true)
{ 
	$class = ' class="mobile portrait loaded-mobile"';
}
elseif( ipad() == true )
{
	$class = ' class="tablet loaded-tablet"';
}
else
{
	$class = ' class="hovers screen nav-wide"';
}
?>
<body<?=$class?>> 
	<div id="body">
	<!-- .(mobile() == true ? 'mobile ' : '').(ipad() == true ? 'tablet' : '') -->
	<!--+++++++++++++++++++++++++ sidebar +++++++++++++++++++++++++-->
	<div id="sidebar" class="<?=variable($sidebar_class)?>">
		<!-- logo -->
		<a href="<?=base_url()?>en/contact/" id="logo" class="ajax-link">
			<div class="logo-inner logo-small veare-sprite">
				<div class="logo-img">
					<img src="<?=base_url(TRUE)?>layout/veare-icons.png" alt="veare - visionary design" />
				</div>
			</div>
		</a>
		<!-- main menu -->
		<?=$menu['main']?>
		<!-- follow nav -->
		<div id="sidebar_bottom">
			<ul id="follow_nav">
				<li class="item"><a class="hover-button twitter" href="https://twitter.com/#!/vearenet" target="_blank"><span class="icon-small twitter"></span></a></li>
				<li class="item"><a class="hover-button dribbble" href="http://dribbble.com/lukasoppermann" target="_blank"><span class="icon-small dribbble"></span></a></li>
				<li class="item"><a class="hover-button xing" href="https://www.xing.com/profile/Lukas_Oppermann" target="_blank"><span class="icon-small xing"></span></a></li>
				<li class="item"><a class="hover-button linkedin" href="https://www.linkedin.com/in/lukasoppermann" target="_blank"><span class="icon-small linkedin"></span></a></li>
			</ul>
			<div class="language en disabled">
				<div class="label open_sans_bold">Sprache</div>
				<div class="lang-switch open_sans_bold"><span class="lang-label lang-en">ENG</span><span class="circle"></span><span class="lang-label lang-de">DEU</span></div>
			</div>
		</div>
	</div>
	<!--+++++++++++++++++++++++++ sidebar end +++++++++++++++++++++++++-->
	<div class="wrapper">
		<div class="left-column-wrapper">
			<div id="stage">
				<div class="loading">
					<div class="loading-box">
						<div class="loading-bar">
							<div class="loading-circle"></div>
						</div>
					</div>
				</div>
				<div class="current-page page">