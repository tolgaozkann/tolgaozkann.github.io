<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <main>
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="css/style.css">
            <title>PHP Form</title>
        </head>

        <body>
            <main>
                <?php if ($_SERVER['REQUEST_METHOD'] === 'GET') : ?>
                    <form action="<?php htmlspecialchars($_SERVER['PHP_SELF']) ?>" method="post" style="display:inline-block">
                        
                            From: <input type="number" name="from" placeholder="0" />
                            Currency: <select name="fromMoneys" >
                            <option value="USD">US Dollar</option>
                                <option value="CAD">Canadian Dollar</option>
                                <option value="EUR">Euro</option>
                            </select></br>
                            To: <input type="number" name="to" placeholder="0">
                            Currency:<select name="toMoneys" >
                                <option value="USD">US Dollar</option>
                                <option value="CAD">Canadian Dollar</option>
                                <option value="EUR">Euro</option>
                            </select></br>

                        <button style="" type="submit">Convert</button>

                    </form>
                <?php else : ?>

                    <?php
                    if (isset($_POST['from'], $_POST['to'],$_POST['toMoneys'],$_POST['fromMoneys'])) {
                        $usd_rates = array('1.36','0.91');//1 usd to cad-eur
                        $eur_rates = array('1.10','1.47');//1 eur to usd-cad
                        $cad_rates = array('0.67','0.74');//1 cad to eur-usd

                        $fromAmount = $_POST['from'];
                        $fromMoney = $_POST['fromMoneys'];
                        $toMoney = $_POST['toMoneys'];

                        if($fromMoney == 'USD')
                        {
                            if($toMoney == 'EUR')
                            {
                                $toAmount = floatval($fromAmount) * floatval($usd_rates[1]);
                            }
                            if($toMoney == 'USD')
                            {
                                $toAmount = floatval($fromAmount);
                            }
                            if($toMoney == 'CAD')
                            {
                                $toAmount = floatval($fromAmount) * floatval($usd_rates[0]);
                            }
                        }
                        if($fromMoney == 'EUR')
                        {
                            if($toMoney == 'EUR')
                            {
                                $toAmount = floatval($fromAmount);
                            }
                            if($toMoney == 'USD')
                            {
                                $toAmount = floatval($fromAmount) * floatval($eur_rates[0]);
                            }
                            if($toMoney == 'CAD')
                            {
                                $toAmount = floatval($fromAmount) * floatval($eur_rates[1]);    
                            }
                        } 
                        if($fromMoney == 'CAD')
                        {
                            if($toMoney == 'EUR')
                            {
                                $toAmount = floatval($fromAmount) * floatval($cad_rates[0]);
                            }
                            if($toMoney == 'USD')
                            {
                                $toAmount = floatval($fromAmount) * floatval($cad_rates[1]);
                            }
                            if($toMoney == 'CAD')
                            {
                                $toAmount = floatval($fromAmount);
                            }
                        }
                        echo "<form action='' method='post'>
                        
                        From: <input type='number' name='from' value='$fromAmount' />
                        Currency: <select name='fromMoneys' >
                        <option value='USD'>US Dollar</option>
                            <option value='CAD'>Canadian Dollar</option>
                            <option value='EUR'>Euro</option>
                        </select></br>
                        To: <input type='number' name='to' value='$toAmount'>
                        Currency:<select name='toMoneys' >
                            <option value='USD'>US Dollar</option>
                            <option value='CAD'>Canadian Dollar</option>
                            <option value='EUR'>Euro</option>
                        </select></br>

                    <button  type='submit'>Convert</button>
                </form>";
                    }

                    ?>

                <?php endif ?>
            </main>
        </body>

        </html>
    </main>
</body>

</html>