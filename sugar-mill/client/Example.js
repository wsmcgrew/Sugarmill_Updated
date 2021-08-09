/* eslint-disable no-unused-vars */
var Connection = require("tedious").Connection;
var Request = require("tedious").Request;

var config = {
  server: "localhost",
  authentication: {
    type: "default",
    options: {
      userName: "sa",
      password: "MyDatabasePassword123"
    }
  },
  options: {
    port: 1433 // Default Port
  }
};

const connection = new Connection(config);

connection.on("connect", err => {
  if (err) {
    console.log("Connection Failed");
    throw err;
  }

  executeStatement("select * from [Cane_Loads].[dbo].[Cane_Loads]");
});

connection.connect();

function executeStatement(inQuery) {
  const request = new Request(
    inQuery,
    (err, rowCount) => {
      if (err) {
        throw err;
      }

      console.log("DONE!");
      connection.close();
    }
  );

  // Emits a 'DoneInProc' event when completed.
  request.on("row", columns => {
    columns.forEach(column => {
      if (column.value === null) {
        console.log("NULL");
      } else {
        console.log(column.value);
      }
    });
  });

  request.on("done", rowCount => {
    console.log("Done is called!");
  });

  request.on("doneInProc", (rowCount, more) => {
    console.log(rowCount + " rows returned");
  });

  // In SQL Server 2000 you may need: connection.execSqlBatch(request);
  connection.execSql(request);
}
