import { index, store, destroy } from './controller.mjs';

console.log('== SEBELUM PENAMBAHAN ==');
index();

store(
  { nama: 'Fajar', umur: 30, alamat: 'Jl. Bunga 11', email: 'fajar@example.com' },
  { nama: 'Nita', umur: 31, alamat: 'Jl. Anggrek 12', email: 'nita@example.com' }
);

console.log('\n== SETELAH PENAMBAHAN ==');
index();

destroy('andi@example.com');

console.log('\n== SETELAH PENGHAPUSAN ==');
index();
