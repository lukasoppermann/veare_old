<?php echo `git pull origin master --force && git submodule update --init --recursive 2>&1`;
// fetch payload data
$payload = json_decode($_REQUEST['payload']);
// Log the payload object
file_put_contents('logs/github.txt', print_r($payload, TRUE), FILE_APPEND);
// find last commit 
foreach($payload->commits as $commits)
{
	if( $commits['id'] == $payload->after ){
		$commit = $commits;
	}
}

if( stristr($commit->message,'-cache') != FALSE )
{
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
}