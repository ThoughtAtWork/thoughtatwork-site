<?php

require_once "config.php";


function query( $array )
{
	global $mysqli;
	$query = "SELECT `trans_num`, `timestamp`, `refID`, `first`, `last`, `address`, `city`, `state`, `zipcode`, `email`, `phone`, `university`, `title`, `dietary`, `interpreterNeeded`, `amount` FROM `registrations` WHERE `refID` != ''";
	return $mysqli->query( $query );
}

?>

<html lang="en">

<head>
	<title>Thought at Work Registration Admin</title>

	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

</head>

<body>

<div id="page">
	<div id="header"></div>

	<div id="content">


		<p>Download CSV:
        <a href="report.php">Complete Listing</a><br />
        </p>


<?
	$results = query( array() );

	if( mysqli_num_rows( $results ) == 0 ) {
?>

<?
	} else {
		// Generate CSV File #1
		$myFile = "report.csv";
		$fh = fopen($myFile, 'w') or die("Can't open file");
		fwrite($fh, "Transaction Number, Timestamp, Reference ID, First Name, Last Name, Address, City, State, Zipcode, Email, Phone, University, Title, Dietary, Interpreter Requested, Amount\n");


		$i = 0;
		while( $row = mysqli_fetch_array( $results, MYSQL_ASSOC ) ) {

			foreach( $row as $field => $value ) {

				 if( $field == "timestamp" ) {

					// Play with a copy of the string instead
					$string = $row[$field];

					// Use the space and colon to delimit the timestamp
					$pos = strpos($string," ");
					$pos2 = strpos($string,":");

					// Use it to find the hour
					$hour = substr($string,$pos,$pos2-strlen($string));

					// This is used to 'shift' the string over if the hour is greater than 12.
					// Since we're delimiting the string as 2 characters above (i.e 14:00), we need
					// to account for that when we bring the hour back down to one chatacter (i.e. 4:00)
					$shift = 0;

					// Append AM and PM accordingly
					$appendToEnd = "";
					if ($hour >= 12) {
						if ($hour != 12) {
							$hour = $hour - 12;
							$shift = 1;
						}
						$appendToEnd = " PM";
					} else {
						$appendToEnd = " AM";
					}

					// Final converted timestamp
					$row["timestamp"] = " " . substr($string,0,$pos+$shift) . $hour . substr($string,$pos2,strlen($string)) . $appendToEnd . " ";

					}
				 else {
					$row[$field] = stripslashes( $value );
					$row[$field] = str_replace('"', '""', $row[$field]);
					$row[$field] = str_replace(",", "\,", $row[$field]);
					$row[$field] = "\"" . $row[$field] . "\"";
				}
			}

      		//array_pop($row); //remove mailSent record from spreadsheet
			fwrite($fh, implode( $row, "," ) . "\n"); 

			$i++;
		}

		fclose($fh);
	}



?>
	</div>

	<div id="footer"></div>
</div>

</body>
</html>
