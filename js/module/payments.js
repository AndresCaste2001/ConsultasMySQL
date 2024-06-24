import { connection } from "../../db/connection.js"

//- **Recuperar todos los clientes de 'USA' que tienen un límite de crédito superior a 50000:

export const getAllClientsCreditOver500 = async()=>{
    let [result] = await connection.query(`
        SELECT customerNumber, creditLimit, country 
        FROM customers 
        WHERE creditLimit > 50000 AND country = 'USA'`)
    return result;
}