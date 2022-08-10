import sqlite3 from 'sqlite3';
const bdSQLite = new sqlite3.Database('./clientes.db');


//Processamento de sinal
process.on('SIGINT', () =>
    bdSQLite.close(() => {
        console.log('BD encerrado!');
        process.exist(0);
    })
);

export {bdSQLite};