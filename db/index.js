//  EmployeeTracker/db/index.js
const mysql = require('mysql2')
const connection = require('./connection')


function getAllEmployees() {
    return connection.promise().query(
        "select e.first_name, e.last_name, r.title, d.name as department, r.salary, concat(m.last_name, ', ', m.first_name)  as manager from (employee e left join role r on e.role_id=r.id JOIN department d on r.department_id=d.id) left join employee m on e.manager_id=m.id;" 
        )
}

function getAllRoles() {
    return connection.promise().query(
        "SELECT r.id, d.name as department, r.title, r.salary FROM role r JOIN department d on r.department_id=d.id;"
    )
}

function updEmplRole(updData) {
    return connection.promise().query(
        `UPDATE employee SET role_id=${updData.role_id} WHERE id=${updData.employeeId}`
    )
}

function getManagers() {
    return connection.promise().query(
        "select id, concat(last_name, ' ', first_name) as mgr from employee where manager_id=0;" 
    )
}

function getEmployees() {
    return connection.promise().query(
        "select id, concat(last_name, ' ', first_name) as fullname from employee;" 
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
    return connection.promise().query(
        "INSERT INTO role SET ?", role
    )
}

function insertDepartment(department) {
    return connection.promise().query(
        "INSERT INTO department SET ?", department

    )
}

function vRole(nRole) {
          return connection.promise().query(
             "SELECT id FROM role WHERE id=" + nRole
     )

 }



// If am exporting more than one fuction, HAVE to WRAP IT as OBJECTS
module.exports = {getAllEmployees, getAllRoles, getAllDepartment, insertEmployee, insertRole, insertDepartment, vRole, getManagers, getEmployees, updEmplRole}
// module.exports = {getAllEmployees, getAllRoles, getAllDepartment, insertEmployee, insertRole, insertDepartment}