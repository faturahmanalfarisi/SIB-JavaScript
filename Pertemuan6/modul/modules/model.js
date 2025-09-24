export class ProdukModel{
    constructor(){
        this.produkList = [];
    }
    //fungsi meanambah produk
    tambahProduk(namaProduk){
        this.produkList.push(namaProduk);
    }
    //fungsi menghapus
    hapusProduk(namaProduk){
        this.produkList = this.produkList.filter(produk => produk !== namaProduk);
    }
// untuk melihat daftar produk
    getProduk(){
        return this.produkList;
    }

}