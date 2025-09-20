const mahasiswa = [
    { nama: 'Budi', nilai: 70 },
    { nama: 'Andi', nilai: 80 },
    { nama: 'Citra', nilai: 90 },
    { nama: 'Dewi', nilai: 76 },
    { nama: 'Eko', nilai: 75 },
];

const hitungRataRata = data => data.reduce ((acc, mhs) => acc + mhs.nilai, 0) / data.length;

const mahasiswaLulus = data => data.filter(mhs => mhs.nilai >= 60);

const namaMahasiswaLulus = data => mahasiswaLulus(data).map(mhs => mhs.nama);
console.log(`Rata - Rata nilai: ${hitungRataRata(mahasiswa)}`);
console.log(`Mahasiswa yang Lulus: `, namaMahasiswaLulus(mahasiswa));