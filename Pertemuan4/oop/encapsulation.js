// const _harga = Symbol("harga");
class Produk{
    #harga;
    constructor(nama, harga){
        this.nama = nama;
        // this._harga = harga;
        // this[_harga] = harga;
        this.#harga = harga
        
    }
    getHarga(){
        // return this._harga;
        // return this[_harga];
        return this.#harga;
    }
    setHarga(hargaBaru){
        if(hargaBaru > 0){
            // this._harga = hargaBaru
            // this[_harga] = hargaBaru;
            this.#harga
        } else{
            console.log("Harga tidak boleh negatif");
        }
    }
}

const tv = new Produk("Televisi", 500000);
console.log(tv.getHarga());
tv.setHarga(300000);
console.log(tv.getHarga());
// console.log(tv._harga); //tidak disarankan