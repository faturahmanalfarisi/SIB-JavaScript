function hitungRataRata(nilai) {
    // Function adalah deklarasi
    // hitungRataRata adalah nama function
    // (nilai) adalah parameter
    let total = 0; // nilai awal
    for (let i = 0; i < nilai.length; i++) { // perbaiki kondisi loop
        total += nilai[i];
    }
    return total / nilai.length; // return value
}

let nilaiMahasiswa = [80, 90, 75, 85, 100, 90];

console.log(`Rata-Rata Nilai: ${hitungRataRata(nilaiMahasiswa)}`);
