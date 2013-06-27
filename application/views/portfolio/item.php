<article class="portfolio-item">
	
	<div class="stage <?=variable($color).' '.variable($stage['type'],'','type-')?> font-white<?=variable($stage['type']) != 'full' ? ' padding-top-wide padding-bottom-medium padding-sides-small' : '' ?>">
		<?=variable($stage_content)?>
	</div>
	
	
	<div class="columns max-width-1000 padding-top-small padding-sides-small">
		<div class="column column-two-two-one">
			<h2 class="medium-headline align-left <?=variable($color,'','font-')?> uppercase"><?=variable($title)?></h2>
			<div class="copy-small font-gray aside">
				<?
				// prepare roles
					$role = variable($role);
					if( is_array($role) )
					{
						$output = '<ul class="roles">';
						// loop through roles
						foreach( $role as $i => $r )
						{
							$role[$i] = strtolower($r);
							$output .= '<li class="role"><span class="tag-marker">#</span>'.$role[$i].'</li>';
						}
						// output roles
						echo $output.'</ul>';
					}
					elseif( isset($role) & $role != null )
					{
						echo '<span class="roles">'.$role.'</span><br />';
					}
					// created
					echo "<div class='created'>";
						// year 
						echo variable($year,'','<span class="year">','</span> ');
						// patner
						if( isset($team) && $team != null )
						{
							$output = "<div class='team'>with";
							foreach($team as $partner)
							{
								if( isset($partner['link']) )
								{
									$output .= ' <a class="link partner" rel="nofollow" target="_blank" href="'.prep_url($partner['link']).'">'.$partner['name'].variable($partner['role'],'',' (',')').'</a>,';
								}
								else
								{
									$output .= ' <span class="partner">'.$partner['name'].variable($partner['role'],'',' (',')').'</span>,';
								}
							}
							// output
							echo trim($output, ',')."</div>";
						}
					// close created
					echo "</div>";
					// link
					$preped_link = prep_url(variable($link));
					echo variable($preped_link,'','<a class="project-link link '.'hover-font-'.$color.'" rel="nofollow" target="_blank" href="','">').variable($link,'','','</a>');
					// tags
					if( isset($tags) && $tags != null )
					{
						$output = "<div class='tags'>";
						// loop through tags
						$tags = array_filter(array_map('trim',explode(',',$tags)));
						foreach($tags as $tag)
						{
							$tag = strtolower(trim($tag));
							// check if tag = role
							if( !is_array($role) || !in_array($tag, $role) )
							{
								$output .= '<a class="link tag" href="'.$tag.'"><span class="tag-marker">#</span>'.$tag.'</a>';
							}
						}
						// output
						echo trim($output, ',')."</div>";
					}
				?>
			</div>
			<a class="button <?=variable($color)?> <?=variable($color,'','hover-border-')?> <?=variable($color,'','hover-font-')?> font-white float-left margin-top-tiny" href="<?=base_url(TRUE)?>portfolio<?=variable($filter,'','/tag:')?>">&larr; return to overview</a>
		</div>
		<div class="column column-two">
			<div class="copy dark-gray"><?=variable($text)?></div>
		</div>
	</div>
	
</article>