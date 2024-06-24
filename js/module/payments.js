import { connection } from "../../db/connection.js"

//- **Recuperar todos los clientes de 'USA' que tienen un límite de crédito superior a 50000:

export const getAllClientsCreditOver500 = async()=>{
    let [result] = await connection.query(`
        SELECT customerNumber, creditLimit, country 
        FROM customers 
        WHERE creditLimit > 50000 AND country = 'USA'`)
    return result;
}

//**Calcular el total de pagos recibidos:**

export const getTotalPayments = async()=>{
    let [result] = await connection.query(`
        SELECT SUM(amount) AS total_payments 
        FROM payments`)
    return result;
}

//**Calcular el total de pagos recibidos por cada cliente:**

export const getTotalPaymentsByClient = async()=>{
    let [result] = await connection.query(`
        SELECT customerName, COUNT(*) 
        FROM customers 
        INNER JOIN payments USING (customerNumber) 
        GROUP BY customerName;`)
    return result;
}