	</div>
</div>
<!--+++++++++++++++++++++++++ sidebar +++++++++++++++++++++++++-->
<div id="sidebar" class="<?=variable($sidebar_class)?> regular">
	<!-- logo -->
	<a href="<?=base_url(TRUE)?>home" class="ajax-link" data-nav="#nav">
		<div class="logo">
			<img class="logo-img img-optimized" data-2x-src="<?=base_url(TRUE)?>layout/veare-icons@2x.png" data-orig-src="<?=base_url(TRUE)?>layout/veare-icons.png" src="" alt="veare design studio - visionary design" />
		</div>
	</a>
	<!-- main menu -->
	<?=$menu['main']?>
	<!-- follow nav -->
	<div id="sidebar_bottom">
		<ul id="follow_nav">
			<li class="item">
				<a class="hover-button twitter" href="https://twitter.com/#!/lukasoppermann" target="_blank">
					<span class="veare-sprite twitter"></span><div class="circle blue"></div>
				</a>
			</li>
			<li class="item">
				<a class="hover-button dribbble" href="http://dribbble.com/lukasoppermann" target="_blank">
					<span class="veare-sprite dribbble"></span><div class="circle pink"></div>
				</a>
			</li>
			<li class="item">
				<a class="hover-button xing" href="https://www.xing.com/profile/Lukas_Oppermann" target="_blank">
					<span class="veare-sprite xing"></span><div class="circle turquoise"></div>
				</a>
			</li>
			<li class="item">
				<a class="hover-button phone" href="https://twitter.com/#!/lukasoppermann" target="_blank">
					<span class="veare-sprite phone"></span><div class="circle light-orange"></div>
				</a>
			</li>
			<li class="item">
				<a class="hover-button mail" href="https://twitter.com/#!/lukasoppermann" target="_blank">
					<span class="mail veare-sprite"></span><div class="circle light-orange"></div>
				</a>
			</li>
		</ul>
	</div>
</div>
<?
	$this->fs_google->fonts(array('Source Sans Pro:400,600'), variable($fonts_callback));
?>
<? echo js('default', FALSE); ?>
<? echo js('page', FALSE); ?>
</body>
</html>
