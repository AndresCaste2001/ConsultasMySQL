import { connection } from "../../db/connection.js"

//Encontrar todos los empleados que trabajan en la oficina de 'San Francisco'

export const getAllEmployeesSanFracisco = async()=>{
    let [result] = await connection.query(`
        SELECT employeeNumber, firstName, lastName,  o.city 
        FROM employees 
        INNER JOIN offices o USING(officeCode) 
        WHERE city='San Francisco'`)
    return result;
}

//**Contar la cantidad de oficinas en cada país:**

export const countOfficesByCountry = async()=>{
    let [result] = await connection.query(`
        SELECT country, COUNT(*) 
        FROM offices 
        GROUP BY country`)
    return result;
}

//**Encontrar el total de ventas realizadas por cada oficina:**

export const totalSalesByOffice = async()=>{
    let [result] = await connection.query(`
        SELECT officeCode, off.city, COUNT(*) FROM offices AS off 
        INNER JOIN employees AS e USING (officeCode) 
        INNER JOIN customers AS c ON e.employeeNumber = c.salesRepEmployeeNumber 
        INNER JOIN orders AS o USING (customerNumber) 
        WHERE o.status = 'Shipped'  
        GROUP BY officeCode`)
    return result;
}