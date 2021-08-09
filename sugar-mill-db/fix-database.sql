ALTER TABLE Growers drop COLUMN UniqueId
ALTER TABLE Growers ADD GrowerId INT IDENTITY(1,1) not NULL
alter table Growers add CONSTRAINT grower_pk PRIMARY KEY (GrowerId)

insert into Growers (EmailAddress, password, Users_Name, CompanyName) VALUES ('jbcooper@gmail.com', 'asdfwe', 'Apple Juice', 'Deep South Growers');
insert into Growers (EmailAddress, password, Users_Name, CompanyName) VALUES ('jamesjameson@yahoo.com', 'cdsget', 'Orange Juice', 'Deep North Growers');
insert into Growers (EmailAddress, password, Users_Name, CompanyName) VALUES ('outlook@outlook.com', 'aaassddffe', 'Pineapple Juice', 'Deep East Growers');
insert into Growers (EmailAddress, password, Users_Name, CompanyName) VALUES ('flaberghasted@flaberghasted.com', 'ccddffgg', 'Coffee', 'Deep West Growers');
insert into Growers (EmailAddress, password, Users_Name, CompanyName) VALUES ('placeholerData@fake.com', 'qwererweqw', 'Joe Mama', 'Gulfport');

ALTER TABLE Mills DROP COLUMN MillId
ALTER TABLE Mills ADD MillId INT IDENTITY(1,1) not NULL
ALTER TABLE Mills ADD CONSTRAINT mill_pk PRIMARY KEY (MillId)

insert into Mills (Mill_Name) VALUES ('Sugar sugar ');
insert into Mills (Mill_Name) VALUES ( 'Teabag suagr ');
insert into Mills (Mill_Name) VALUES ( 'ice tea sugar ');
insert into Mills (Mill_Name) VALUES ( 'that one fake sugar ');
insert into Mills (Mill_Name) VALUES( 'chocolate ');

ALTER TABLE Grower_Mill drop COLUMN MillId
ALTER TABLE Grower_Mill ADD MillId INT IDENTITY(1,1) not NULL
alter table Grower_Mill add CONSTRAINT grow_mill_pk PRIMARY KEY (MillId)

insert into Grower_Mill(MillId) VALUES (1)
insert into Grower_Mill(MillId) VALUES (2)
insert into Grower_Mill(MillId) VALUES (3)
insert into Grower_Mill(MillId) VALUES (4)
insert into Grower_Mill(MillId) VALUES (5)


--ALTER TABLE dbo.Cane_Loads drop COLUMN UniqueId
--ALTER TABLE dbo.Cane_Loads ADD UniqueId INT IDENTITY(1,1) not NULL
--alter table dbo.Cane_Loads add CONSTRAINT cane_load_pk PRIMARY KEY (CaneLoadId)

INSERT INTO dbo.Cane_Loads (MillId, MillCR, GrowerId, GrowerName, TractId, TractName, HaulerId, HaulerName, TruckId, TrailerId, GrossWt, TareWt, NetWt, GrossTime, TareTime, OverWeight)
VALUES(1, 400, 5, '12345', 'Apple Jui','MackTruck', 'Big mack', 'HaulerId', 'HawlerName', 'abc 123', '4443kl', '388lbs', '333lbs', GETDATE(), GETDATE(), 0);
INSERT INTO dbo.Cane_Loads (MillId, MillCR, GrowerId, GrowerName, TractId, TractName, HaulerId, HaulerName, TruckId, TrailerId, GrossWt, TareWt, NetWt, GrossTime, TareTime, OverWeight)
VALUES(2, 400, 5, '12345', 'Apple Jui','MackTruck', 'Big mack', 'HaulerId', 'HawlerName', 'abc 123', '4443kl', '388lbs', '333lbs', GETDATE(), GETDATE(), 0);
INSERT INTO dbo.Cane_Loads (MillId, MillCR, GrowerId, GrowerName, TractId, TractName, HaulerId, HaulerName, TruckId, TrailerId, GrossWt, TareWt, NetWt, GrossTime, TareTime, OverWeight)
VALUES(3, 400, 5, '12345', 'Apple Jui','MackTruck', 'Big mack', 'HaulerId', 'HawlerName ', 'abc 123', '4443kl', '388lbs', '333lbs', GETDATE(), GETDATE(), 0);
INSERT INTO dbo.Cane_Loads (MillId, MillCR, GrowerId, GrowerName, TractId, TractName, HaulerId, HaulerName, TruckId, TrailerId, GrossWt, TareWt, NetWt, GrossTime, TareTime, OverWeight)
VALUES(4, 400, 5, '12345', 'Apple Jui','MackTruck', 'Big mack', 'HaulerId', 'HawlerName', 'abc 123', '4443kl', '388lbs', '333lbs', GETDATE(), GETDATE(), 0);
INSERT INTO dbo.Cane_Loads (MillId, MillCR, GrowerId, GrowerName, TractId, TractName, HaulerId, HaulerName, TruckId, TrailerId, GrossWt, TareWt, NetWt, GrossTime, TareTime, OverWeight)
VALUES(5, 400, 5, '12345', 'Apple Jui','MackTruck', 'Big mack', 'HaulerId', 'HawlerName', 'abc 123', '4443kl', '388lbs', '333lbs', GETDATE(), GETDATE(), 0);


select * from Growers;
select * from Mills;
select * from Cane_Loads;
select * from Grower_Mill;
select * from LoadToProcess;
SELECT * from Tracts;