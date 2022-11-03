const mysql = require('mysql2')
const connection = require('./connection')


function getAllEmployees() {
    return connection.promise().query(
        "SELECT * FROM employee "
    )
}

function getAllRoles() {
    return connection.promise().query(
        "SELECT * FROM role "
    )
}

function getAllDepartment() {
    return connection.promise().query(
        "SELECT * FROM department "
    )
}

function insertEmployee(employee) {
    return connection.promise().query(
        `INSERT INTO employee SET ${employee}  `
    )
}

// If am exporting more than one fuction, HAVE to WRAP IT as OBJECTS
module.exports = {getAllEmployees, getAllRoles, getAllDepartment}