-- Bagian ini digunakan untuk mendaftarkan kuota komoditi pada tabel kuota
WITH kuota AS (
	insert into nsw_potong_kuota5.td_kuota (jml_kuota,jml_terpakai,jml_sisa)
	values (50,0,50)
	returning id_kuota
),
-- jika ada kuota subkomoditi, kuota dari subkomoditi juga didaftarkan di tabel kuota
    kuotasubkomoditi AS(
    insert into nsw_potong_kuota5.td_kuota (jml_kuota, jml_terpakai, jml_sisa)
    values (40,0,40)
    returning id_kuota
),
-- jika ada kuota subkomoditi, maka kuota dari subkomoditi juga didaftarkan di tabel kendali kuota
    kendalikuotasubkomoditi AS(
    insert into nsw_potong_kuota5.td_kendalikuota (id_kuota, jumlah)
    select id_kuota, 40
    from kuotasubkomoditi
    returning id_kendali_kuota
),
-- Bagian ini digunakan untuk mendaftarkan kuota komoditi pada tabel kendali kuota
	kendalikuota AS(
	insert into nsw_potong_kuota5.td_kendalikuota (id_kuota,jumlah)
	select id_kuota, 50
	from kuota
	returning id_kendali_kuota	
),
-- Bagian ini digunakan untuk membuat header perijinan
	header AS(
	insert into nsw_potong_kuota5.td_header (nama)
	values ('Taufiq')
	returning id_header
),
-- Bagian ini digunakan untuk membuat komoditi dengan relasi ke header dan kuota
    komoditi AS(
	insert into nsw_potong_kuota5.td_komoditi(id_header, id_kuota)
	select id_header, id_kuota from header, kuota
    returning id_komoditi
),
-- Jika perijinan memiliki kuota subkomoditi, maka dibuatkan juga row pada tabel subkomoditi dengan relasi ke komoditi dan kuota
    subkomoditi AS(
    insert into nsw_potong_kuota5.td_subkomoditi(id_komoditi, id_kuota)
    select id_komoditi, id_kuota from komoditi, kuotasubkomoditi
    returning id_subkomoditi
),
-- Bagian ini untuk mengisi referensi negara, pelabuhan, dan dokumen
    komoditinegara AS(
    insert into nsw_potong_kuota5.td_komoditinegara(id_komoditi, kd_negara)
    select id_komoditi, 'US'
    from komoditi
),
    komoditipelabuhan AS(
    insert into nsw_potong_kuota5.td_komoditipelabuhan(id_komoditi, kd_pelabuhan)
    select id_komoditi, 'USTPP'
    from komoditi
),
    headernegara AS(
    insert into nsw_potong_kuota5.td_headernegara(id_header, kd_negara)
    select id_header, 'US'
    from header
),
    referensi AS(
    insert into nsw_potong_kuota5.td_referensi(id_header)
    select id_header
    from header
)
    insert into nsw_potong_kuota5.td_headerpelabuhan(id_header, kd_pelabuhan)
    select id_header, 'USTPP'
    from header