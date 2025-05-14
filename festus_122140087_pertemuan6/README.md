# Pyramid Matakuliah API

Aplikasi sederhana untuk manajemen data matakuliah menggunakan framework Pyramid dan PostgreSQL.

## Instalasi & Menjalankan Server

```bash
git clone https://github.com/FestusMikhael/pemrograman_web_itera_122140087.git
cd pemrograman_web_itera_12214087/festus_122140087_pertemuan6
python -m venv venv
source venv/bin/activate  # Gunakan venv\Scripts\activate di Windows
pip install -e .
```

## Konfigurasi Database

Pastikan PostgreSQL aktif dan database sudah dibuat, misalnya:
```
Nama database: pyramid_mahasiswa
```

Edit file `development.ini`:
```ini
sqlalchemy.url = postgresql://username:password@localhost:5432/pyramid_mahasiswa
```

## Migrasi Database

```bash
alembic -c development.ini revision --autogenerate -m "create matakuliah table"
alembic -c development.ini upgrade head
```

## Jalankan Server

```bash
pserve development.ini --reload
```

Akses di browser:
http://127.0.0.1:6543

## Contoh Penggunaan API

```bash
# GET semua matakuliah
curl http://127.0.0.1:6543/matakuliah

# POST tambah matakuliah
curl -X POST http://127.0.0.1:6543/matakuliah -H "Content-Type: application/json" -d "{\"kode_mk\": \"IF123\", \"nama_mk\": \"Pemrograman Web\", \"sks\": 3, \"semester\": 4}"

# PUT update matakuliah ID 1
curl -X PUT http://127.0.0.1:6543/matakuliah/1 -H "Content-Type: application/json" -d "{\"nama_mk\": \"Pemrograman Web Lanjut\"}"

# DELETE matakuliah ID 1
curl -X DELETE http://127.0.0.1:6543/matakuliah/1
```

## Lisensi

Proyek ini dibuat untuk keperluan pembelajaran mata kuliah **Pemrograman Web - ITERA**
