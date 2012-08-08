<?php			
	if( $this->config->compression('compression','html') == TRUE && ENVIRONMENT != 'development')
	{
		ob_start("ob_gzhandler");
		header("cache-control: must-revalidate");
		header("expires: ".gmdate('D, d M Y H:i:s', time() + $this->config->compression('expire','html'))." GMT");
	}
	else
	{
		header("cache-control: must-revalidate");
	}
?>
<?=doctype('html5')."\n"; ?>
<?=html('lang="'.config('lang_abbr').'"', '', false)?>
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
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
</head>
<body <?="id='".variable($body_id)."'"; ?><?=" class='mobile ".variable($body_class)."'"; ?>>
	<!--+++++++++++++++++++++++++ sidebar +++++++++++++++++++++++++-->
	<div id="sidebar" class="<?=variable($sidebar_class)?>">
		<!-- logo -->
		<a href="<?=base_url()?>en/contact/" id="logo">
			<div class="logo-inner logo-small">
				<div class="logo-img">
					<img src="<?=base_url()?>/media/layout/veare-icons.png" alt="veare - visionary design" />
				</div>
			</div>
		</a>
		<!-- main menu -->
		<?=$menu['main']?>
	</div>		
	<!--+++++++++++++++++++++++++ sidebar end +++++++++++++++++++++++++-->
	<div id="stage">
		<?=$page; ?>
	</div>
	<div id="footer">
		<ul class="follow-nav">
			<li class="item"><a class="link twitter" href="https://twitter.com/#!/vearenet" target="_blank"><span class="icon-small twitter"></span></a></li>
			<li class="item"><a class="link dribbble" href="http://dribbble.com/lukasoppermann" target="_blank"><span class="icon-small dribbble"></span></a></li>
			<li class="item"><a class="link xing" href="https://www.xing.com/profile/Lukas_Oppermann" target="_blank"><span class="icon-small xing"></span></a></li>
			<li class="item"><a class="link mail" href="mailto:mail@veare.net" target="_blank"><span class="icon-small mail"></span></a></li>
		</ul>
	</div>
<? echo js('default', FALSE); ?>
</body>
</html>