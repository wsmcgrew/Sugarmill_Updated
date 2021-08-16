
RESTORE DATABASE Cane_Loads FROM DISK = '/var/backups/Cane_Loads.bak' WITH FILE = 1,
MOVE 'Cane_Loads' TO '/var/opt/mssql/data/Cane_Loads.mdf',
MOVE 'Cane_Loads_log' TO '/var/opt/mssql/data/Cane_Loads_log.ldf'
GO