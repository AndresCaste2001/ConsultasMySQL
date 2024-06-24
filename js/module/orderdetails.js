import { connection } from "../../db/connection.js"

//Recuperar los detalles de las órdenes, incluyendo los nombres de los productos, para todas las órdenes realizadas por el cliente con el número de cliente 101:

export const getOrderDetailsByCustomerNumber101 = async()=>{
    let [result] = await connection.query(`
    SELECT p.productName, o.orderNumber, customerNumber 
    FROM customers 
    INNER JOIN orders using (customerNumber) 
    INNER JOIN orderdetails o USING (orderNumber) 
    INNER JOIN products p USING (productCode) 
    WHERE customerNumber = '101'`)
    return result;
}