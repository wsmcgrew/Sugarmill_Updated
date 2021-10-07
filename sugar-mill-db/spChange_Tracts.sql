USE Cane_Loads;  
GO  
CREATE PROCEDURE spChangeTracts
    @id INT,
    @TractName VARCHAR(50),
    @Tractid VARCHAR(50),
    @IsAltered BIT,
    @LastUpdatedBy varchar(50)
AS   

    SET NOCOUNT ON;  
    update Cane_Loads
    set LastUpdatedBy = @LastUpdatedBy, TractName = @TractName, IsAltered = 1, TractId = @TractId
    WHERE id = @id
GO 

select * from Tracts