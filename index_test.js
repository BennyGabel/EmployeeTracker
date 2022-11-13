// const { getAllEmployees, getAllDepartment, getAllRoles, insertEmployee, insertRole, insertDepartment } = require('./db/index')

// console.log( getAllRoles() );

const connection = require('./db/connection')
const db = require("./db");
const { vRole } = require('./db/index');
const fs = require('fs');
const inquirer = require('inquirer');

// validate: role_valid => {

// var cnkRoleId = db.vRole(1)

// console.log (cnkRoleId)

// db.getAllRoles()
// .then(([data]) => { 
//     let roles = data; 
//     console.table(roles);
// })



function addEmployee() {


    
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
            type: 'input',
            name: 'role_id',
            message: 'What is the role?'
/*

            // Wasn't able to get validation
            // -------------------------------
            validate: role_valid => {
                      console.log('1A')
                      console.log(role_valid)

                      var cnkRoleId = db.vRole(role_valid)
                                               .then(data=>{
                                                //console.log(data)
                                                console.log(data+'[][][]')
                                                console.log(chkRoleId)
                                                if (data===[]) {
                                                    console.log('empty')
                                                } else {
                                                    console.log('info')
                                                }

                                                console.log("///"+data.length()+"///")
                                                
                                                })
                                                
                                            
                      
                    //    if(role_valid===null) {
                       if (cnkRoleId) {
                          console.log('data')
                          console.log(cnkRoleId)
                          return true
                       } else {
                          console.log('What is the role?')
                          return false
                       }

*/                       
                    //   console.log(role_id)
                    // //   var cnkRoleId = db.vRole(data.role_valid)



/*    BEG REM                    
                    var cnkRoleId = db.vRole(role_valid).
                                               then(data => {
                                                console.log(data)
                                                console.log(data.map)
                                                })//}
      END REM   */

/*
                      console.log (cnkRoleId)
                      console.log('2A')
                      if (cnkRoleId) {
                        
                        return false
                      } else {
                        return true
                      }
                      
 */
                   //  }  <====
        },
        {
            type: 'input',
            name: 'manager_id',
            message: 'What is the manager?'
        }
    ]).then(data => {

        eval = data.role_valid
        console.log(eval)
        var cnkRoleId = db.vRole(data.role_valid)
        console.log(cnkRoleId)


        insertEmployee(data)
    }).then( ()=>menuOption() )
}


// function qryRoles(pRole) {
function qryRoles() {
    // const sql = `SELECT id FROM role WERE role` ?
    const sql = 'SELECT id FROM role'
    // const params = pRole


/* With Parameter
    // db.query(sql, params, (err, row) => {    //     if (err) {

    //     }
    //     console.log(row)
    // })
*/    

    // db.query(sql, function (err, result, fields) {
        // console.log(db)
    connection.query('SELECT id FROM role ', function (err, results) {
        if (err) { 
            console.log('Error')
        } else {
            /*
            console.log(results)

            var keys = []
        
            for (var result in results) {
                if (results.hasOwnProperty(result)) {

                    console.log(results.hasOwnProperty(result))
                    keys.push(results[id]);
                }

                // a = result[id]
                // b = result[values]

                // console.log("a",a, "b",b)
                console.log("result",result)
                console.log("keys",keys)

            }

              console.log(keys)
              console.log("*********")

              console.log("Object Values    ", Object.values(results))
              console.log("---------")
              console.log("Object Entries   ", Object.entries(results))

              console.log("^^^ Array.from(<object> ^^^")
              console.log(Array.from(results))
*/



        
        }
    })

}

// Works
//--------------------------
// db.vRole(1)
// .then(([data]) => { 
//     console.log('vRole')
//     let roles = data; 
//     console.table(roles);

//     console.log(roles)
// })
//--------------------------

// console.log(db.getAllRoles())


// Temp REM    Call addEmployee
// addEmployee()

// qryRoles(1)
qryRoles()   // Remove parameter

 