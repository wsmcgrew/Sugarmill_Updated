use sugarmilldb
GO
-- start new db tables
create table Growers(
    GrowerUID INT IDENTITY(1,1) NOT NULL,
    EmailAddress varchar(50),
    pw varchar(50),
    GrowerName varchar(50),
    Company varchar(30),
    CONSTRAINT pk_GrowerId PRIMARY KEY(GrowerUID, EmailAddress, GrowerName)
);

create table Mill (
    MillId INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
    MillName varchar(50)
);

-- Attempt to two the two together fur use in CaneLoadsTable
create table GrowerMill (
    MillId INT NOT NULL REFERENCES Mill(MillId) on update cascade,
    GrowerId INT NOT NULL REFERENCES Growers(GrowerId) on update cascade,
);

create table CaneLoadsTable (
   LoadUID INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
   MillId INT NOT NULL REFERENCES Mill(MillId), --FK
   MillCR INT,
   GrowerId INT NOT NULL REFERENCES Growers(GrowerId),
   GrowerName varchar(50),
   TractId varchar(10),
   TractName varchar(50),
   HaulerId varchar(10),
   TruckId varchar(10),
   TrailerId varchar(10),
   GrossWt varchar(50),
   TareWt varchar(50),
   NetWt varchar(50),
   GrossTime datetime,
   TareTime datetime,
   OverWeight bit,
);

create table LoadToProcess (
    ToProcessUID INT,
    MillId INT,
    MillCR INT,
    OldTractId varchar(10), -- This may need a foreign key relations ship with table Tracts
    NewTractId varchar(10), -- This may need a foreign key relations ship with table Tracts
    SubmittedDate datetime,
    Processed bit,
    EmailAddress VARCHAR(50)
);

create table Tracts (
    TractUID INT,
    MillId INT,
    TractId varchar(10),
    TractName varchar(50)
);

Alter TABLE Growers with CHECK
add CONSTRAINT UQ_Growers_EmaillAddress UNIQUE (EmailAddress);

select * from Mill