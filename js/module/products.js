import { connection } from "../../db/connection.js"

//**Recuperar todas las líneas de productos con sus descripciones:**

export const getAllProductsDescription = async()=>{
    let [result] = await connection.query(`
        SELECT productline, productDescription 
        FROM products`)
    return result;
}

//**Calcular el total de productos en stock:**

export const getTotalProductsInStock = async()=>{
    let [result] = await connection.query(`
        SELECT SUM(quantityInStock) AS totalProductsInStock
        FROM products`)
    return result;
}

//**Encontrar el precio medio de compra de todos los productos:**

export const getAverageBuyPrice = async()=>{
    let [result] = await connection.query(`
        select AVG(buyprice) FROM products`)
    return result;
}

//**Encontrar el precio total de todos los productos:**

export const getTotalBuyPrice = async()=>{
    let [result] = await connection.query(`
        SELECT SUM(buyPrice) FROM products;`)
    return result;
}

//**Calcular el promedio del precio sugerido (MSRP) de los productos:**

export const getAverageMSRP = async()=>{
    let [result] = await connection.query(`
        SELECT AVG(MSRP) FROM products;`)
    return result;
}

//**Obtener el promedio de la cantidad de productos en stock por línea de productos:**

export const getAverageQuantityInStockByProductLine = async()=>{
    let [result] = await connection.query(`
        SELECT productLine, AVG(p.quantityInStock) FROM productlines 
        INNER JOIN products AS p USING (productLine) 
        GROUP BY productLine`)
    return result;
}
