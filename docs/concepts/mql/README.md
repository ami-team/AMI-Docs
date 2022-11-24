# Introduction
## What is MQL ?
MQL is a domain specific language for executing queries on a Relational DataBase Management System (RDBMS) closely to spoken language.
Initially proposed by gLite, a middleware project for grid computing at LHC experiments, the specification was extended by the AMI team.

## Why using MQL?
Database experts use SQL for querying data, having the knowledge of the database structure that is usually hidden to end-users.
Dedicated to non-experts, MQL provides a way for querying data with a simplified syntax less prone to error.

To illustrate the difference between MQL and SQL, let use this very simple database schema.

### SQL query

SQL queries are using catalog / table / field paradigms.

"parents" and "children" are 2 database tables.
"parents.name", "parents.id", "children.parentFK", "children"."age" are some fields of these tables.

An expert knows that the content of parents and children tables are linked by some special fields:
- The "parent" key "id"
- The "children" foreign key "parentFK"

Knowing the structure of the database, an expert would write the following SQL query to get the list of parents with children beeing 10 years old and more.

```sql
SELECT parents.name 
FROM parents, children 
WHERE parents.id = children.parentFK AND children.age >= 10 
```
### MQL query

MQL queries are using entity paradigms.

- "parents" represents... the parents.
- "children" represents... the children.
- "name" and "age" are respectively two characteristic of these human people

The MQL system knows the relation between some parents and their children.
Ignoring how the data are stored, an end-user would just have to "ask" the system, which has this knowledge, using an MQL query close to a spoken langage:

```sql
SELECT parents.name 
WHERE children.age >= 10 
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