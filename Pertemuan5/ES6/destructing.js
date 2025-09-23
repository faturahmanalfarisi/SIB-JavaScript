//without destructing

const angka = [10, 20, 30];

const a = angka[0];
const b = angka[1];
const c = angka[2];

console.log(a, b, c);

//with destructing
const angka1 = [10, 20, 30];

const [a1, b2, c3] = angka1;
console.log(a1, b2, c3);
//without destructing
const user = {
    nama: "Budi",
    umur: 25,
    kota: "Jakarta",
}
// const nama = user.nama;
// const umur = user.umur;
// const kota = user.kota;
//with destructing
const {nama, umur, kota} = user;
console.log(nama, umur, kota);
const siswa = [
    {nama: "Ali", nilai: 85},
    {nama: "Budi", nilai: 90},
];

for(const {nama, nilai} of siswa){
    console.log(`${nama} Mendapatkan nilai ${nilai}`)
}
