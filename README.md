# Jawaban Technical Test Skenario: Pengolahan Data CSV

## _Build using node v18.16.0 dan Typescript_

## Fitur :

- Menghitung total penjualan (jumlah kolom 'jumlah') dari semua transaksi.
- Menemukan transaksi dengan nilai penjualan tertinggi (mencari baris dengan jumlah penjualan terbesar).
- Menghitung jumlah transaksi (jumlah baris) dalam file CSV.
- Menemukan dan cetak daftar produk yang terjual (isi kolom 'produk')

## Tech

### aplikasi ini menggunakan:

- [node.js] - sebagai development environment

  - - tutorial cara installasi node.js nya :
      - https://www.youtube.com/watch?v=VfN1_pEdQAA&t=633s

- [Typescript] - sebagai bahasa pemrograman
  - - tutorial cara installasi typescript nya :
      - https://www.youtube.com/watch?v=gkPrpGexmho&t=110s

## Installation

requires [Node.js](https://nodejs.org/) v18.16.0 to run.

- Pastikan Anda telah menginstal Node.js dan TypeScript sebelum menjalankan program ini
- copy / clone github repository project ini
- lalu buka dalam text editor anda
- pastikan anda sudah berada di dalam root folder projectnya

```sh
cd csv-app-proccessing
```

- install semua dependencies yang dibutuhkan dengan menjalankan perintah dibawah dalam terminal CLI anda:

```
npm install
```

- pastikan anda menempatkan file `.csv` di root folder project

- lalu pastikan nama file csv sama dengan nama isi dari variable filePath di source code

```

const filePath = 'penjualan.csv';           //samakan nama file csv dengan nama filePath

```

- lalu jalankan aplikasinya lewat terminal dengan perintah di bawah ini :

```
npm run start
```

### hasil nya akan terlihat seperti ini :

```
$ npm run start

> csv-app-proccessing@1.0.0 start
> ts-node src/app.ts

Total Penjualan: 489
Transaksi dengan Penjualan Tertinggi: { produk: 'Produk A', jumlah: 10 }
Jumlah Transaksi: 94
Daftar Produk yang Terjual: [ 'Produk A', 'Produk B', 'Produk C' ]
```

## License

MIT

**Free Software, Cool Yeah!**
