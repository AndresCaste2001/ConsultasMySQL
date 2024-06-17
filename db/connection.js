import mysql from 'mysql2/promise';

export const connection = await mysql.createConnection({
    host: 'viaduct.proxy.rlwy.net',
    port: 23427,
    user: 'root',
    database: 'railway',
    password: 'wUCaAqZXrEeKXUSOBTrqkZuPddESPaTK'
  });
