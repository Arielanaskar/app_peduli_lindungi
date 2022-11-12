<?php

require 'function.php';

if (!isset($_SESSION["login"])) {
    header("Location: login_form.php");
}

if (isset($_GET["vaksin"])) {
    var_dump($_GET["vaksin"]);
}

$id_login = $_SESSION["login"];
$users = query("SELECT * FROM users WHERE Id_user='$id_login'");
$users_riwayat = query("SELECT * FROM riwayat_perjalanan WHERE id_user='$id_login' AND NOT checkout='-'");
$Photo_profile = findRow("SELECT Photo_profile FROM users WHERE Id_user='$id_login'", "Photo_profile");
$data = query("SELECT * FROM checkin WHERE id_user='$id_login'");


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="CSS/lokasi.css">
    <link rel="icon" href="img/logo.ico" type="image/icon type">
    <title>Vaksinasi & Imunisasi</title>
</head>

<body onload="ambilLokasi();">
    <div class="container">
        <div class="navbar">
            <div class="logo">
                <div class="icon">

                </div>
                <h3>PeduliLindungi</h3>
            </div>
            <?php if (isset($_SESSION["login"])) : ?>
                <?php foreach ($users as $user) : ?>
                    <div class="account">
                        <div class="photo-profil">
                            <?php if (strlen($Photo_profile) > 1) : ?>
                                <div class="custom" style="background-image: url(img/user-pic/<?= $user["Photo_profile"] ?>);">

                                </div>
                            <?php else : ?>
                                <div class="default">
                                    <h4><?= substr($user["Nama"], 0, 1) ?></h4>
                                </div>
                            <?php endif; ?>
                        </div>
                        <?php if (strlen($user["Nama"]) >= 11) : ?>
                            <h3><?= substr($user["Nama"], 0, 11) ?>..</h3>
                            <img src="img/sort-down.png" class="dropdown" alt="" srcset="">
                        <?php else : ?>
                            <h3><?= $user["Nama"] ?></h3>
                            <img src="img/sort-down.png" class="dropdown" alt="" srcset="">
                        <?php endif; ?>
                        <div class="dropbtn">
                            <div class="dropdown-content">
                                <a href="account.php">
                                    <img src="img/login.png" alt="">
                                    Profil
                                </a>
                                <a href="logout.php">
                                    <img src="img/exit.png" alt="">
                                    Keluar
                                </a>
                            </div>
                        </div>
                    <?php endforeach; ?>
                <?php else : ?>
                    <div class="not_login">
                        <a href="login_form.php">Login</a>/
                        <a href="register_form.php">Register</a>
                    </div>
                <?php endif; ?>
            </div>
        </div>
        <div class="title">
            <h1>Lokasi Vaksinasi Covid-19</h1>
            <h1 id="county">DI DEPOK</h1>
        </div>
        <div class="selected">
            <h3>Temukan Fasilitas Kesehatan yang Melayani Vaksinasi COVID-19</h3>
            <div class="select-box">
                <select name="format" id="format" placeholder="cari kota yang anda pilih">
                    <option>DEPOK</option>
                    <option>JAKARTA</option>
                    <option>BOGOR</option>
                    <option>BEKASI</option>
                </select>
            </div>
            <form action="" method="get">
                <div class="jenis-box">
                    <h4>Jenis Vaksin Yang dicari (Optional)</h4>
                    <div class="btn-box">
                        <div class="input-box">
                            <label for="astra" class="btn" data-status="none">Astrazeneca</label>
                            <input type="checkbox" class="check" name="vaksin" id="astra" value="Astrazeneca">
                        </div>
                        <div class="input-box">
                            <label for="pfizer" class="btn" data-status="none">Pfizer</label>
                            <input type="checkbox" class="check" name="vaksin" id="pfizer" value="Pfizer">
                        </div>
                        <div class="input-box">
                            <label for="sinovac" class="btn" data-status="none">Sinovac</label>
                            <input type="checkbox" class="check" name="vaksin" id="sinovac" value="Sinovac">
                        </div>
                        <div class="input-box">
                            <label for="moderna" class="btn" data-status="none">Moderna</label>
                            <input type="checkbox" class="check" name="vaksin" id="moderna" value="Moderna">
                        </div>
                        <div class="input-box">
                            <label for="sinophram" class="btn" data-status="none">Sinophram</label>
                            <input type="checkbox" class="check" name="vaksin" id="sinophram" value="Sinophram">
                        </div>
                    </div>
                </div>
                <div class="text-box">
                    <p>
                        1. Jenis vaksin akan tampil sesuai ketersediaan 2 minggu terakhir. <br>
                        2. Hubungi faskes terdekat untuk memastikan ketersediaan vaksin primer dan booster. <br>
                        3. Jenis vaksin booster akan diberikan sesuai ketersediaan dan riwayat vaksinasi primer. <br>
                    </p>
                    <div>
                        <button type="submit" class="btn-submit">Cari Lokasi</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <script src="JS/lokasi.js"></script>
</body>

</html>