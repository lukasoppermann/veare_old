<article class="portfolio-item article open_sans">
	<div class="type column column-five whitespace <?=variable($category)?>"><?=(str_replace('-',' ',variable($category)))?></div>
	<?=variable($text)?>
	<div class="tags"><span class="icon tag"></span><?=show_tags($tags)?></div>	
</article>