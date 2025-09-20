const produkToko = [
  { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
  { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
  { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

function tambahProduk(nama, harga, stok) {
  if (!nama || isNaN(harga) || isNaN(stok)) {
    console.log("Input tidak valid. Contoh: tambahProduk('Baju', 100000, 5)");
    return null;
  }
  const maxId = produkToko.reduce((max, p) => (p.id > max ? p.id : max), 0);
  const produkBaru = { id: maxId + 1, nama, harga: Number(harga), stok: Number(stok) };
  produkToko.push(produkBaru);
  console.log(`Produk ditambahkan: ${produkBaru.id} - ${produkBaru.nama}`);
  return produkBaru;
}

function hapusProduk(id) {
  const index = produkToko.findIndex(p => p.id === id);
  if (index === -1) {
    console.log(`Produk dengan id ${id} tidak ditemukan.`);
    return false;
  }
  const removed = produkToko.splice(index, 1)[0];
  console.log(`Produk dihapus: ${removed.id} - ${removed.nama}`);
  return removed;
}

function tampilkanProduk() {
  if (produkToko.length === 0) {
    console.log("Tidak ada produk.");
    return;
  }
  console.log("Daftar Produk:");
  produkToko.forEach(p => {
    console.log(`${p.id}. ${p.nama} - ${formatRupiah(p.harga)} (stok: ${p.stok})`);
  });
}

function formatRupiah(angka) {
  return "Rp" + angka.toLocaleString('id-ID');
}

/* contoh pemakaian (bisa kamu jalankan langsung) */
tampilkanProduk();
tambahProduk("Headset", 450000, 6);
tampilkanProduk();
hapusProduk(2);
tampilkanProduk();
