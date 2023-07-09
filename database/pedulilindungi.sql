-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 09 Jul 2023 pada 08.36
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pedulilindungi`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `checkin`
--

CREATE TABLE `checkin` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `Nama` varchar(255) NOT NULL,
  `Nik` varchar(16) NOT NULL,
  `Nomor_paspor` varchar(16) NOT NULL,
  `tanggal` datetime NOT NULL,
  `lokasi` varchar(255) NOT NULL,
  `total_keramaian` int(11) NOT NULL,
  `places_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `riwayat_perjalanan`
--

CREATE TABLE `riwayat_perjalanan` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `Nama` varchar(255) NOT NULL,
  `Nik` varchar(16) NOT NULL,
  `Nomor_paspor` varchar(255) NOT NULL,
  `checkin` varchar(255) NOT NULL,
  `lokasi` varchar(255) NOT NULL,
  `checkout` varchar(255) NOT NULL,
  `lama_perjalanan` varchar(255) NOT NULL,
  `latitude` varchar(255) NOT NULL,
  `longitude` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `Id_user` int(11) NOT NULL,
  `Nama` varchar(50) NOT NULL,
  `Sandi` varchar(255) NOT NULL,
  `Nik` varchar(16) NOT NULL,
  `No_hp` varchar(15) NOT NULL,
  `Kewarganegaraan` varchar(20) NOT NULL,
  `Tanggal_lahir` date NOT NULL,
  `Nomor_paspor` varchar(16) NOT NULL,
  `Negara` varchar(255) NOT NULL,
  `Photo_profile` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `users_status`
--

CREATE TABLE `users_status` (
  `Id` int(11) NOT NULL,
  `Nama` varchar(50) NOT NULL,
  `Nik` varchar(16) NOT NULL,
  `Nomor_paspor` varchar(16) NOT NULL,
  `Status_kesehatan` varchar(15) NOT NULL,
  `Status_vaksinasi` varchar(15) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `checkin`
--
ALTER TABLE `checkin`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

--
-- Indeks untuk tabel `riwayat_perjalanan`
--
ALTER TABLE `riwayat_perjalanan`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`Id_user`);

--
-- Indeks untuk tabel `users_status`
--
ALTER TABLE `users_status`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `id_user` (`id_user`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `checkin`
--
ALTER TABLE `checkin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=116;

--
-- AUTO_INCREMENT untuk tabel `riwayat_perjalanan`
--
ALTER TABLE `riwayat_perjalanan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=99;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `Id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=111;

--
-- AUTO_INCREMENT untuk tabel `users_status`
--
ALTER TABLE `users_status`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `users_status`
--
ALTER TABLE `users_status`
  ADD CONSTRAINT `users_status_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`Id_user`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
