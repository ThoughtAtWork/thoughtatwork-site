<?php
header( "Content-type: text/csv" );
	header( "Content-disposition: attachment; filename=results.csv" );
	require( "report.csv" );


?>