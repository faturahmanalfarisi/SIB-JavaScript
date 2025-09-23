//without spread
const angka = [1, 2, 3];
console.log(angka[0], angka[1], angka[2]);

//with spread
const spr_angka = [1, 2, 3];
const spr_angka2 = [4, 5, 6];

const gabungan = [...spr_angka, ...spr_angka2];

console.log(gabungan);
console.log(...spr_angka);

const user = {nama: "budi", umur: 25, };
const userBaru = {...user};
console.log(userBaru);