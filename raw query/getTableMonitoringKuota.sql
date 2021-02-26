------ UNTUK MENGAMBIL DATA HEADER ------
SELECT id_header,kd_ga, kd_perijinan, no_perijinan, tgl_perijinan, npwp, nama, wk_pengiriman, fl_status, kd_jns_dokumen, kd_jns_dokumen_final
FROM td_header

------ UNTUK MENGETAHUI STATUS KUOTA DARI HEADER PERIJINAN ------
-- pertama kali ijin masuk, by default flag_sub_komoditi valuenya false 
-- Ketika subkomoditi direalisasikan, maka pada komoditi flag_sub_komoditi diganti menjadi true
-- Sehingga proses query untuk mendapat status kuota header menjadi seperti berikut:
-- 1. Pertama kita cek dulu id_komoditi mana yang flag subkomoditinya true/false
SELECT td_komoditi.id_komoditi, td_komoditi.flag_sub_komoditi
FROM td_header
INNER JOIN td_komoditi ON td_header.id_header = td_komoditi.id_header
WHERE td_header.id_header = xxxx
-- 2. For each id_komoditi yang subkomoditinya true, akan dilakukan query lanjutan sbb:
SELECT td_kuota.jml_sisa
FROM td_komoditi
INNER JOIN td_subkomoditi ON td_komoditi.id_komoditi = td_subkomoditi.id_komoditi
INNER JOIN td_kuota ON td_subkomoditi.id_kuota = td_kuota.id_kuota
WHERE td_komoditi.id_komoditi = vvvv
-- 3. For each id_komoditi yang subkomoditinya false, akan dilakukan query lanjutan sbb:
SELECT td_kuota.jml_sisa
FROM td_komoditi
INNER JOIN td_kuota ON td_komoditi.id_kuota = td_kuota.id_kuota
WHERE td_komoditi.id_komoditi = yyyy
-- 4. kemudian return dari kedua query lanjutan tersebut diconcat 
-- dan dilakukan pengecekan apakah ada item yang jml_sisanya > 0, jika ditemukan satu saja, 
-- maka status kuotanya untuk id_header tsb adalah tersedia. jika tidak ditemukan maka statusnya habis
