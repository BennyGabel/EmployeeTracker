use employeeTracker;

INSERT INTO department (name) values 
("Sales"),
("Engineering"),
("Finance"),
("Legal")


INSERT INTO role (title, salary, department_id) values 
("Sales Lead", 100000, 1),
("Sales Person", 80000, 1),
("Lead Engineer", 150000, 2),
("Software Engineer", 120000, 2),
("Accountan Manager", 160000, 3),
("Accountant", 125000, 3)

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
("John", "Doe", 1, 0),
("Mike", "Chan", 2, 1),
("Ashley", "Rodriguez", 3, 0),
("Kevin", "Tupik", 4, 3),
("Kunal", "Singh", 5, 0),
("Malia", "Brown", 6, 5)
