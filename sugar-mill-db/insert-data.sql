USE Cane_Loads
GO

ALTER TABLE Growers drop COLUMN UniqueId
ALTER TABLE Growers ADD GrowerId INT UNIQUE IDENTITY(1,1) not NULL
alter table Growers add CONSTRAINT grower_pk PRIMARY KEY (GrowerId)

ALTER TABLE Growers   
ADD CONSTRAINT unique_email UNIQUE (EmailAddress); 
-- Eamil address needs to be set to UNIQUE
insert into Growers (EmailAddress, password, Users_Name, CompanyName) VALUES ('jbcooper@gmail.com', 'asdfwe', 'Apple Juice', 'Deep South Growers');
insert into Growers (EmailAddress, password, Users_Name, CompanyName) VALUES ('jamesjameson@yahoo.com', 'cdsget', 'Orange Juice', 'Deep North Growers');
insert into Growers (EmailAddress, password, Users_Name, CompanyName) VALUES ('outlook@outlook.com', 'aaassddffe', 'Pineapple Juice', 'Deep East Growers');
insert into Growers (EmailAddress, password, Users_Name, CompanyName) VALUES ('flaberghasted@flaberghasted.com', 'ccddffgg', 'Coffee', 'Deep West Growers');
insert into Growers (EmailAddress, password, Users_Name, CompanyName) VALUES ('placeholerData@fake.com', 'qwererweqw', 'Joe Mama', 'Gulfport');
insert into Growers (EmailAddress, password, Users_Name, CompanyName) VALUES ('dtrump@gmail.com', 'asdfwe', 'Milk', 'Deep South Growers');
insert into Growers (EmailAddress, password, Users_Name, CompanyName) VALUES ('anothery@yahoo.com', 'cdsget', 'Seven dust', 'Deep North Growers');
insert into Growers (EmailAddress, password, Users_Name, CompanyName) VALUES ('fredrik@outlook.com', 'aaassddffe', 'Hinder', 'Deep East Growers');
insert into Growers (EmailAddress, password, Users_Name, CompanyName) VALUES ('whatd@flaberghasted.com', 'ccddffgg', 'Billy Joel', 'Deep West Growers');
insert into Growers (EmailAddress, password, Users_Name, CompanyName) VALUES ('NOtAVirus@fake.com', 'qwererweqw', 'Stone temple pilots', 'Gulfport');

-- house keeping
ALTER TABLE Mills DROP COLUMN MillId
ALTER TABLE Mills ADD id INT UNIQUE IDENTITY(1,1) not NULL
ALTER TABLE Mills ADD CONSTRAINT mill_pk PRIMARY KEY (id)

insert into Mills (Mill_Name) VALUES ('Sugar sugar =');
insert into Mills (Mill_Name) VALUES ( 'Teabag suagr ');
insert into Mills (Mill_Name) VALUES ( 'ice tea sugar ');
insert into Mills (Mill_Name) VALUES ( 'that one fake sugar ');
insert into Mills (Mill_Name) VALUES( 'chocolate ');

-- house keeping
ALTER TABLE Grower_Mill drop COLUMN UniqueId
ALTER TABLE Grower_Mill ADD UniqueId INT IDENTITY(1,1) not NULL
alter table Grower_Mill add CONSTRAINT UniqueId_pk PRIMARY KEY (UniqueId)

insert into Grower_Mill(MillId) VALUES (1)
insert into Grower_Mill(MillId) VALUES (2)
insert into Grower_Mill(MillId) VALUES (3)
insert into Grower_Mill(MillId) VALUES (4)
insert into Grower_Mill(MillId) VALUES (5)

--ALTER TABLE dbo.doc_exa ADD column_b VARCHAR(20) NULL, column_c INT NULL ;
alter table dbo.Cane_Loads ADD IsAltered BIT DEFAULT 'FALSE';
ALTER TABLE dbo.Cane_Loads ADD LastUpdatedBy VARCHAR(50) NULL;

alter table Cane_Loads add CONSTRAINT LoadId_pk PRIMARY KEY (id)

-- add a bit flag for altered. UserId (last updated by) [useraccount/unique id] 
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
INSERT INTO Cane_Loads (MillId, MillCR, GrowerId, GrowerName, TractId, TractName, HaulerId, HaulerName, TruckId, TrailerId, GrossWt, TareWt, NetWt, GrossTime, TareTime, OverWeight)
VALUES(5, 400, 2, 'trash boat', 'Ape Jui','MacAmileck', 'Littlk', 'abc123', 'James', 'abc 123', '4443kl', '388lbs', '333lbs', GETDATE(), GETDATE(), 1);



create table Tracts (
    id INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
    MillId INT,
    TractId varchar(10),
    TractName varchar(50)
);

-- Tracts of land. ID specifiy's a specific one. Tract name and Tract id(?) is required to change each load.
insert into Tracts (MillId, TractId, TractName)
VALUEs (3, 'MackTruck', 'Morgan City');
insert into Tracts (MillId, TractId, TractName)
VALUEs (4, 'MackTruck', 'Houma');
insert into Tracts (MillId, TractId, TractName)
VALUEs (5, 'MackTruck', 'by the tree');
insert into Tracts (MillId, TractId, TractName)
VALUEs (1, 'MackTruck', 'OleJenkinsPlace');
insert into Tracts (MillId, TractId, TractName)
VALUEs (3, 'MackTruck', 'Jamestown');
insert into Tracts (MillId, TractId, TractName)
VALUEs (2, 'someting', 'CharlieKelly');
insert into Tracts (MillId, TractId, TractName)
VALUEs (3, 'other', 'Morgan City');
insert into Tracts (MillId, TractId, TractName)
VALUEs (4, 'than', 'Houma');
insert into Tracts (MillId, TractId, TractName)
VALUEs (5, 'the', 'by the tree');
insert into Tracts (MillId, TractId, TractName)
VALUEs (1, 'shit', 'OleJenkinsPlace');
insert into Tracts (MillId, TractId, TractName)
VALUEs (3, 'aye', 'Jamestown');
insert into Tracts (MillId, TractId, TractName)
VALUEs (2, 'said', 'CharlieKelly');

alter TABLE Cane_Loads
add CONSTRAINT fk_millid FOREIGN KEY (MillId) REFERENCES Mills (id)


select * from Cane_Loads where id = 5
select * from Growers
select * from Grower_Mill
select * from Mills
select * from Tracts

ALTER DATABASE [Cane_Loads] SET OFFLINE WITH ROLLBACK AFTER 25 SECONDS
GO

DROP DATABASE Cane_Loads [;]