// console.log(kali(5, 4)); // Output: 20
// Harus initialisasi dulu sebelum di tampilkan hasilnya
const kali = function (a, b) {
    return a * b;
}

console.log(kali(5, 4));

// Anonymous Function
const hitungLuas = function (sisi) {
    return sisi * sisi;
}
console.log(hitungLuas(5));

const mahasiswa = [
    { nama: 'Budi', nilai: 70 },
    { nama: 'Andi', nilai: 80 },
    { nama: 'Citra', nilai: 90 },
    { nama: 'Dewi', nilai: 76 },
    { nama: 'Eko', nilai: 75 },
];

const hitungAverage = function (data) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
        total += data[i].nilai;
    }
    return total / data.length;
}

const mahasiswaLulus = function (data) {
    return data.filter(mhs => mhs.nilai >= 60);
}

const mahasiswaTidakLulus = function (data) {
    return data.filter(mhs => mhs.nilai < 60);
}
console.log(`Rata - Rata nilai: ${hitungAverage(mahasiswa)}`);
console.log("Mahasiswa yang Lulus: ", mahasiswaLulus(mahasiswa));
console.log("Mahasiswa yang Tidak Lulus: ", mahasiswaTidakLulus(mahasiswa));