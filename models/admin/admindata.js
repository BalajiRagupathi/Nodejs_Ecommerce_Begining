const admindetails = [
    {
        user: "Bala",
        pass: "123"
    }
];

module.exports = class AdminData{

    static fetchAll(){

        return admindetails;
    }
}