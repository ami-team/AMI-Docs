# Introduction
## What is MQL ?
MQL is a domain specific language for executing queries on a Relational DataBase Management System (RDBMS) closely to spoken language.  
Initially proposed by gLite, a middleware project for grid computing at LHC experiments, the specification was extended by the AMI team.

## Why using MQL?
Database experts use SQL for querying data, having the knowledge of the database structure that is usually hidden to end-users.  
Dedicated to non-experts, MQL provides a way for querying data with a simplified syntax less prone to error.

### A concrete scenario

You are the boss of the "AMI Music" resellers company. 
All the commercial data are store in the following database schema:

![Demo database schema](./img/demoDB.png "Demo database schemao")


This schema represents how the various information are structured and linked. 
- Your company has employees who take care of your customers. 
- Your customers could buy tracks from album of various artists.
- Your customers have some preferences concerning their favorite music genres but of course could buy any track.

As the boss, you would like to answer the following question:

**Who are my employees taking care of 'New-York' city customers?**

The 2 following sections illustrate how the wanted information could be extracted from the database using either:
- SQL query, in other word a database system specific language that have to be written by an expert with the knowledge of the DB structure
- MQL query, a database agnostic language, that could be written by a non-expert user

### SQL query

SQL queries are using catalog / table / field paradigms.

"Customer" and "Employee" are 2 database tables.
"Customer.LastName", "Customer.CustomerId", "Employee.EmployeeId", "Employee"."BirthDate" are some fields of these tables.

An SQL expert knows that the content of "Customer" and "Employee" tables are linked by some special fields:

- The "Employee" key "EmployeeId", a number to identify an employee.
- The "Customer" foreign key "SupportRepId", a number refering to "EmployeeId" number to identify the employee responsible for the sale service.

**Knowing the structure of the database, an expert would write the following SQL query to answer to the boss question:**

```sql
SELECT Employee.LastName, Employee.FirstName 
FROM Employee, Customers 
WHERE Employee.EmployeeId = Customer.SupportRepId AND Customer.City = 'New-York'
```
### MQL query

MQL queries are using entity paradigms.

- "Employee" represents... the employees.
- "Customer" represents... the customers.
- "LastName", "BirthDate", "City" are respectively 3 information about these human people

The MQL system extract automatically the relations between the employees and their customers, hiding them to the end-user.

**Ignoring how the data are stored, an end-user would just write the following MQL query close to a spoken langage:**

```sql
SELECT Employee.LastName, Employee.FirstName 
WHERE Customer.City = 'New-York' 
```

# The MQL langage
## MQL grammar and concept
### Qids
### Constraint
### Isolation 
## Query Syntax
### SELECT
### UPDATE
### DELETE 