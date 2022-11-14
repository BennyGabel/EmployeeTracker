//  EmployeeTracker/db/index.js
const mysql = require('mysql2')
const connection = require('./connection')


function getAllEmployees() {
    // console.log("db/index   getAllEmployees")
    // "SELECT * FROM employee;"

    // "select e.first_name, e.last_name, r.title, d.name as department, r.salary from (employee e join role r on e.role_id=r.id) JOIN department d on r.department_id=d.id;"
    // "select e.first_name, e.last_name, r.title, d.name as department, r.salary, m.last_name   JOIN LEFT employee m on e.manager_id=m.id"

    return connection.promise().query(
        "select e.first_name, e.last_name, r.title, d.name as department, r.salary, e.manager_id from (employee e join role r on e.role_id=r.id) JOIN department d on r.department_id=d.id;"
        
        // (select concat(last_name, ' ', first_name) as manager from employee where e.id=manager_id
        //  from (employee e join role r on e.role_id=r.id) JOIN department d on r.department_id=d.id;"
        // concat(last_name, ' ', first_name) as mgr
        )
}

function getAllRoles() {
    // console.log("db/index   getAllRoles")
    // console.log(connection);
    
    return connection.promise().query(
        "SELECT role.id, role.title, role.salary FROM role;"
    )
}

function getManagers() {
    return connection.promise().query(
        // "SELECT id, last_name from employee where manager_id=0;"
        "select id, concat(last_name, ' ', first_name) as mgr from employee where manager_id=0;" 
        // "select id, last_name, first_name from employee where manager_id=0;" 
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
    // console.log('new departmente')
    return connection.promise().query(
        "INSERT INTO department SET ?", department

    )
}

// 22.11.06
function vRole(nRole) {
    //  console.log("db/index   vRole")
    //  console.log("*** "+nRole)

          return connection.promise().query(
             "SELECT id FROM role WHERE id=" + nRole
     )

 }



// If am exporting more than one fuction, HAVE to WRAP IT as OBJECTS
module.exports = {getAllEmployees, getAllRoles, getAllDepartment, insertEmployee, insertRole, insertDepartment, vRole, getManagers}
// module.exports = {getAllEmployees, getAllRoles, getAllDepartment, insertEmployee, insertRole, insertDepartment}