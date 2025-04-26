data_mahasiswa = [
    {"nama": "Festus", "nim": "122140001", "nilai_uts": 85, "nilai_uas": 90, "nilai_tugas": 80},
    {"nama": "Mikhael", "nim": "122140002", "nilai_uts": 75, "nilai_uas": 80, "nilai_tugas": 70},
    {"nama": "Fesmi", "nim": "122140003", "nilai_uts": 65, "nilai_uas": 70, "nilai_tugas": 60},
    {"nama": "Miktus", "nim": "122140004", "nilai_uts": 55, "nilai_uas": 60, "nilai_tugas": 50},
    {"nama": "Mikfes", "nim": "122140005", "nilai_uts": 45, "nilai_uas": 50, "nilai_tugas": 40}
]

for mahasiswa in data_mahasiswa:
    nilai_akhir = (0.3 * mahasiswa["nilai_uts"]) + (0.4 * mahasiswa["nilai_uas"]) + (0.3 * mahasiswa["nilai_tugas"])
    mahasiswa["nilai_akhir"] = nilai_akhir
    
    if nilai_akhir >= 80:
        mahasiswa["grade"] = "A"
    elif 70 <= nilai_akhir < 80:
        mahasiswa["grade"] = "B"
    elif 60 <= nilai_akhir < 70:
        mahasiswa["grade"] = "C"
    elif 50 <= nilai_akhir < 60:
        mahasiswa["grade"] = "D"
    else:
        mahasiswa["grade"] = "E"

# Tampilkan data dalam format tabel
print("\nDaftar Nilai Mahasiswa")
print("="*103)
print("| {:<5} | {:<15} | {:<10} | {:<10} | {:<10} | {:<12} | {:<5} | {:<5} |".format(
    "No", "Nama", "NIM", "UTS", "UAS", "Tugas", "Nilai Akhir", "Grade"))
print("="*103)

for i, mahasiswa in enumerate(data_mahasiswa, 1):
    print("| {:<5} | {:<15} | {:<10} | {:<10} | {:<10} | {:<12.2f} | {:<11} | {:<5} |".format(
        i, mahasiswa["nama"], mahasiswa["nim"], mahasiswa["nilai_uts"], 
        mahasiswa["nilai_uas"], mahasiswa["nilai_tugas"], mahasiswa["nilai_akhir"], mahasiswa["grade"]))

print("="*103)

nilai_tertinggi = max(data_mahasiswa, key=lambda x: x["nilai_akhir"])
nilai_terendah = min(data_mahasiswa, key=lambda x: x["nilai_akhir"])

print("\nMahasiswa dengan Nilai Tertinggi:")
print(f"Nama: {nilai_tertinggi['nama']}, NIM: {nilai_tertinggi['nim']}, Nilai Akhir: {nilai_tertinggi['nilai_akhir']:.2f}, Grade: {nilai_tertinggi['grade']}")

print("\nMahasiswa dengan Nilai Terendah:")
print(f"Nama: {nilai_terendah['nama']}, NIM: {nilai_terendah['nim']}, Nilai Akhir: {nilai_terendah['nilai_akhir']:.2f}, Grade: {nilai_terendah['grade']}")