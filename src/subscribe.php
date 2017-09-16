<?php
session_start();
if(isset($_POST['submit'])){
    $fname = $_POST['name'];
    $email = $_POST['email'];
    if(!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL) === false){
        // MailChimp API credentials
        $apiKey = '12d4356018939407e2c900e9c14fbb33-us16';
        $listID = '1871ee3a00';

        // MailChimp API URL
        $url = 'https://us16.api.mailchimp.com/3.0//lists/1871ee3a00/members';

        // member information
        $json = json_encode([
            'email_address' => $email,
            'status'        => 'subscribed',
            'merge_fields'  => [
                'FNAME'     => $fname
            ]
        ]);

        // send a HTTP POST request with curl
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_USERPWD, 'user:' . $apiKey);
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 10);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
        $result = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        // store the status message based on response code
        if ($httpCode == 200) {
            $_SESSION['msg'] =
              '<div id="subscribe-container" class="mt-4 d-flex justify-content-center">
                <p id="subscribe-status" class="p-3" style="color: #34A853">You have successfully subscribed to Weekly Web Apps.</p>
              </div>';
        } else {
            switch ($httpCode) {
                case 214:
                    $msg = 'You are already subscribed.';
                    break;
                default:
                    $msg = 'Some problem occurred, please try again.' . $httpCode;
                    break;
            }
            $_SESSION['msg'] =
              '<div id="subscribe-container" class="mt-4 d-flex justify-content-center">
                <p id="subscribe-status" class="p-3" style="color: #EA4335">'.$msg.'</p>
              </div>';
        }
    }else{
        $_SESSION['msg'] =
          '<div id="subscribe-container" class="mt-4 d-flex justify-content-center">
            <p id="subscribe-status" class="p-3" style="color: #EA4335">Please enter valid email address.</p>
          </div>';
    }
}
// redirect to homepage
header('location:index.php');
