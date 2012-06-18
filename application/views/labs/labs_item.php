<div class="widget">
	<div class="widget-content">
		<a class="headline" href="<?=base_url().'en/blog/'.$permalink?>"><h3><?=$title?></h3></a>
		<!-- Teaser Content -->
		<p><?=variable($excerpt)?></p>
		<!-- Additional Options -->
	</div>
	<div class="tags"><?=show_tags($tags, 3)?></div>
</div>