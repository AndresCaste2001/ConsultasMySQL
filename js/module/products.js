import { connection } from "../../db/connection.js"

//**Recuperar todas las líneas de productos con sus descripciones:**

export const getAllProductsDescription = async()=>{
    let [result] = await connection.query(`
        SELECT productline, productDescription 
        FROM products`)
    return result;
}