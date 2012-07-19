<a class="card-flip" data-tag="<?=implode(' ',$tags)?>" href="<?=base_url().'en/portfolio/'.$permalink?>">
	<div class="card front">	
			<div class="card-content">
				<div class="card-image">
					<img src="<?=base_url()?>media/images/<?=variable($image['filename']).'-thumb_240_230.'.variable($image['ext'])?>" alt="<?=$title?>"/>
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
			<div class="card-back-content">
				<h3 class="card-headline"><?=$title?></h3>
			</div>
			<div class="card-arrow"></div>
	</div>
</a>