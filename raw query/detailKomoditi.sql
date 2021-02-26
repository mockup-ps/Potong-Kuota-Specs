-- getAllKomoditi --
-- Kalau flag_sub_komoditinya false, status kuota diambil dari jml sisa
SELECT *
FROM td_komoditi
INNER JOIN td_kuota ON td_komoditi.id_kuota = td_kuota.id_kuota
WHERE td_komoditi.id_header = yyyy
-- Kalau flag_sub_komoditinya true, status kuota dikosongkan
SELECT *
FROM td_komoditi
WHERE td_komoditi.id_header = yyyy

-- getKomoditiDetail --
-- Kalau flag_sub_komoditinya false
SELECT *
FROM td_komoditi
INNER JOIN td_kuota ON td_komoditi.id_kuota = td_kuota.id_kuota
WHERE id_komoditi = xxxx
-- Kalau flag_sub_komoditinya true
SELECT *
FROM td_komoditi
WHERE id_komoditi = xxxx

-- getKomoditiPelabuhan --
SELECT *
FROM td_komoditipelabuhan
WHERE id_komoditi = xxxx

-- getKomoditiNegara --
SELECT *
FROM td_komoditinegara
WHERE id_komoditi = xxxx

-- getSubkomoditi --
SELECT *
FROM td_subkomoditi
INNER JOIN td_kuota ON td_kuota.id_kuota = td_kuota.id_kuota
WHERE id_komoditi = xxxx