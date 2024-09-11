Overview
This project is a Node.js application that connects to a MySQL database. It includes functionality for managing tasks, with operations to create, read, update, and delete tasks.

Prerequisites
Before you begin, ensure you have met the following requirements:

Node.js (v14 or later)
MySQL Server
MySQL Workbench or any MySQL client

Steps:

1. Clone the Repository
2.Install Dependencies using - "npm install"
3. Set Up MySQL Database
    1-Create a Database: Open MySQL Workbench and execute the following SQL command to create the database:
    CREATE DATABASE tasks;
    2-Create Tables: Execute the SQL script to create the required tables. Save the following SQL code in a file named schema.sql and execute it in MySQL Workbench:
    USE tasks;

    CREATE TABLE task_list (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description LongText NOT NULL,
    date   DATETIME NOT NULL
    );
4. Configure the Database Connection
    Create a configuration file named .env in the root directory of the project and add the following content, adjusting the values as needed:
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=your_mysql_password
    DB_NAME=tasks
    PORT=3000

5.Run the Application
Start the Node.js server with the following command:npm start or node app.js


6. API Endpoints
GET /tasks - Retrieve all tasks
POST /tasks - Create a new task
DELETE /tasks/
- Delete a task by ID




