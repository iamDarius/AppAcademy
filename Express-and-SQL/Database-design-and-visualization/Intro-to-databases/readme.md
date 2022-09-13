# Intro to Databases

## The role of the database
Previously, all data that the server works was declared right in the server. So every time the server needed to be reset, the data would be cleared. The data was only available as long as the server was running.

This would not work for any production env where data needs to be persisted. If the server went down, all data changes would be gone forever!

Databases hold collections of data that are stored separately from the server. This 
![](https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Module-SQL/assets/intro-db-related-boxes.png)

## What is SQL
Standa for "Structured Query Language.