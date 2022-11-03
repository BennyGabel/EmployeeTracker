const fs = require('fs');

const inquirer = require('inquirer');

// Old Sintax
// ----------
// const getAllEmployees = require('./db/index')
// const getRoleQry =  require('./db/index')
// const getDeptQry =  require('./db/index')

// New Sintax. Option 1
const { getAllEmployees, getAllDepartment, getAllRoles, insertEmployee, insertRole, insertDepartment } = require('./db/index')

// New Sintax. Option 2.... Will not work in old code
// import { getAllEmployees, getAllRoles, getAllDepartment } from './db';   //     from './db'   means ./db/index


//just for inquirer

function start() {
    inquirer.prompt([{
        type: 'list',
        name: 'myList',
        message: 'What do you want to do',
        choices: ['View All Employees', 'View All Roles', 'View All Departmens', 'Add Employee', 'Add Roles', 'Add Departmensts']
    }]).then(data => {
        switch (data) {
            case 'View All Employees':
                viewEmployees()
                break
            case 'View All Roles':
                viewRoles()
                break
            case 'View All Departmensts':
                viewDepartments()
            case 'Add Employee':
                addEmployee()
                break
            case 'AddRoles':
                addRoles()
                break
            case 'Add Departmensts':
                addDepartment()
                break



        }
    })
}

function viewEmployees() {
    getAllEmployees().then((data) => { console.log(data) })
}

function viewRoles() {
    getAllRoles().then((data) => { console.log(data) })
}

function viewDepartments() {
    getAllDepartment().then((data) => { console.log(data) })
}

function addEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'first',
            message: 'What is the first name?'
        },
        {
            type: 'input',
            name: 'last',
            message: 'What is the last name?'
        },
        {
            type: 'input',
            name: 'role',
            message: 'What is the role?'
        },
        {
            type: 'input',
            name: 'department',
            message: 'What is the department?'
        }
    ]).then(data => {
        insertEmployee(data)
    })
}

function addRoles() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the first name?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary?'
        },
        {
            type: 'input',
            name: 'department',
            message: 'What is the department?'
        }
    ]).then(data => {
        insertRole(data)
    })
    }

function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'department',
            message: 'Enter the department?'
        }
    ]).then(data => {
        insertDepartment(data)
    })

}

start()


















// const askManager = () => {
//     return inquirer.prompt(
//                            [{
//                                 type: 'input',
//                                 name: 'name',
//                                 message: 'Enter the manager\'s name:',
//                                 validate: nameInput => {
//                                     if (nameInput) {
//                                         return true;
//                                     } else {
//                                         console.log('Please enter manager\'s name!!');
//                                         return false;
//                                     }
//                                 }
//                             },
//                             {
//                                 type: 'input',
//                                 name: 'EmployeeId',
//                                 message: 'Enter the manager\'s id:'
//                             },
//                             {
//                                 type: 'input',
//                                 name: 'emailAddress',
//                                 // Please note email validation
//                                 message: 'Enter the manager\'s email:',
//                                 validate: function(email)
//                                 {
//                                     // Regex mail check (return true if valid mail)
//                                     return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
//                                 }

//                             },
//                             {
//                                 type: 'input',
//                                 name: 'officeNumber',
//                                 message: 'Enter the manager\'s office number:'
//                             }
//                            ]
//                           )
//                          }
// End function     askManager    ---------------------------------------------
