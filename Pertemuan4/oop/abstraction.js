class Kendaraan{
    constructor(merk, tahun){
        if(this.constructor === Kendaraan){
    throw new Error("Kelas Kendaraan tidak dibuat sebagai Instance langsung")
        }
        this.merk = merk;
        this.tahun = tahun;
    }

    deskripsi(){
        throw new Error("Method 'deskripsi()' harus diimplementasikan");
    }
}

class Mobil extends Kendaraan{
    constructor(merk,tahun, kecepatan){
        super(merk, tahun, Kendaraan);
        this.kecepatan = kecepatan;
    }
    deskripsi(){
        return `Mobil ${this.merk} (${this.tahun}) Melaju dengan kecepatan 
        ${this.kecepatan} km/jam`;
    }
}


const mobil1 = new Mobil("Toyota", 2022, 180);
console.log(mobil1.deskripsi());