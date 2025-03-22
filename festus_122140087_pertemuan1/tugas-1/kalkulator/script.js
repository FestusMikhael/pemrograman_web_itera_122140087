function hitungKalkulator(angka1, angka2, operasi) {
    let hasil;
    switch (operasi) {
        case "tambah": hasil = angka1 + angka2; break;
        case "kurang": hasil = angka1 - angka2; break;
        case "kali": hasil = angka1 * angka2; break;
        case "bagi": 
            hasil = angka2 !== 0 ? angka1 / angka2 : "Error: Tidak bisa dibagi 0";
            break;
        case "pangkat": hasil = Math.pow(angka1, angka2); break;
        case "akar": 
            hasil = angka1 >= 0 ? Math.sqrt(angka1) : "Error: Angka tidak boleh negatif"; 
            break;
        case "modulus": hasil = angka1 % angka2; break;
        default: hasil = "Operasi tidak valid";
    }
    return hasil;
}

function handleCalculation(operasi) {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    
    if (isNaN(angka1) || (isNaN(angka2) && operasi !== "akar")) {
        document.getElementById("hasil-kalkulator").innerHTML = `<p style="color:red;">Masukkan angka yang valid!</p>`;
    } else {
        const hasil = hitungKalkulator(angka1, angka2, operasi);
        let simbol = {tambah: "+", kurang: "−", kali: "×", bagi: "÷", pangkat: "^", modulus: "%"}[operasi] || "√";
        let teksHasil = operasi === "akar" ? `Hasil: √${angka1} = ${hasil}` : `Hasil: ${angka1} ${simbol} ${angka2} = ${hasil}`;
        document.getElementById("hasil-kalkulator").innerHTML = `<p>${teksHasil}</p>`;
    }
}

document.getElementById("btn-tambah").addEventListener("click", () => handleCalculation("tambah"));
document.getElementById("btn-kurang").addEventListener("click", () => handleCalculation("kurang"));
document.getElementById("btn-kali").addEventListener("click", () => handleCalculation("kali"));
document.getElementById("btn-bagi").addEventListener("click", () => handleCalculation("bagi"));
document.getElementById("btn-pangkat").addEventListener("click", () => handleCalculation("pangkat"));
document.getElementById("btn-akar").addEventListener("click", () => handleCalculation("akar"));
document.getElementById("btn-modulus").addEventListener("click", () => handleCalculation("modulus"));
