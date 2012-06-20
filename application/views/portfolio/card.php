<div class="card-flip">
	<div class="card front">
		<a href="<?=base_url().'en/blog/'.$permalink?>">
			<div class="card-content">
				<div class="card-img">
					<img src="" alt="test"/>
				</div>
				<h3 class="card-headline"><?=$title?></h3>
				<p class="card-text"><?=variable($excerpt)?></p>
			</div>
		</a>
	</div>
	<div class="card back">
		<a href="<?=base_url().'en/blog/'.$permalink?>">
			<div class="card-content">
				<h3 class="card-headline"><?=$title?></h3>
			</div>
		</a>
	</div>
</div>