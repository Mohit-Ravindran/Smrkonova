<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $contact_number = $_POST["contact_number"];
    $message = $_POST["message"];

    $to = "Support@smrkonova.com";
    $subject = "New Form Submission from $name";
    $headers = "From: $email";

    $mailBody = "Name: $name\n";
    $mailBody .= "Email: $email\n";
    $mailBody .= "Contact Number: $contact_number\n\n";
    $mailBody .= "Message:\n$message";

    mail($to, $subject, $mailBody, $headers);
    
    // Redirect to a thank you page or display a thank you message.
    header("Location: thank-you.html");
    exit();

    $success = mail($to, $subject, $mailBody, $headers);

    if ($success) {
        header("Location: thank-you.html");
        exit();
    } else {
        echo "Error sending email. Check your server configuration.";
    }
}
