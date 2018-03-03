<?php
  header('Content-type: application/json');

  require_once('admin/config.php');

  if(isset($_POST['coupon'])){


    $code = $_POST['coupon'];

    $sql = "SELECT * FROM coupon";

    $result = $mysqli->query($sql);

    $valid = false;

    while($row = $result->fetch_assoc()){

      if(strtolower($code) === strtolower($row['code'])){

        $valid = true;

      }

    }

    echo json_encode($valid);




  }

 ?>
