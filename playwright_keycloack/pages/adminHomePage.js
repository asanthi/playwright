const { RealmListPage } = require("./realms/RealmListPage");
const { ClientListPage } = require("./clients/ClientListPage");
const {UserListPage} = require("./users/UserListPage")

exports.AdminHomePage = class AdminHomePage{
    
    constructor(page){
        this.page = page;
        this.manageRealms = new RealmListPage(page)
        this.manageClients = new ClientListPage(page)
        this.manageUsers = new UserListPage(page)
    }



}
