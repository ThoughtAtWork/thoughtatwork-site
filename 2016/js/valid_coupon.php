<?php
  //header('Content-type: application/json');
  echo "this is a test";
  require_once('admin/config.php');

  if(!isset($_POST['coupon'])){

    echo json_encode('true');

  }else{

    $code = $_POST['coupon'];

    $selectQuery = "SELECT * FROM `coupon` WHERE code = ?";

    $stmt = $mysqli->prepare($selectQuery);
    $stmt->bind_param("s", $code);
    $stmt->execute();

    if($stmt->num_rows == 1){

      echo json_encode('true');

    }else{ echo json_encode('false');}


  }

 ?>
