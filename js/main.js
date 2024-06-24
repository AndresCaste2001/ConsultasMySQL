//--------------------------PRODUCTS-------------------------------

import { 
    getAllProductsDescription,
    getTotalProductsInStock,
    getAverageBuyPrice,
    getTotalBuyPrice,
    getAverageMSRP,
    getAverageQuantityInStockByProductLine

    } from "./module/products.js";

//-------------------------OFFICES-----------------------------------

import { 
    getAllEmployeesSanFracisco,
    countOfficesByCountry,
    totalSalesByOffice

    } from "./module/offices.js";

//---------------------------CUSTOMERS--------------------------------

import { 
    getAllPaymentsByClient103,
    getAllPaymentsByClient,
    getAverageCreditLimit,
    getAverageCreditLimitByCountry,
    getTotalOrdersByClient,
    getTotalProductsOrderedByClient,
    getTotalSalesByClient,
    getAverageProductsOrderedByClient,
    getAverageProductsOrderedByClient2

    } from "./module/customers.js";

//---------------------------ORDERS--------------------------------

import { 
    getAllShippedOrders,
    getAllOrdersByFrance,
    getTotalSalesByCountry

    } from "./module/orders.js";

//---------------------------PAYMENTS--------------------------------

import { 
    getAllClientsCreditOver500,
    getTotalPayments,
    getTotalPaymentsByClient,
    getTotalPaymentsByCountry,
    getTotalPaymentsByYear
     } from "./module/payments.js";

//---------------------------PRODUCTSLINE--------------------------------

import { 
    getAllProuductsLineDescription,
    getAllProductsLineSold,
    getAllProductsLineAvgBuyPrice,
    getAllProductsLineAvgSellPrice

    } from "./module/productlines.js";

//---------------------------EMPLOYEE--------------------------------

import { 
    getAllEmployeesReportTo1143,
    getAllEmployeesCount,
    getAllEmployeesCountByTitle,
    getAllEmployeesAvgSalesByEmployee,
    getAllOrdersByEmployee,
    getAllProductsSoldByEmployee,
    getAllCreditLimitByEmployee
    

    } from "./module/employees.js";

//---------------------------ORDER_DETAILS---------------------------

import { 
    getOrderDetailsByCustomerNumber101 

    } from "./module/orderdetails.js";


console.log(await getAllEmployeesAvgSalesByEmployee());