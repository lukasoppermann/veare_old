<a class="card animate-flip<?=variable($card_class,'',' ')?><?=(isset($filter) && !in_array($filter, explode(' ',$category)) ? ' faded' : '')?>" data-category="<?=variable($category)?>" data-permalink="<?=$permalink?>" href="<?=current_url().$permalink?>">
	<div class="front side <?=variable($color)?>">
		<img class="image" src="<?=base_url(TRUE).'media/'.variable($images['filename']).'.'.variable($images['ext'])?>">
		<?=variable($card)?>
	</div>
	<div class="back side align-left <?=variable($color)?>">
		<div class="content">
			<h2 class="bold headline"><?=$title?></h2>
			<p class="copy"><?=$excerpt?></p>
		</div>
	</div>
</a>