<a class="card-flip" href="<?=base_url().'en/blog/'.$permalink?>">
	<div class="card front">	
			<div class="card-content">
				<div class="card-image">
					<img src="<?=base_url()?>/media/images/lined-paper-thumb.jpg" alt="test"/>
				</div>
				<h3 class="card-headline"><?=$title?></h3>
				<p class="card-text">
				<?=variable($excerpt)?></p>
			</div>
	</div>
	<div class="card back">
			<div class="card-back-title">
				Open<br /> Case
			</div>
			<div class="card-content">
				<h3 class="card-headline"><?=$title?></h3>
			</div>
			<div class="card-arrow"></div>
	</div>
</a>