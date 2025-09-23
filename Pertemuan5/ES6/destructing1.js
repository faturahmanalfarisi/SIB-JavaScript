const produkList = [
    {nama: "Laptop", harga: 1000000, stok: 10},
    {nama: "Smartphone", harga: 500000, stok: 15},
    {nama: "Tablet", harga: 4000000, stok: 15},
]

function tampilkanDetailProduk({nama, harga, stok}){
    console.log(`Nama Produk: ${nama}`);
    console.log(`Harga Produk: ${harga}`);
    console.log(`Stok Produk: ${stok}`);
    console.log("##############");
}

const [produk1, produk2, produk3] = produkList

console.log("Detail Produk 1 :");
tampilkanDetailProduk(produk1);
console.log("Detial Produk 2 :");
tampilkanDetailProduk(produk2);
console.log("Detial Produk 3 :");
tampilkanDetailProduk(produk3);