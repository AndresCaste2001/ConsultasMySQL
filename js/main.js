//--------------------------PRODUCTS-------------------------------

import { 
    getAllProductsDescription,
    getTotalProductsInStock,
    getAverageBuyPrice,
    getTotalBuyPrice,
    getAverageMSRP

    } from "./module/products.js";

//-------------------------OFFICES-----------------------------------

import { 
    getAllEmployeesSanFracisco,
    countOfficesByCountry

    } from "./module/offices.js";

//---------------------------CUSTOMERS--------------------------------

import { 
    getAllPaymentsByClient103,
    getAllPaymentsByClient,
    getAverageCreditLimit,
    getAverageCreditLimitByCountry,
    getTotalOrdersByClient,
    getTotalProductsOrderedByClient

    } from "./module/customers.js";

//---------------------------ORDERS--------------------------------

import { 
    getAllShippedOrders,
    getAllOrdersByFrance

    } from "./module/orders.js";

//---------------------------PAYMENTS--------------------------------

import { 
    getAllClientsCreditOver500,
    getTotalPayments,
    getTotalPaymentsByClient
     } from "./module/payments.js";

//---------------------------PRODUCTSLINE--------------------------------

import { 
    getAllProuductsLineDescription 

    } from "./module/productlines.js";

//---------------------------EMPLOYEE--------------------------------

import { 
    getAllEmployeesReportTo1143,
    getAllEmployeesCount,
    getAllEmployeesCountByTitle,
    

    } from "./module/employees.js";

//---------------------------ORDER_DETAILS---------------------------

import { 
    getOrderDetailsByCustomerNumber101 

    } from "./module/orderdetails.js";


console.log(await getAllEmployeesCountByTitle());