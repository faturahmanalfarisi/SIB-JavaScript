function jumlahkan(...angka){
    return angka.reduce((total, num) => total + num, 0)
    // return angka + 2;
}
console.log(jumlahkan(2, 3, 4, 5, 6));
console.log(jumlahkan(10, 10, 10, 10, 10));

const arr_angka = [1, 2, 3, 4, 5];

//destructing
const [pertama, kedua, ...sisanya] = arr_angka;
console.log(pertama, kedua, sisanya);

const data = {
    nama: "Ali",
    umur: 25,
    kota: "Bandung",
    pekerjaan: "Programmer",
};

const {nama, ...infoLain} = data
console.log(nama, infoLain);