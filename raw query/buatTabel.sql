CREATE TABLE nsw_potong_kuota5.td_header (
	id_header serial NOT NULL,
	status_dokumen varchar(1) NULL,
	fl_status varchar(5) NULL,
	kd_jns_dokumen int4 NULL,
	kd_jns_dokumen_final int4 NULL,
    jns_skbppn varchar(10) NULL,
	jns_pengajuan varchar(10) NULL,
	no_pengajuan varchar(100) NULL,
	upload_by varchar(1) NULL,
	kd_perijinan varchar(7) NULL,
	kd_jns_perijinan varchar(2) NULL,
	no_perijinan varchar(100) NULL,
	tgl_perijinan date NULL,
	tgl_awal_perijinan date NULL,
	tgl_akhir_perijinan date NULL,
	wk_pengiriman timestamptz NULL,
	kd_ga varchar(2) NULL,
	kd_tipe_trader varchar(5) NULL,
	kd_jns_id varchar(1) NULL,
	npwp varchar(20) NULL,
	nib varchar(20) NULL,
	nama varchar(200) NULL,
	alamat varchar(300) NULL,
	kd_pos int4 NULL,
	kd_kota varchar(3) NULL,
	kd_propinsi varchar(2) NULL,
	kd_negara varchar(2) NULL,
	telp varchar(70) NULL,
	fax varchar(35) NULL,
	email varchar(100) NULL,
	url_doc varchar(1000) NULL,
	CONSTRAINT td_header_pkey PRIMARY KEY (id_header)
);
CREATE TABLE nsw_potong_kuota5.td_komoditi (
	id_header int4 NOT NULL,
	id_kuota int4 NULL,
	id_komoditi serial NOT NULL,
	seri int4 NULL,
	kd_hs varchar(10) NULL,
    asal_barang varchar(10) NULL,
	flag_perubahan varchar(1) NULL,
	kd_jns_satuan varchar(5) NULL,
	bm float8 NULL,
	ppn float8 NULL,
	uraian varchar(1000) NULL,
	nilai_total_barang float8 NULL,
	flag_sub_komoditi varchar(1) NULL,
	CONSTRAINT td_komoditi_pkey PRIMARY KEY (id_komoditi)
);
CREATE TABLE nsw_potong_kuota5.td_subkomoditi (
	id_komoditi int4 NOT NULL,
	id_kuota int4 NULL,
	id_subkomoditi serial NOT NULL,
	serial int4 NULL,
	kd_hs varchar(10) NULL,
	uraian varchar(1000) NULL,
	kd_jns_satuan varchar(5) NULL,
	CONSTRAINT td_subkomoditi_pkey PRIMARY KEY (id_subkomoditi)
);
CREATE TABLE nsw_potong_kuota5.td_kuota (
	id_kuota serial NOT NULL,
	jml_kuota float8 NULL,
	jml_terpakai float8 NULL,
	jml_sisa float8 NULL,
	CONSTRAINT td_kuota_pkey PRIMARY KEY (id_kuota)
);
CREATE TABLE nsw_potong_kuota5.td_kendalikuota (
	id_kendali_kuota serial NOT NULL,
	id_kuota int4 NOT NULL,
	jumlah float8 NULL,
	CONSTRAINT td_kendalikuota_pkey PRIMARY KEY (id_kendali_kuota)
);
CREATE TABLE nsw_potong_kuota5.td_realisasi (
	id_komoditi int4 NULL,
	id_subkomoditi int4 NULL,
	id_kendali_kuota int4 NULL,
	id_realisasi serial NOT NULL,
	seri_perijinan varchar(2) NULL,
	kd_jns_dokumen varchar(1) NULL,
	no_car varchar(50) NULL,
	no_dokumen varchar(50) NULL,
	tgl_dokumen date NULL,
	npwp varchar(20) NULL,
	nama_perusahaan varchar(200) NULL,
    kd_kppbc varchar(6) NULL,
    kd_kpp varchar(6) NULL,
	seri_barang int4 NULL,
	kd_hs varchar(15) NULL,
	uraian varchar(1000) NULL,
    tgl_spb date NULL,
    kd_negara varchar(2) NULL,
    kd_pel_bongkar varchar(5) NULL,
	jml_satuan float8 NULL,
	kd_jns_satuan varchar(5) NULL,
	CONSTRAINT td_realisasi_pkey PRIMARY KEY (id_realisasi)
);
CREATE TABLE nsw_potong_kuota5.td_referensi (
	id_header int4 NOT NULL,
	id_referensi serial NOT NULL,
	kd_jns_dokumen varchar(1) NULL,
	no_dokumen varchar(100) NULL,
	tgl_dokumen date NULL,
	url_dokumen varchar(100) NULL,
	kd_ga varchar NULL,
	CONSTRAINT td_referensi_pkey PRIMARY KEY (id_referensi)
);
CREATE TABLE nsw_potong_kuota5.td_headernegara (
	id_header int4 NOT NULL,
	id_header_negara serial NOT NULL,
	kd_negara varchar(2) NULL,
	kd_jns_kegiatan int4 NULL,
	CONSTRAINT td_negara_pkey PRIMARY KEY (id_header_negara)
);
CREATE TABLE nsw_potong_kuota5.td_headerpelabuhan (
	id_header int4 NOT NULL,
	id_header_pelabuhan serial NOT NULL,
	kd_pelabuhan varchar(5) NULL,
	kd_jns_kegiatan int4 NULL,
	CONSTRAINT td_pelabuhan_pkey PRIMARY KEY (id_header_pelabuhan)
);
CREATE TABLE nsw_potong_kuota5.td_komoditinegara (
	id_komoditi int4 NOT NULL,
	id_komoditi_negara serial NOT NULL,
	kd_negara varchar(2) NULL,
	kd_jns_kegiatan int4 NULL,
	CONSTRAINT td_komoditinegara_pkey PRIMARY KEY (id_komoditi_negara)
);
CREATE TABLE nsw_potong_kuota5.td_komoditipelabuhan (
	id_komoditi int4 NOT NULL,
	id_komoditi_pelabuhan serial NOT NULL,
	kd_pelabuhan varchar(5) NULL,
	kd_jns_kegiatan int4 NULL,
	CONSTRAINT td_komoditipelabuhan_pkey PRIMARY KEY (id_komoditi_pelabuhan)
);
ALTER TABLE nsw_potong_kuota5.td_komoditi ADD CONSTRAINT td_komoditi_idheader_fkey FOREIGN KEY (id_header) REFERENCES nsw_potong_kuota5.td_header(id_header);
ALTER TABLE nsw_potong_kuota5.td_komoditi ADD CONSTRAINT td_komoditi_idkuota_fkey FOREIGN KEY (id_kuota) REFERENCES nsw_potong_kuota5.td_kuota(id_kuota);
ALTER TABLE nsw_potong_kuota5.td_subkomoditi ADD CONSTRAINT td_subkomoditi_idkuota_fkey FOREIGN KEY (id_kuota) REFERENCES nsw_potong_kuota5.td_kuota(id_kuota);
ALTER TABLE nsw_potong_kuota5.td_subkomoditi ADD CONSTRAINT td_subkomoditi_idkomoditi_fkey FOREIGN KEY (id_komoditi) REFERENCES nsw_potong_kuota5.td_komoditi(id_komoditi);
ALTER TABLE nsw_potong_kuota5.td_kendalikuota ADD CONSTRAINT td_kendalikuota_idkuota_fkey FOREIGN KEY (id_kuota) REFERENCES nsw_potong_kuota5.td_kuota(id_kuota);
ALTER TABLE nsw_potong_kuota5.td_realisasi ADD CONSTRAINT td_realisasi_idkomoditi_fkey FOREIGN KEY (id_komoditi) REFERENCES nsw_potong_kuota5.td_komoditi(id_komoditi);
ALTER TABLE nsw_potong_kuota5.td_realisasi ADD CONSTRAINT td_realisasi_idsubkomoditi_fkey FOREIGN KEY (id_subkomoditi) REFERENCES nsw_potong_kuota5.td_subkomoditi(id_subkomoditi);
ALTER TABLE nsw_potong_kuota5.td_realisasi ADD CONSTRAINT td_realisasi_idkendalikuota_fkey FOREIGN KEY (id_kendali_kuota) REFERENCES nsw_potong_kuota5.td_kendalikuota(id_kendali_kuota);
ALTER TABLE nsw_potong_kuota5.td_referensi ADD CONSTRAINT td_referensi_idheader_fkey FOREIGN KEY (id_header) REFERENCES nsw_potong_kuota5.td_header(id_header);
ALTER TABLE nsw_potong_kuota5.td_komoditinegara ADD CONSTRAINT td_komoditinegara_idkomoditi FOREIGN KEY (id_komoditi) REFERENCES nsw_potong_kuota5.td_komoditi(id_komoditi);
ALTER TABLE nsw_potong_kuota5.td_komoditipelabuhan ADD  CONSTRAINT td_komoditipelabuhan_idkomoditi FOREIGN KEY (id_komoditi) REFERENCES nsw_potong_kuota5.td_komoditi(id_komoditi);
ALTER TABLE nsw_potong_kuota5.td_headernegara ADD  CONSTRAINT td_headernegara_idheader FOREIGN KEY (id_header) REFERENCES nsw_potong_kuota5.td_header(id_header);
ALTER TABLE nsw_potong_kuota5.td_headerpelabuhan ADD  CONSTRAINT td_headerpelabuhan_idheader FOREIGN KEY (id_header) REFERENCES nsw_potong_kuota5.td_header(id_header);