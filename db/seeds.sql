use employeeTracker;

INSERT INTO department (name) values 
("Sales")

INSERT INTO department (name) values 
("Engineering")

INSERT INTO department (name) values 
("Finance")

INSERT INTO department (name) values 
("Legal")


INSERT INTO role (title, salary, department_id) values 
("Sales Lead", 100000, 1);

INSERT INTO role (title, salary, department_id) values 
("Sales Person", 80000, 1);

INSERT INTO role (title, salary, department_id) values 
("Lead Engineer", 150000, 2);

INSERT INTO role (title, salary, department_id) values 
("Software Engineer", 120000, 2);

INSERT INTO role (title, salary, department_id) values 
("Accountan Manager", 160000, 3);

INSERT INTO role (title, salary, department_id) values 
("Accountant", 125000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
("John", "Doe", 1, 0);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
("Mike", "Chan", 2, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
("Ashley", "Rodriguez", 3, 0);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
("Kevin", "Tupik", 4, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
("Kunal", "Singh", 5, 0)

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
("Malia", "Brown", 6, 5);
