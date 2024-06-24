import { connection } from "../../db/connection.js"

//**Obtener los nombres y direcciones de correo electrónico de los empleados que reportan al empleado con el número de empleado 1143:

export const getAllEmployeesReportTo1143 = async()=>{
    let [result] = await connection.query(`
        SELECT lastName, firstName, email 
        FROM employees 
        WHERE reportsTo = '1143'`)
    return result;
}

//**Obtener la cantidad total de empleados:**

export const getAllEmployeesCount = async()=>{
    let [result] = await connection.query(`
        SELECT COUNT(*) FROM employees`)
    return result;
}

//**Contar la cantidad de empleados por título de trabajo:**

export const getAllEmployeesCountByTitle = async()=>{
    let [result] = await connection.query(`
        SELECT jobTitle, COUNT(*) FROM employees GROUP BY jobTitle`)
    return result;
}