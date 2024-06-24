import { connection } from "../../db/connection.js"

//Listar todos los productos junto con las descripciones de sus líneas de productos:

export const getAllProuductsLineDescription = async()=>{
    let [result] = await connection.query(`
        SELECT productCode, productName, p.textDescription 
        FROM products 
        INNER JOIN productlines p USING (productLine)`)
    return result;
}