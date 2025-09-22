// Data penyimpanan pelanggan
const pelangganTersimpan = [];

// Class Pelanggan 
class Pelanggan {
    constructor(nama, nomorTelepon, kendaraanDisewa) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = kendaraanDisewa;
    }
}

// Fungsi untuk menambah pelanggan baru
function tambahPelanggan() {
    const namaInput = document.getElementById('nama').value;
    const teleponInput = document.getElementById('telepon').value;
    const kendaraanInput = document.getElementById('kendaraan').value;

    if (namaInput && teleponInput && kendaraanInput) {
        const pelangganBaru = new Pelanggan(namaInput, teleponInput, kendaraanInput);
        pelangganTersimpan.push(pelangganBaru);
        
        tampilkanDaftarPelanggan();
        
        // Bersihkan input field
        document.getElementById('nama').value = '';
        document.getElementById('telepon').value = '';
    } else {
        alert("Harap lengkapi semua data.");
    }
}

// Fungsi untuk menampilkan daftar pelanggan ke DOM
function tampilkanDaftarPelanggan() {
    const containerDaftar = document.getElementById('daftarPelanggan');
    containerDaftar.innerHTML = ''; // Bersihkan konten sebelumnya

    pelangganTersimpan.forEach((pelanggan, index) => {
        const divCard = document.createElement('div');
        divCard.className = 'card';
        divCard.innerHTML = `
            <p><strong>Nama:</strong> ${pelanggan.nama}</p>
            <p><strong>Nomor Telepon:</strong> ${pelanggan.nomorTelepon}</p>
            <p><strong>Kendaraan Disewa:</strong> ${pelanggan.kendaraanDisewa}</p>
        `;
        containerDaftar.appendChild(divCard);
    });
}