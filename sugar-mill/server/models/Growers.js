class Grower{
    constructor(EmailAddress,password,Users_Name,CompanyName,GrowerId){
        this.EmailAddress = EmailAddress;
        this.Password = password;
        this.Users_Name = Users_Name;
        this.CompanyName = CompanyName;
        this.GrowerId = GrowerId;
    }
}

//Grower.associate = function(models);

module.exports = Grower;
