# EmployeeTracker

## Description
  Create and view employer information: Department, Role, Employee
  

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Email](#email)
- [Github](#github)
- [Notes](#notes)
- [Walk through Video](#video)
- [License](#license)


## Installation
1) Pre requisit, having Node js pre installed 
2) Download dependencies:     *"mysql2"*   &   *"inquirer"*       - **npm i**


## Usage
node index.js

![Application](assets/screenshots/Main_Menu.jpg?raw=true)

![Application](assets/screenshots/View_all_Departments.jpg?raw=true)

![Application](assets/screenshots/View_all_Roles.jpg?raw=true)

![Application](assets/screenshots/View_all_Employees.jpg?raw=true)

![Application](assets/screenshots/Add_Employee_&_Update_Role.jpg?raw=true)


## Credits
Author: Benny Gabel


## Email: 
bennygabel@gmail.com


## Github
Github Repository:  (https://github.com/BennyGabel/EmployeeTracker/tree/main)


## Notes: 
The application runs with server express.
Create three tables: Departments, Roles, Employee.

All tables are interrelated:
role.department_id  with department.id
employee.role_id    with role.id
employee.manager_id with employee.id    for positions that are manage (null/0)

In the /assets/screenshots/ directory are 4 screenshots explaining the infromation stored. Information it is stored with codes on the tables, however, are merged/interrelated to show the descriptions

This project is not deployed.


## Video
(https://www.youtube.com/watch?v=ikTM1c8OL4k)


## License  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
Link https://choosealicense.com/licenses/mit/

#### License description
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


