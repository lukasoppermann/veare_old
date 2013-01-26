<?php echo `git pull origin master --force && git submodule update --init --recursive 2>&1`;
// fetch payload data
$payload = json_decode($_POST['payload']);
echo'<pre>';print_r($payload);echo'</pre>';
$ourFileName = "testFile.txt";
$ourFileHandle = fopen("{$payload}", 'w') or die("can't open file");
fclose($ourFileHandle);
if( stristr($payload->commits->message,'-cache') !== FALSE )
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