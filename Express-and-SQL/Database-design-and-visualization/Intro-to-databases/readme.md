# Intro to Databases

## The role of the database
Previously, all data that your server works was declared right in the server. So every time the server needed to be reset, the data would be cleared. The data was only available as long as the server was running.

This would not work for any production env where data needs to be persisted. If the server went down, all data changes would be gone forever!

Databases hold collections of data that are stored separately from the server. This 
![](https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Module-SQL/assets/intro-db-related-boxes.png)

## What is SQL
Stands for "Structured Query Language.

## Column Constraints
Column types can be considered what are called constraints on columns. These conditions must be met by each entry in the column.

### NULL and NOT NULL
Null is a possible value in a column that represents an empty column value. If you do not want to have any NULL values, you have to specify the column to be NOT NULL when defining it.

### DEFAULT
If you want the column to have a default value when no value is given on insertion, use the DEFAULT constraint.

### PRIMARY KEY
A primary key is a column that contains unique identifiers for each entity in the table. For example, a Social Security Number is unique to a single person and could potentially be used as a primary key on a table that stores data of US citizens.

* An integer primary key optimizes your SQL db for the fastest performance when retrieving data.

### AUTOINCREMENT
It allows the default value to be the next integer in the series. It is commonly used in a primary key column
