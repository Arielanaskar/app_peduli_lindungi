<?php

require 'function.php';

if (!isset($_SESSION["login"])) {
    header("Location: login_form.php");
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="CSS/lokasi.css">
    <link rel="icon" href="img/logo.ico" type="image/icon type">
    <title>Document</title>
</head>

<body>
    <div class="container">
        <div class="title">
            <h1>Lokasi Vaksinasi Covid-19</h1>
            <h1>SE-JABODEBEK</h1>
        </div>
        <div class="selected">
            <div class="select-box">
                <select name="format" id="format">
                    <option>DEPOK</option>
                    <option>JAKARTA</option>
                    <option>BOGOR</option>
                    <option>BEKASI</option>
                </select>
            </div>
            <div class="jenis-box">
                <h4>Jenis Vaksin Yang dicari (Optional)</h4>
                <div class="btn-box">
                    <button class="btn">Astrazeneca</button>
                    <button class="btn">Pfizer</button>
                    <button class="btn">Sinovac</button>
                    <button class="btn">Moderna</button>
                    <button class="btn">Sinophram</button>
                </div>
            </div>
            <div class="text-box">
                <p>
                    1. Jenis vaksin akan tampil sesuai ketersediaan 2 minggu terakhir. <br>
                    2. Hubungi faskes terdekat untuk memastikan ketersediaan vaksin primer dan booster. <br>
                    3. Jenis vaksin booster akan diberikan sesuai ketersediaan dan riwayat vaksinasi primer. <br>
                </p>
                <div>
                    <button type="submit" class="gila">Cari Lokasi</button>
                </div>
            </div>
        </div>
    </div>
</body>

</html>