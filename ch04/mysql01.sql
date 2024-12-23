show databases;

create database company character set utf8mb4 collate utf8mb4_general_ci;

show databases;

use company;

CREATE TABLE emp (
emp_id INT AUTO_INCREMENT PRIMARY KEY, 
 last_name VARCHAR(50),  
job_title VARCHAR(50), 
hire_date DATE,       
 salary DECIMAL(10, 2) 
);

INSERT INTO emp (last_name, job_title, hire_date, salary) VALUES
( '김기태', 'Software Engineer', '2020-05-10', 65000.00),
('김대철', 'Project Manager', '2019-07-01', 85000.00),
( '박령점', 'Analyst', '2021-01-15', 55000.00),
('유순복', 'HR Manager', '2018-09-23', 70000.00),
( '송미선', 'Sales Executive', '2020-10-05', 60000.00);

select * from emp;

commit;

show tables;