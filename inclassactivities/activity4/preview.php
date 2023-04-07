<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    //Define the fields as Not Provided
    $username = "User Name: Not Provided";
    $name = " Name: Not Provided";
    $password = "Password: Not Proived";
    $address = "Address: Not Provided";
    $zipcode = "Zip Code: Not Provided";
    $email = "Email: Not Provided";
    $sex = "Sex: Not Provided";
    $about = "About: Not Provided";
    $languages = array();//Trick: if the language is empty Not Provided will return.
    $country = "Country: Not Provided";
        if(empty($_GET['username']) == false)
        {
            $username = $_GET['username'];
        }
        if(empty($_GET['name']) == false)
        {
            $name = $_GET['name'];
        }
        if(empty($_GET['password']) == false)
        {
            $password = $_GET['password'];
        }
        if(empty($_GET['Address']) == false)
        {
            $address = $_GET['Address'];
        }
        if(empty($_GET['zipcode']) == false)
        {
            $zipcode = $_GET['zipcode'];
        }
        if(empty($_GET['email']) == false)
        {
            $email = $_GET['email'];
        }
        if(empty($_GET['countries']) == false)
        {
            $country = $_GET['countries'];
        }
        
        if(empty($_GET['sex']) == false)
        {
            $sex = $_GET['sex'];
        }
        if(empty($_GET['language']) == false)
        {
            //unset($languages[0]);//if the 
            for($i=0;$i<sizeof($_GET["language"]);$i++)
            {
                
                $languages[] = $_GET["language"][$i];
            }
        }
        if(empty($_GET['about']) == false)
        {
            $about = $_GET['about'];
        }

        echo "<h2>Preview</h2>\n
        \n
        $name. <br/>\n
        $username.<br/>\n
        $password.<br/>\n
        $address.<br/>\n
        $country.<br/>\n
        $zipcode.<br/>\n
        $email.<br/>\n
        ";
        for($i=0;$i<sizeof($languages);$i++)
        {
            echo $languages[$i]. "<br/>\n";
        }
        echo "$about"
    ?>
</body>
</html>