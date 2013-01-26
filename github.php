<?php echo `git pull origin master --force && git submodule update --init --recursive 2>&1`;
// remove chached files
// ----------------------
// get css all file names
$files = glob('libs/css/cache/*');
foreach($files as $file)
{ // iterate files
	if(is_file($file))
	{
		unlink($file); // delete file
	}
}
// ----------------------
// get js all file names
$files = glob('libs/js/cache/*');
foreach($files as $file)
{ // iterate files
	if(is_file($file))
	{
		unlink($file); // delete file
	}
}