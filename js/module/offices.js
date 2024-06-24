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