
-- Eamil address needs to be set to UNIQUE
insert into Growers (EmailAddress, password, Users_Name, CompanyName) VALUES ('jbcooper@gmail.com', 'asdfwe', 'Apple Juice', 'Deep South Growers');
insert into Growers (EmailAddress, password, Users_Name, CompanyName) VALUES ('jamesjameson@yahoo.com', 'cdsget', 'Orange Juice', 'Deep North Growers');
insert into Growers (EmailAddress, password, Users_Name, CompanyName) VALUES ('outlook@outlook.com', 'aaassddffe', 'Pineapple Juice', 'Deep East Growers');
insert into Growers (EmailAddress, password, Users_Name, CompanyName) VALUES ('flaberghasted@flaberghasted.com', 'ccddffgg', 'Coffee', 'Deep West Growers');
insert into Growers (EmailAddress, password, Users_Name, CompanyName) VALUES ('placeholerData@fake.com', 'qwererweqw', 'Joe Mama', 'Gulfport');

insert into Mills (Mill_Name) VALUES ('Sugar sugar =');
insert into Mills (Mill_Name) VALUES ( 'Teabag suagr ');
insert into Mills (Mill_Name) VALUES ( 'ice tea sugar ');
insert into Mills (Mill_Name) VALUES ( 'that one fake sugar ');
insert into Mills (Mill_Name) VALUES( 'chocolate ');

insert into Grower_Mill(MillId, GrowerMillId) VALUES (1, 1)
insert into Grower_Mill(MillId, GrowerMillId) VALUES (2, 2)
insert into Grower_Mill(MillId, GrowerMillId) VALUES (3, 3)
insert into Grower_Mill(MillId, GrowerMillId) VALUES (4, 4)
insert into Grower_Mill(MillId, GrowerMillId) VALUES (5, 5)


INSERT INTO Cane_Loads (MillId, MillCR, GrowerId, GrowerName, TractId, TractName, HaulerId, HaulerName, TruckId, TrailerId, GrossWt, TareWt, NetWt, GrossTime, TareTime, OverWeight)
VALUES(1, 400, 5, '12345', 'Apple Jui','MackTruck', 'Big mack', 'HaulerId', 'Mr Truckr','abc 123', '4443kl', '388lbs', '333lbs', GETDATE(), GETDATE(), 0);
INSERT INTO Cane_Loads (MillId, MillCR, GrowerId, GrowerName, TractId, TractName, HaulerId, HaulerName, TruckId, TrailerId, GrossWt, TareWt, NetWt, GrossTime, TareTime, OverWeight)
VALUES(2, 400, 5, '12345', 'Apple Jui','MackTruck', 'Big mack', 'HaulerId', 'Mrs truck', 'abc 123', '4443kl', '388lbs', '333lbs', GETDATE(), GETDATE(), 0);
INSERT INTO Cane_Loads (MillId, MillCR, GrowerId, GrowerName, TractId, TractName, HaulerId, HaulerName, TruckId, TrailerId, GrossWt, TareWt, NetWt, GrossTime, TareTime, OverWeight)
VALUES(3, 400, 5, '12345', 'Apple Jui','MackTruck', 'Big mack', 'HaulerId', 'Truck jr.', 'abc 123', '4443kl', '388lbs', '333lbs', GETDATE(), GETDATE(), 1);
INSERT INTO Cane_Loads (MillId, MillCR, GrowerId, GrowerName, TractId, TractName, HaulerId, HaulerName, TruckId, TrailerId, GrossWt, TareWt, NetWt, GrossTime, TareTime, OverWeight)
VALUES(4, 400, 2, '12345', 'Apple Jui','MackTruck', 'Big mack', 'HaulerId', 'LilSizzy', 'abc 123', '4443kl', '388lbs', '333lbs', GETDATE(), GETDATE(), 1);
INSERT INTO Cane_Loads (MillId, MillCR, GrowerId, GrowerName, TractId, TractName, HaulerId, HaulerName, TruckId, TrailerId, GrossWt, TareWt, NetWt, GrossTime, TareTime, OverWeight)
VALUES(5, 400, 2, '12345', 'Apple Jui','MackTruck', 'Big mack', 'HaulerId', 'James', 'abc 123', '4443kl', '388lbs', '333lbs', GETDATE(), GETDATE(), 1);

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
