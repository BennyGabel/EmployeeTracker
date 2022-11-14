//  EmployeeTracker/index.js
const fs = require('fs');
const db = require("./db");
const inquirer = require('inquirer');

// Old Sintax
// ----------
// const getAllEmployees = require('./db/index')
// const getRoleQry =  require('./db/index')
// const getDeptQry =  require('./db/index')

// New Sintax. Option 1
// const { getAllEmployees, getAllDepartment, getAllRoles, insertEmployee, insertRole, insertDepartment, vRole} = require('./db/index');
const { getAllEmployees, getAllDepartment, getAllRoles, insertEmployee, insertRole, insertDepartment, getManagers } = require('./db/index');
// const { exit } = require('process');
// const { end } = require('./db/connection');

// New Sintax. Option 2.... Will not work in old code
// import { getAllEmployees, getAllRoles, getAllDepartment } from './db';   //     from './db'   means ./db/index


//just for inquirer

function menuOption() {
    inquirer.prompt([{
        type: 'list',
        name: 'myList',
        message: 'What do you want to do',
        choices: ['View All Employees', 'View All Roles', 'View All Departments', 'Add Employee', 'Add Roles', 'Add Departmensts', 'Quit']
    }
    ]).then(data => {
        let choice = data.myList
        console.log(choice)
        // console.log("** " + data + " **")
        switch (choice) {
            case 'View All Employees':
                viewEmployees()
                break
            case 'View All Roles':
                viewRoles()
                break
            case 'View All Departments':
                viewDepartments()
                break
            case 'Add Employee':
                addEmployee()
                break
            case 'Add Roles':
                console.log("add role")
                addRoles()
                break
            case 'Add Departmensts':
                addDepartment()
                break
            case 'Quit':
                // force the process to end
                process.exit()
        }
    })
}

function viewEmployees() {
    // getAllEmployees().then((data) => { console.log(data) }).then( ()=>menuOption() )
    // getAllEmployees().then((data) => { console.log(data) })
    db.getAllEmployees()
        .then(([data]) => {
            let employee = data;
            console.table(employee);
        })
        .then(() => menuOption())
}

function viewRoles() {
    // db.getAllRoles().then((data) => { console.log(data) }).then( ()=>menuOption )
    db.getAllRoles()
        .then(([data]) => {
            let roles = data;
            console.table(roles);
        })
        .then(() => menuOption())
}

function viewDepartments() {
    // getAllDepartment().then((data) => { console.log(data) }).then( ()=>menuOption )
    db.getAllDepartment()
        .then(([data]) => {
            let department = data;
            // console.log(department); 
            console.table(department);
        })
        .then(() => menuOption())
}

// Working
// Testing BEG
// async/await
function addEmployee() {
    db.getManagers().then(([aryMan]) => {
        let manager = aryMan;

        // console.log(manager)

        const mngrChoices = manager.map(({id, mgr }) => ({

        // last: last_name,
        name: mgr,   // first_name, 
        value: id
    }))
    mngrChoices.push({name:'None', value: 0})
    console.log(mngrChoices)
        db.getAllRoles().then(([data]) => {
            let roles = data;
            const roleChoices = roles.map(({id, title}) => ({
                name: title,
                value: id
            }))
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'first_name',
                    message: 'What is the first name?'
                },
                {
                    type: 'input',
                    name: 'last_name',
                    message: 'What is the last name?'
                },
                {
                    type: 'list',
                    name: 'role_id',
                    message: 'What is the role?',
                    choices: roleChoices
                },
                {
                    // type: 'input',
                    type: 'list', 
                    name: 'manager_id',
                    message: 'What is the manager?',
                    choices:  mngrChoices,
                    default: 0 // null
                }
            ]).then(data => {
                insertEmployee(data).then(() => menuOption())
                
            })
        })
    })}






function addRoles() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary?'
        },
        {
            type: 'input',
            name: 'department_id',
            message: 'What is the department?'
        }
    ]).then(data => {
        insertRole(data)
    }).then(() => menuOption())
}




function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the department?'
        }
    ]).then(data => {
        console.log("Call insertDepartment")
        insertDepartment(data)
    }).then(() => menuOption())

}


menuOption()

