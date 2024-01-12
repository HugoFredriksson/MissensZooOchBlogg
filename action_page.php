<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tack För Din Beställning!</title>
</head>
<body>
    Tack För Din Beställning! <?php echo $_POST["city"]; ?><br>
    En orderbekräftelse har skickats till din mejl. <?php echo $_POST["email"]; ?>
</body>
</html>