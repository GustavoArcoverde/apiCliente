let id = 7

export class clientes{
    constructor(name, email, password, payment, club){
        this.id = id++;
        this.name = name;
        this.email = email;
        this.password = password;
        this.payment = payment;
        this.club = club;
    }
}