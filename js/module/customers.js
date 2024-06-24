import { connection } from "../../db/connection.js"

//**Obtener los detalles de todos los pagos realizados por el cliente con el número de cliente 103:

export const getAllPaymentsByClient103 = async()=>{
    let [result] = await connection.query(`
    SELECT customerNumber, customerName, p.checkNumber 
    FROM customers
    INNER JOIN payments p
    USING (customerNumber) WHERE customerNumber = '103'`)
    return result;
}



//Listar el monto total de los pagos recibidos de cada cliente:

export const getAllPaymentsByClient = async()=>{
    let [result] = await connection.query(`
    SELECT customerNumber, customerName, SUM(amount) 
    FROM customers
    INNER JOIN payments p
    USING (customerNumber) GROUP BY customerNumber`)
    return result;
}