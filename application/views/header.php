<?=doctype('html5')."\n"; ?>
<html lang="<?=config('lang_abbr')?>">
<head>
<?
echo favicon('favicon');
echo meta();
echo css('default', TRUE);
echo title(variable($meta_title, 'Welcome').' | vea.re – visionary design');
if( variable($css) != null )
{
	echo '<style type="text/css" media="screen">'.$css."</style>";
}
?>
</head>
<body <?="id='".variable($body_id)."'"; ?><?=" class='".variable($body_class)."'"; ?>>
	<!--+++++++++++++++++++++++++ sidebar +++++++++++++++++++++++++-->
	<div id="sidebar" class="<?=variable($sidebar_class)?>">
		<!-- logo -->
		<a href="<?=base_url()?>en/portfolio/" id="logo">
			<div class="logo-inner logo-small">
				<div class="logo-img">
					<img src="<?=base_url()?>/media/layout/veare-icons.png" alt="veare - visionary design" />
				</div>
			</div>
		</a>
		<!-- main menu -->
		<?=$menu['main']?>
		<!-- follow nav -->
		<div id="sidebar_bottom">
			<ul id="follow_nav">
				<li><a class="hover-button first twitter" href="https://twitter.com/#!/vearenet" target="_blank"><span class="icon-small twitter"></span></a></li>
				<li><a class="hover-button middle dribbble" href="http://dribbble.com/lukasoppermann" target="_blank"><span class="icon-small dribbble"></span></a></li>
				<li><a class="hover-button middle xing" href="https://www.xing.com/profile/Lukas_Oppermann" target="_blank"><span class="icon-small xing"></span></a></li>
				<li><a class="hover-button last mail" href="mailto:mail@veare.net" target="_blank"><span class="icon-small mail"></span></a></li>
			</ul>
		</div>
	</div>		
	<!--+++++++++++++++++++++++++ sidebar end +++++++++++++++++++++++++-->
	<div id="stage">