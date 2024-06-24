import { connection } from "../../db/connection.js"

//Listar todos los productos junto con las descripciones de sus líneas de productos:

export const getAllProuductsLineDescription = async()=>{
    let [result] = await connection.query(`
        SELECT productCode, productName, p.textDescription 
        FROM products 
        INNER JOIN productlines p USING (productLine)`)
    return result;
}

//**Obtener la cantidad total de productos vendidos por cada línea de productos:**

export const getAllProductsLineSold = async()=>{
    let [result] = await connection.query(`
        SELECT productLine, SUM(od.quantityOrdered) sales FROM products 
        INNER JOIN orderdetails AS od USING (productCode) 
        INNER JOIN orders AS o USING (orderNumber)  
        WHERE o.status = 'Shipped' 
        GROUP BY productLine 
        ORDER BY sales DESC`)
    return result;
}

//**Obtener el promedio del precio de compra de los productos por línea de productos:**

export const getAllProductsLineAvgBuyPrice = async()=>{
    let [result] = await connection.query(`
        SELECT productLine, AVG(buyPrice) as precioCompra FROM productlines 
        INNER JOIN products USING (productLine) 
        GROUP BY productLine 
        ORDER BY precioCompra DESC`)
    return result;
}

//**Encontrar el promedio del precio de venta (priceEach) de los productos por línea de productos:**

export const getAllProductsLineAvgSellPrice = async()=>{
    let [result] = await connection.query(`
        SELECT productline, AVG(od.priceEach) FROM productlines 
        INNER JOIN products USING (productline) 
        INNER JOIN orderdetails AS od USING (productCode) 
        GROUP BY productline`)
    return result;
}