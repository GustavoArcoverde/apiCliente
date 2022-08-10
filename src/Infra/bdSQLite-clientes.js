import sqlite3 from 'sqlite3';
const bdSQLite = new sqlite3.Database(path.resolve(__dirname, "db.sqlite"));


//Processamento de sinal
process.on('SIGINT', () =>
    bdSQLite.close(() => {
        console.log('BD encerrado!');
        process.exist(0);
    })
);

export {bdSQLite};