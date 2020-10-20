// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern {
    constructor(name, id, email, school) {
        this.school = school;
        this.role = "Intern";
    }

    getRole() {
        return this.role;
    }

    getSchool() {
        return this.school;
    }
}


module.exports = Intern;