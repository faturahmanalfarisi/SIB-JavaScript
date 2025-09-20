let buah = ['Pepaya', 'Mangga', 'Pisang', 'Jambu']; //Deklarasi sebuah array
buah [2] = 'Durian'; //Mengubah isi array
buah.length = 2;
let angka = new Array (10, 20, 30,); //Deklarasi dengan new array
let arrkosong = new Array(5); //Panjang data, bukan data atau valuenya
let ankga1 = [1,2,3];

for (let i = 0; i < arrkosong.length; i++) {
    arrkosong[i] = i + 1;
}
Array.prototype.tampilkan = function() {
    console.log(this.join("-"));
}
buah.push("Semangka");
console.log(buah);
buah.pop();
console.log(buah);
buah.unshift("Semangka");
console.log(buah);
buah.shift();
console.log(buah);

let warna = ["Merah", "Biru", "Hijau"];
warna.tampilkan();
console.log(buah[0]);
console.log(buah[1]); 
console.log(buah[2]); 
console.log(arrkosong);
console.log(arrkosong[0]);
console.log(angka);
console.log(buah.length);
console.log(ankga1.consturctor);