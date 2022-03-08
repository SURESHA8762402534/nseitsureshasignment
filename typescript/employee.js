var Employee = /** @class */ (function () {
    function Employee(empcode, name) {
        this.empCode = empcode;
        this.empName = name;
    }
    return Employee;
}());
var emp = new Employee(100, "Steve");

// class Person {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
// }
// class Employee extends Person {
//     empCode: number;
//     constructor(empcode: number, name:string) {
//         super(name);
//         this.empCode = empcode;
//     }
//     displayName(){
//         return console.log("Name = " + this.name +  ", Employee Code = " + this.empCode);
//     }
// }
// let emp = new Employee(100, "Bill");
// emp.displayName(); // Name = Bill, Employee Code = 100
