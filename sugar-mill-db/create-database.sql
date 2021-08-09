USE master
GO
IF NOT EXISTS (
   SELECT name
   FROM sys.databases
   WHERE name = N'sugarmilldb'
)
CREATE DATABASE [sugarmilldb]
GO