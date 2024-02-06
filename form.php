<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["nume"];
    $email = $_POST["email"];
    $message = $_POST["mesaj"];
    $to = "pamgirevents@gmai.com";
    $subject = "O noua cerere de la:$name";
    $headers = "De la: $email";
    $messageBody = "Nume: $name\nEmail: $email\nMesaj:\n$message";
    if (mail($to, $subject, $messageBody, $headers)) {
        echo "Multumim pentru formular, te vom contacta in curand!";
    } else {
        echo "Mailul nu s-a putut trimite, incearca mai tarziu!";
    }
}
?>