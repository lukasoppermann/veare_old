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
<link href='http://fonts.googleapis.com/css?family=Bree+Serif|Open+Sans:400,300' rel='stylesheet' type='text/css'>
</head>
<body <?="id='".variable($body_id)."'"; ?><?=" class='".variable($body_class)."'"; ?>>
	<!-- line -->
	<div id="line">
		<div id="grey_line"></div>
		<div id="orange_line"></div>
		<span class="lines-text" id="line_text_veare">veare</span>
		<span class="lines-text" id="line_text_two">Interaction</span>
		<span class="lines-text" id="line_text_three">Design</span>
	</div>
	<!-- line end -->
	<div id="wrapper">
			<div id="sidebar">
				<a href="<?=base_url()?>en/blog/" id="logo">
					<div class="hidden logo-big">
						<img src="<?=base_url()?>/media/layout/veare-icons.png" alt="veare - visionary design" />
					</div>
					<div class="hidden visible logo-small">
						<img src="<?=base_url()?>/media/layout/logo_small.png" alt="veare - visionary design" />
					</div>
				</a>
				<?=$menu['main']?>
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
		<div id="stage">
		
