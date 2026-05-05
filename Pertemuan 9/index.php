<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Dasar</title>
</head>
<body>
    <form method="post">
        Nama: <input type="text" name="nama">
        <input type="submit">
    </form>

    <?php 
    
    if (isset($_POST['nama'])) {
        $nama =  $_POST['nama'];
        echo "Nama anda: $nama";
    }
    
    ?>
</body>
</html>