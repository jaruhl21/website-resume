<!DOCTYPE html>
<html>
<body>

<?php
	$to      = 'customers-subscribe@macavionics.com';
	$subject = '';
	$message = '';
	$headers = 'From:' . $_REQUEST["req-mail"];

	if(mail($to, $subject, $message, $headers))
	{
		echo "mail sent from " . $_REQUEST["req-mail"] . "!";
		echo $headers;
	} else {
		echo "NOT SENT";
	}
		
?>

</body>
</html>