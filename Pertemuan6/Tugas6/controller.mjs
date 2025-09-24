import users from './data.mjs';

const index = () => {
  const lines = users.map(({ nama, umur, alamat, email }, i) => `${i + 1}. ${nama} — ${umur} tahun — ${alamat} — ${email}`);
  console.log('Daftar users:');
  console.log(lines.join('\n'));
  return lines;
};

const store = (...newUsers) => {
  newUsers.forEach(u => users.push(u));
  console.log('Ditambahkan:', newUsers.map(u => u.nama).join(', '));
  return users;
};

const destroy = (email) => {
  const before = users.length;
  const filtered = users.filter(u => u.email !== email);
  if (filtered.length === before) {
    console.log('Email tidak ditemukan:', email);
  } else {
    users.length = 0;
    users.push(...filtered);
    console.log('Dihapus data dengan email:', email);
  }
  return users;
};

export { index, store, destroy };
