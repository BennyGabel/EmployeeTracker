DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;

CREATE TABLE department ( 
    id              INTEGER AUTO_INCREMENT PRIMARY KEY,
    name            VARCHAR(30));


CREATE TABLE role (
    id             INTEGER AUTO_INCREMENT PRIMARY KEY,
    title          VARCHAR(30),
    salary         INTEGER(10),
    department_id  INTEGER NOT NULL,
    CONSTRAINT fk_dept FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);


CREATE TABLE employee(
    id             INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name     VARCHAR(30),
    last_name      VARCHAR(30),
    role_id        INTEGER NOT NULL ,
    manager_id     INTEGER NULL,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE
);


