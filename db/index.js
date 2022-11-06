//  EmployeeTracker/db/index.js
const mysql = require('mysql2')
const connection = require('./connection')


function getAllEmployees() {
    // console.log("db/index   getAllEmployees")
    return connection.promise().query(
        "SELECT * FROM employee;"
    )
}

function getAllRoles() {
    // console.log("db/index   getAllRoles")
    // console.log(connection);
    
    return connection.promise().query(
        "SELECT role.id, role.title, role.salary FROM role;"
    )
}

function getAllDepartment() {
    return connection.promise().query(
        "SELECT * FROM department;"
    )
}

function insertEmployee(employee) {
    return connection.promise().query(
        "INSERT INTO employee SET ?", employee
    )
}

function insertRole(role) {
    console.log('he he')
    return connection.promise().query(
        "INSERT INTO role SET ?", role
    )
}

function insertDepartment(department) {
    console.log('new departmente')
    return connection.promise().query(
        "INSERT INTO department SET ?", department
    )
}

// If am exporting more than one fuction, HAVE to WRAP IT as OBJECTS
module.exports = {getAllEmployees, getAllRoles, getAllDepartment, insertEmployee, insertRole, insertDepartment}