USE Cane_Loads
GO

ALTER TABLE Growers drop COLUMN UniqueId
ALTER TABLE Growers ADD GrowerId INT IDENTITY(1,1) not NULL
alter table Growers add CONSTRAINT grower_pk PRIMARY KEY (GrowerId)

-- Eamil address needs to be set to UNIQUE
insert into Growers (EmailAddress, password, Users_Name, CompanyName) VALUES ('jbcooper@gmail.com', 'asdfwe', 'Apple Juice', 'Deep South Growers');
insert into Growers (EmailAddress, password, Users_Name, CompanyName) VALUES ('jamesjameson@yahoo.com', 'cdsget', 'Orange Juice', 'Deep North Growers');
insert into Growers (EmailAddress, password, Users_Name, CompanyName) VALUES ('outlook@outlook.com', 'aaassddffe', 'Pineapple Juice', 'Deep East Growers');
insert into Growers (EmailAddress, password, Users_Name, CompanyName) VALUES ('flaberghasted@flaberghasted.com', 'ccddffgg', 'Coffee', 'Deep West Growers');
insert into Growers (EmailAddress, password, Users_Name, CompanyName) VALUES ('placeholerData@fake.com', 'qwererweqw', 'Joe Mama', 'Gulfport');

-- house keeping
ALTER TABLE Mills DROP COLUMN MillId
ALTER TABLE Mills ADD MillId INT IDENTITY(1,1) not NULL
ALTER TABLE Mills ADD CONSTRAINT mill_pk PRIMARY KEY (MillId)

insert into Mills (Mill_Name) VALUES ('Sugar sugar =');
insert into Mills (Mill_Name) VALUES ( 'Teabag suagr ');
insert into Mills (Mill_Name) VALUES ( 'ice tea sugar ');
insert into Mills (Mill_Name) VALUES ( 'that one fake sugar ');
insert into Mills (Mill_Name) VALUES( 'chocolate ');

-- house keeping
ALTER TABLE Grower_Mill drop COLUMN MillId
ALTER TABLE Grower_Mill ADD MillId INT IDENTITY(1,1) not NULL
alter table Grower_Mill add CONSTRAINT grow_mill_pk PRIMARY KEY (MillId)

insert into Grower_Mill(MillId) VALUES (1)
insert into Grower_Mill(MillId) VALUES (2)
insert into Grower_Mill(MillId) VALUES (3)
insert into Grower_Mill(MillId) VALUES (4)
insert into Grower_Mill(MillId) VALUES (5)


INSERT INTO Cane_Loads (MillId, MillCR, GrowerId, GrowerName, TractId, TractName, HaulerId, HaulerName, TruckId, TrailerId, GrossWt, TareWt, NetWt, GrossTime, TareTime, OverWeight)
VALUES(1, 400, 5, 'John Grower', 'Apple Jui','MackTruck', 'Big mack', 'HaulerId', 'Mr Truckr','abc 123', '4443kl', '388lbs', '333lbs', GETDATE(), GETDATE(), 0);
INSERT INTO Cane_Loads (MillId, MillCR, GrowerId, GrowerName, TractId, TractName, HaulerId, HaulerName, TruckId, TrailerId, GrossWt, TareWt, NetWt, GrossTime, TareTime, OverWeight)
VALUES(2, 400, 5, 'Game Grower', 'Apple Jui','MackTruck', 'Big mack', 'HaulerId', 'Mrs truck', 'abc 123', '4443kl', '388lbs', '333lbs', GETDATE(), GETDATE(), 0);
INSERT INTO Cane_Loads (MillId, MillCR, GrowerId, GrowerName, TractId, TractName, HaulerId, HaulerName, TruckId, TrailerId, GrossWt, TareWt, NetWt, GrossTime, TareTime, OverWeight)
VALUES(3, 400, 5, 'Richard Skin', 'Apple Jui','MackTruck', 'Big mack', 'HaulerId', 'Truck jr.', 'abc 123', '4443kl', '388lbs', '333lbs', GETDATE(), GETDATE(), 1);
INSERT INTO Cane_Loads (MillId, MillCR, GrowerId, GrowerName, TractId, TractName, HaulerId, HaulerName, TruckId, TrailerId, GrossWt, TareWt, NetWt, GrossTime, TareTime, OverWeight)
VALUES(4, 400, 2, 'James James', 'Apple Jui','MackTruck', 'Big mack', 'HaulerId', 'LilSizzy', 'abc 123', '4443kl', '388lbs', '333lbs', GETDATE(), GETDATE(), 1);
INSERT INTO Cane_Loads (MillId, MillCR, GrowerId, GrowerName, TractId, TractName, HaulerId, HaulerName, TruckId, TrailerId, GrossWt, TareWt, NetWt, GrossTime, TareTime, OverWeight)
VALUES(5, 400, 2, 'Ricky Booby', 'Apple Jui','MackTruck', 'Big mack', 'HaulerId', 'James', 'abc 123', '4443kl', '388lbs', '333lbs', GETDATE(), GETDATE(), 1);


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

insert into LoadToProcess (MillId, MillCR, OldTractId, NewTractId, SubmittedDate, Processed, EmailAddress)
VALUES (5, 400, 'Macckie', 'Mackie', GETDATE(), 0, 'outlook@outlook.com');
insert into LoadToProcess (MillId, MillCR, OldTractId, NewTractId, SubmittedDate, Processed, EmailAddress)
VALUES (4, 400, 'Macckie', 'Mackie', GETDATE(), 0, 'outlook@outlook.com');   
insert into LoadToProcess (MillId, MillCR, OldTractId, NewTractId, SubmittedDate, Processed, EmailAddress)
VALUES (2, 400, 'Macckie', 'Mackie', GETDATE(), 0, 'outlook@outlook.com');
insert into LoadToProcess (MillId, MillCR, OldTractId, NewTractId, SubmittedDate, Processed, EmailAddress)
VALUES (2, 400, 'Macckie', 'Mackie', GETDATE(), 0, 'outlook@outlook.com');
insert into LoadToProcess (MillId, MillCR, OldTractId, NewTractId, SubmittedDate, Processed, EmailAddress)
VALUES (5, 400, 'Macckie', 'Mackie', GETDATE(), 0, 'outlook@outlook.com');

insert into Tracts (MillId, TractId, TractName)
VALUEs (3, 'MackTruck', 'Big mack');
insert into Tracts (MillId, TractId, TractName)
VALUEs (4, 'MackTruck', 'Big mack');
insert into Tracts (MillId, TractId, TractName)
VALUEs (5, 'MackTruck', 'Big mack');
insert into Tracts (MillId, TractId, TractName)
VALUEs (1, 'MackTruck', 'Big mack');
insert into Tracts (MillId, TractId, TractName)
VALUEs (3, 'MackTruck', 'Big mack');
insert into Tracts (MillId, TractId, TractName)
VALUEs (2, 'MackTruck', 'Big mack');
