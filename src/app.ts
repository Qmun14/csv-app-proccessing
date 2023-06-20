import fs from 'fs';
import csv from 'csv-parser';

interface Transaction {
  produk: string;
  jumlah: number;
}

const filePath = 'penjualan.csv';

const transactions: Transaction[] = [];

fs.createReadStream(filePath)
  .pipe(csv())
  .on('data', (row: any) => {
    const transaction: Transaction = {
      produk: row.produk,
      jumlah: parseInt(row.jumlah)
    };
    transactions.push(transaction);
  })
  .on('end', () => {
    // Menghitung total penjualan
    const totalSales = transactions.reduce((total, transaction) => total + transaction.jumlah, 0);
    console.log('Total Penjualan:', totalSales);

    // Mencari transaksi dengan nilai penjualan tertinggi
    const highestSalesTransaction = transactions.reduce((maxTransaction, transaction) => {
      if (transaction.jumlah > maxTransaction.jumlah) {
        return transaction;
      }
      return maxTransaction;
    });
    console.log('Transaksi dengan Penjualan Tertinggi:', highestSalesTransaction);

    // Menghitung jumlah transaksi
    const totalTransactions = transactions.length;
    console.log('Jumlah Transaksi:', totalTransactions);

    // Mencetak daftar produk yang terjual
    const soldProducts = transactions.map(transaction => transaction.produk);
    const uniqueSoldProducts = [...new Set(soldProducts)];
    console.log('Daftar Produk yang Terjual:', uniqueSoldProducts);
  });

