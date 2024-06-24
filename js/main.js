//--------------------------PRODUCTS-------------------------------

import { 
    getAllProductsDescription 

    } from "./module/products.js";

//-------------------------OFFICES-----------------------------------

import { 
    getAllEmployeesSanFracisco 

    } from "./module/offices.js";

//---------------------------CUSTOMERS--------------------------------

import { 
    getAllPaymentsByClient103,
    getAllPaymentsByClient

    } from "./module/customers.js";

//---------------------------ORDERS--------------------------------

import { 
    getAllShippedOrders,
    getAllOrdersByFrance

    } from "./module/orders.js";

//---------------------------PAYMENTS--------------------------------

import { 
    getAllClientsCreditOver500
     } from "./module/payments.js";

//---------------------------PRODUCTSLINE--------------------------------

import { 
    getAllProuductsLineDescription 

    } from "./module/productlines.js";

//---------------------------EMPLOYEE--------------------------------

import { 
    getAllEmployeesReportTo1143 

    } from "./module/employees.js";



console.log(await getAllPaymentsByClient103());