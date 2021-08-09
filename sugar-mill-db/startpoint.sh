#!/bin/bash

sh -c "
echo 'sleeping 20 second'

echo '********************************************************Restoring database'
/opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P $SA_PASSWORD -i /tmp/restore-database.sql
echo '********************************************************Finished setting up databse'
echo '********************************************************Fixing a few things up.'
/opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P $SA_PASSWORD -i /tmp/fix-database.sql
echo '********************************************************fixing a few things up'

exit" &
exec /opt/mssql/bin/sqlservr