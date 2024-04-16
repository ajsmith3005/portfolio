<?php
session_start();

/* Namespace alias. */
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

/* Include the Composer generated autoload.php file. */
require './vendor/autoload.php';

/* Check if form was submitted to access this page */
if ( $_SERVER[ 'REQUEST_METHOD' ] != 'POST' ) {
    $_SESSION[ 'submission-status' ] = "not-submitted";
    header( "Location: ./index.php#contact" );
}

$validate = array( 
    "errors"    => false,
    "name"      => true,
    "email"     => true,
    "message"   => true,
    "hcaptcha" => true
);

/* hcaptcha backend validation */

$data = array(
    'secret' => "ES_3a3a584ddf6742f2851add6d236cb06b",
    'response' => $_POST['h-captcha-response']
);

$verify = curl_init();
curl_setopt($verify, CURLOPT_URL, "https://hcaptcha.com/siteverify");
curl_setopt($verify, CURLOPT_POST, true);
curl_setopt($verify, CURLOPT_POSTFIELDS, http_build_query($data));
curl_setopt($verify, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($verify);
$responseData = json_decode($response);
if($responseData->success) {
// allow to proceed
// $validate[ 'errors' ] = true;
// $validate[ 'hcaptcha' ] = false;
// $_SESSION[ 'validate' ] = $validate;
// $_SESSION[ 'submission-status' ] = "not-submitted";
// header( "Location: ./index.php#contact" );
} 
else {
// return error to user; they did not pass
$validate[ 'errors' ] = true;
$validate[ 'hcaptcha' ] = false;
$_SESSION[ 'validate' ] = $validate;
$_SESSION[ 'submission-status' ] = "not-submitted";
header( "Location: ./index.php#contact" );
}

/* Create a new PHPMailer object. Passing TRUE to the constructor enables exceptions. */
$mail = new PHPMailer( TRUE );

/* Sanitize data from the POST array */
function trim_value( $value ) {
    return trim( $value );
}

function clean(  $value  ) {
    $value = trim( $value );
    $value = htmlspecialchars( $value );
    return $value;
}

$_POST = array_map( 'clean', $_POST );

/* Create variables to grab form information */
$name    = $_POST[ 'name' ];
$email   = $_POST[ 'email' ];
$message = $_POST[ 'message' ];

$_SESSION[ 'submit-vals' ] = array(
    "name"    => $name,
    "email"   => $email,
    "message" => $message
);

if ( $name == "" || $email == "" || validateEmail( $email ) == false || $message == "" || $validate[ 'errors' ] == true) {

    $validate[ "errors" ] = true;

    if( $name == "" ){
        $validate[ "name" ] = false;
    }

    if( $email == "" || validateEmail( $email ) == false ){
        $validate[ "email" ] = false;
    }

    if( $message == "" ){
        $validate[ "message" ] = false;
    }

    $_SESSION[ 'validate' ] = $validate;
    $_SESSION[ 'submission-status' ] = "not-submitted";
    header( "Location: ./index.php#contact" );
}
else {
    /* Open the try/catch block. */
    try {
        /* Set the mail sender. */
       $mail->setFrom( 'rpsmailer@gmail.com', 'RPS Mailer' );
       /* Add a recipient. */
       $mail->addAddress( 'ajsmith3005@gmail.com', 'Andy' );
       /* Set the subject. */
       $mail->Subject = 'Client message';
       /* Set the mail message body. */
       $mail->Body = "<table><tr><td>Name: </td><td>" . $name . "</td></tr><tr><td>Email: </td><td>" . $email . "</td></tr></table><br><p>" . $message . "</p>";
       /* Use SMTP. */
       $mail->isSMTP();
       /* format email as HTML */
       $mail->isHTML( true );
       /* Google ( Gmail ) SMTP server. */
       $mail->Host = 'smtp.gmail.com';
       /* SMTP port. */
       $mail->Port = 587;
       /* Set authentication. */
       $mail->SMTPAuth = true;
       $mail->SMTPSecure = 'tls';
       $mail->Username = 'rpsmailer@gmail.com';
       $mail->Password = 'tgtigjemyhbkufkt';

       /* Finally send the mail. */
       $mail->send();
    }
    catch ( Exception $e )
    {
       /* PHPMailer exception. */
       echo $e->errorMessage();
    }
    catch ( \Exception $e )
    {
       /* PHP exception ( note the backslash to select the global namespace Exception class ). */
       echo $e->getMessage();
    }
    
    $_SESSION[ 'submission-status' ] = "submitted";
    unset($_POST);
    header( "Location: ./index.php#contact" );
}

function validateEmail( $email ) {
    if ( !filter_var( $email, FILTER_VALIDATE_EMAIL )) {
        return false;
    } 
    else {
        return true;
    }
}