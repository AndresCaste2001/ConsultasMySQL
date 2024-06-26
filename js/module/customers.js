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

//Obtener el promedio del límite de crédito de todos los clientes:

export const getAverageCreditLimit = async()=>{
    let [result] = await connection.query(`
    SELECT AVG(creditLimit) FROM customers`)
    return result;
}

//**Obtener el promedio del límite de crédito de los clientes por país:**

export const getAverageCreditLimitByCountry = async()=>{
    let [result] = await connection.query(`
    SELECT country, AVG(creditLimit) 
    FROM customers 
    GROUP BY country`)
    return result;
}

//**Calcular el total de órdenes realizadas por cada cliente:**

export const getTotalOrdersByClient = async()=>{
    let [result] = await connection.query(`
    SELECT customerName, COUNT(*) FROM customers  
    INNER JOIN orders AS o USING (customerNumber) 
    WHERE o.status = 'Shipped' 
    GROUP BY customerName`)
    return result;
}

//**Encontrar la cantidad total de productos pedidos por cada cliente:**

export const getTotalProductsOrderedByClient = async()=>{
    let [result] = await connection.query(`
    SELECT customerName, SUM(p.quantityOrdered) FROM customers 
    INNER JOIN orders AS o USING (customerNumber) 
    INNER JOIN orderdetails AS p USING (orderNumber) 
    WHERE o.status = 'Shipped' 
    GROUP BY customerName;`)
    return result;
}

//**Calcular el total de ventas (cantidad ordenada por precio cada uno) por cada cliente:**

export const getTotalSalesByClient = async()=>{
    let [result] = await connection.query(`
    SELECT customerName, SUM(p.quantityOrdered*pr.buyPrice) AS sale FROM customers 
    INNER JOIN orders AS o USING (customerNumber) 
    INNER JOIN orderdetails AS p USING (orderNumber) 
    INNER JOIN products AS pr USING (productCode) 
    WHERE o.status = 'Shipped' 
    GROUP BY customerName 
    ORDER BY sale DESC`)
    return result;
}

//**Encontrar el promedio de la cantidad de productos ordenados por cada cliente:**

export const getAverageProductsOrderedByClient = async()=>{
    let [result] = await connection.query(`
    SELECT CONCAT(customerNumber," ", customerName) AS idCustomer, AVG(od.quantityOrdered) 
    FROM customers 
    INNER JOIN orders AS o USING (customerNumber) 
    INNER JOIN orderdetails AS od USING (orderNumber) 
    WHERE o.status = 'Shipped' 
    GROUP BY idCustomer`)
    return result;
}

//**Calcular la cantidad media de productos pedidos por cada cliente:**

export const getAverageProductsOrderedByClient2 = async()=>{
    let [result] = await connection.query(`
    SELECT customerNumber, customerName, AVG(od.quantityOrdered) 
    FROM customers 
    INNER JOIN orders AS o USING (customerNumber) 
    INNER JOIN orderdetails AS od USING (orderNumber) 
    WHERE o.status = 'Shipped' 
    GROUP BY customerNumber`)
    return result;
}