let angka = [10, 21, 30, 40, 50];

//Loop white
let i = 0;

while (i < angka.length) {
    console.log(angka[i]);
    i++;
}
//Loop forEach
angka.forEach(function(item, index){
    console.log('Index ${index} : $ {item}');
});
//Loop Map
let angkaBaru = angka.map(num => num);
console.log(angkaBaru);
//Filter
let angkaGanjil = angka.filter(num => num % 2 !== 0);
console.log(angkaGanjil);
//Reduce
let total = angka.reduce((acc, num) => acc + num, 0);
console.log(total);

//For of
for (let item of angka) {
    console.log(item);
}