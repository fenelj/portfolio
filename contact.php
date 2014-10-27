<!DOCTYPE html>

<?php
  $to = "feneljoseph@knights.ucf.edu";
  $emailSent = $name = $from = $subject = $message = "";
  $nameErr = $fromErr = $subjectErr = $messageErr = "";
  $allClear = true;
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST["name"])) { 
      $allClear = false;
      $nameErrClass = "class='error'";
      $nameErr = "<div class='alert alert-error'><i class='icon-remove'></i> Not a valid name</div>"; 
    } elseif (!preg_match("/^[a-zA-Z ]*$/",$_POST["name"])) { 
        $allClear = false;
        $nameErr = "<div class='alert alert-error'><i class='icon-remove'></i> Only letters and white space allowed</div>"; 
    } else { $name = cleanInput($_POST["name"]); }
    if (empty($_POST["email"])) { 
      $allClear = false;
      $fromErr = "<div class='alert alert-error'><i class='icon-remove'></i> You did not fill out your email address</div>"; 
    } elseif (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/",$_POST["email"])) { 
      $allClear = false;
      $fromErr = "<div class='alert alert-error'><i class='icon-remove'></i> Invalid email format</div>"; 
    } else { $from = cleanInput($_POST["email"]); }
    if (empty($_POST["subject"])) { 
      $allClear = false;
      $subjectErr = "<div class='alert alert-error'><i class='icon-remove'></i> Subject was empty or too short</div>"; 
    } else { $subject = 'Webmail: '.cleanInput($_POST["subject"]); }
    if (empty($_POST["message"])) { 
      $allClear = false;
      $messageErr = "<div class='alert alert-error'><i class='icon-remove'></i> Message was empty or too short</div>"; 
    } else { $message = cleanInput($_POST["message"]); }
    //if there are no error flags then send the email
    if ($allClear == true) {
      $headers = "From: ".$name." <".$from.">";
      mail($to,$subject,$message,$headers);
      $emailSent = "<div class='alert alert-success'><i class='icon-ok'></i> Message sent successfully! Thank you.</div>";
    }
  }
  //cleans up data to prevent naughty abuse
  function cleanInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }
?>

<?php echo $emailSent;?>

<form id="contact" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>#contact" method="post">
  <div class="row">
    <div class="col-md-6">
      <label for="name">Your Name</label><?php echo $nameErr;?>
      <input class="<?=(!empty($nameErr) ? ' error': '')?>" type="name" name="name" value="<?php if (isset($_POST['name'])){echo $_POST['name'];}?>" placeholder="First and last name" />
    </div>
    <div class="col-md-6">
      <label for="email">Your Email</label><?php echo $fromErr;?>
      <input class="<?=(!empty($fromErr) ? ' error': '')?>" type="email" name="email" value="<?php if(isset($_POST['email'])){echo $_POST['email'];}?>" placeholder="Email address" />
    </div>
  </div>
  <label for="subject">Email Subject</label><?php echo $subjectErr;?>
  <input class="<?=(!empty($subjectErr) ? ' error': '')?>" type="subject" name="subject" value="<?php if(isset($_POST['subject'])){echo $_POST['subject'];}?>" placeholder="Subject" />
  <label for="message">Message</label><?php echo $messageErr;?>
  <textarea class="<?=(!empty($messageErr) ? ' error': '')?>" name="message" rows="4" placeholder="Message"><?php if(isset($_POST['message'])){echo $_POST['message'];}?></textarea>
  <button type="submit" id="submit" class="btn">Submit</button>
</form>

<script type="text/javascript" src="scripts/contact.js"></script>