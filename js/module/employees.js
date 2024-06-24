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

//Encontrar el promedio de ventas (cantidad ordenada por precio cada uno) por cada empleado:

export const getAllEmployeesAvgSalesByEmployee = async()=>{
    let [result] = await connection.query(`
       SELECT DISTINCT employeeNumber, CONCAT(firstName,' ', lastName) AS name, AVG(od.quantityOrdered*od.priceEach) AS sales  
       FROM employees AS e 
       INNER JOIN customers AS c ON e.employeeNumber = c.salesRepEmployeeNumber 
       INNER JOIN orders AS o USING (customerNumber) 
       INNER JOIN orderdetails AS od USING (orderNumber) 
       WHERE o.status='Shipped' 
       GROUP BY employeeNumber 
       ORDER BY sales DESC`)
    return result;
}

//**Calcular el total de órdenes gestionadas por cada empleado:**

export const getAllOrdersByEmployee = async()=>{
    let [result] = await connection.query(`
        SELECT employeeNumber, CONCAT(firstName,' ', lastName) AS name, COUNT(*) AS sales 
        FROM employees AS e 
        INNER JOIN customers AS c ON e.employeeNumber = c.salesRepEmployeeNumber 
        INNER JOIN orders AS o USING (customerNumber) 
        WHERE o.status = 'Shipped' 
        GROUP BY employeeNumber 
        ORDER BY sales DESC`)
    return result;
}

//**Encontrar la cantidad total de productos vendidos por cada vendedor:**

export const getAllProductsSoldByEmployee = async()=>{
    let [result] = await connection.query(`
        SELECT employeeNumber, CONCAT(firstName," ",lastName), SUM(od.quantityOrdered) 
        FROM employees AS e 
        INNER JOIN customers AS c ON e.employeeNumber = c.salesRepEmployeeNumber 
        INNER JOIN orders AS o USING (customerNumber) 
        INNER JOIN orderdetails AS od USING(orderNumber) 
        WHERE o.status='Shipped' AND e.jobTitle='Sales Rep' 
        GROUP BY employeeNumber`)
    return result;
}

//**Obtener el promedio del límite de crédito de los clientes atendidos por cada vendedor:**

export const getAllCreditLimitByEmployee = async()=>{
    let [result] = await connection.query(`
        SELECT DISTINCT employeeNumber, CONCAT(firstName,' ', lastName) AS name, AVG(c.creditLimit) AS creditLimit  
        FROM employees AS e 
        INNER JOIN customers AS c ON e.employeeNumber = c.salesRepEmployeeNumber 
        GROUP BY employeeNumber 
        ORDER BY creditLimit DESC`)
    return result;
}