import math_operations

from math_operations import celsius_ke_fahrenheit, celsius_ke_kelvin

print("=== Geometri ===")
print(f"Luas persegi (sisi=5): {math_operations.luas_persegi(5)}")
print(f"Keliling persegi (sisi=5): {math_operations.keliling_persegi(5)}")
print(f"Luas persegi panjang (7x3): {math_operations.luas_persegi_panjang(7, 3)}")
print(f"Keliling persegi panjang (7x3): {math_operations.keliling_persegi_panjang(7, 3)}")
print(f"Luas lingkaran (jari-jari=4): {math_operations.luas_lingkaran(4):.2f}")
print(f"Keliling lingkaran (jari-jari=4): {math_operations.keliling_lingkaran(4):.2f}")

print("\n=== Konversi Suhu ===")
print(f"25°C ke Fahrenheit: {celsius_ke_fahrenheit(25):.2f}°F")
print(f"25°C ke Kelvin: {celsius_ke_kelvin(25):.2f}K")

print("\n=== Konstanta ===")
print(f"Nilai PI: {math_operations.PI}")