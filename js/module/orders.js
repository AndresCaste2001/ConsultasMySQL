import { connection } from "../../db/connection.js"

//**Listar todas las órdenes que tienen un estado de 'Enviado':**

export const getAllShippedOrders = async ()=>{
    let [result] = await connection.query(`
        SELECT orderNumber, status 
        FROM orders 
        WHERE status='Shipped'`)
    return result;
}

//Encontrar todas las órdenes realizadas por clientes de 'Francia'

export const getAllOrdersByFrance = async()=>{
    let [result] = await connection.query(`
    SELECT orderNumber, c.country 
    FROM orders 
    INNER JOIN customers c  USING (customerNumber) 
    WHERE country = 'France'`)
    return result;
}

