FROM mcr.microsoft.com/mssql/server:2019-latest

## CREATES A VOLUME FOR DATA PERSISTENCE
RUN mkdir /var/opt/mssql/data
VOLUME /var/opt/mssql/data

COPY /bak /var/backups

## MOVES CREATE SCRIPTS
COPY startpoint.sh /tmp
COPY restore-database.sql /tmp
## COPY create-database.sql /tmp
## COPY create-tables.sql /tmp

ENTRYPOINT ["/bin/bash", "/tmp/startpoint.sh"]
##RUN (grep -q "Starting database restore" && /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P '$SA_PASSWORD' -d master -i retore-database.sql)
