<?php

$EmailFrom = "Beacon Food Forest Donations";
$EmailTo = "donate@beaconfoodforest.org";
$dName = Trim(stripslashes($_POST['donorname'])); 
$dEmail = Trim(stripslashes($_POST['email'])); 
$dType = Trim(stripslashes($_POST['dtype'])); 
$dDesc = Trim(stripslashes($_POST['donatedesc'])); 
$Subject = "<$dType> Donation!";

// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $dName;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $dEmail;
$Body .= "\n";
$Body .= "Donation Type: ";
$Body .= $dType;
$Body .= "\n";
$Body .= "Donation Description: ";
$Body .= $dDesc;
$Body .= "\n";

// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

// redirect to success page 
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=contactthanks.php\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
}
?>