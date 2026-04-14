<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Read POST data from React fetch
$json = file_get_contents('php://input');
$data = json_decode($json, true);

if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($data)) {
    $name = htmlspecialchars(strip_tags(trim($data['name'] ?? '')));
    $email = filter_var(trim($data['email'] ?? ''), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(strip_tags(trim($data['message'] ?? '')));

    if (empty($name) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Invalid input."]);
        exit;
    }

    $to = "moh.ihsanarif@gmail.com"; // Replace with your actual email
    $subject = "New Contact Message from Portfolio";
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200);
        echo json_encode(["status" => "success", "message" => "Message sent."]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Failed to send email."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed."]);
}
?>
