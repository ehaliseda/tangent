 <?php 
                    
if (isset ($_POST ['submit'])){ 

    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    // $name = $_POST['name'] . "\r\n";            
    $email = $_POST['email'] . "\r\n";
    $message = $_POST['message'] . "\r\n";
    // $body = 'Name: '.$name.' Email: '.$email.' Message: '.$message.'';
    $body = ' Email: '.$email.' Message: '.$message.'';
    $send= mail ('info@solucionesimpex.com', "Correo De OrganizaT",$body);
    // header('Location: index.html');
    echo "<script type='text/javascript'> document.location = 'http://www.organizat-cfdi.com/'; </script>";

        exit();

}

?>