class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };
    getName() {
        return this.name
        
    };
    getId() {
        return this.id
        
    };
    getEmail() {
        return this.email
        
    };
    getRole() {
        console.log("Employee")
        return "Employee"
    }
    printEmployee(){
        console.log(this.name)
        console.log(this.id)
        console.log(this.email)
    }
}


module.exports = Employee