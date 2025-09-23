let daftarProduk = ["laptop", "Smartphone"];

function tambahProduk(...produkBaru){
    daftarProduk = [...daftarProduk, ...produkBaru];
    console.log("Produk berhasil ditambahkan", produkBaru);
}

function tampilkanProduk(){
    console.log("Daftar Produk saat ini", daftarProduk);
}

function salinProduk(){
    return[...daftarProduk];
}
tambahProduk("Tablet", "Headphone");
tampilkanProduk();

const produkCadangan = salinProduk();
console.log("Produk Cadangan",  produkCadangan);


tambahProduk("SmartWatch", "Mouse");
tampilkanProduk();

console.log("Produk Cadangan setelah perubahan ", produkCadangan);