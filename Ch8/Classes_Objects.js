//OBJECTS
const student = {
    fullName : "Shradha Khapra",
    marks : 94.4,
    printMarks : function(){
        console.log("marks = " , this.marks); // student.marks
    }
};//this is an object. It has some state(variables) and some behavior(functions) inside it.

const employee = {
    calcTax(){
        console.log("Tax rate is 10%.");
    }
};
console.log(employee.calcTax());

const newEmployee = {
    salary : 50000,
    calcTax(){
        console.log("Tax rate is 20%.");
    }
};

newEmployee.__proto__ = employee; // now we can use the methods of employee in newEmployee but if we create a clashing property in the object then the object's property is prioritised
console.log(newEmployee.calcTax());

//-----------------------------------------------------------------------

//CLASSES
class Car{
    constructor(){
        console.log("Creating new object");
    }
    start(){
        console.log("Start");
    }

    stop(){
        console.log("Stop");
    }

    setBrand(brand){
        this.brandName = brand;
    }
}

let fortuner = new Car();
console.log(fortuner.start());
console.log(fortuner.stop());
fortuner.setBrand("fortuner");

let lexus = new Car();
console.log(lexus.start());
console.log(lexus.stop());

//Also there is a constructor that is automatically present if we dont mention it like here whenever new object is formed the constructor is invoked and the function is done

//-----------------------------------------------------------------------
//INHERITANCE

class Parent{
    printHello(){
        console.log("hello OOP");
    }
}

class Child extends Parent{}

let obj = new Child();
console.log(obj.printHello());

class Person{
    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("sleep");
    }

    work(){
        console.log("Do nothing");
    }
}

class Engineer extends Person{
    work(){
        super.eat();//to invoke parent class constructor(basically inside a child class we cant use parents class methods directly we have to use the keyword super)
        console.log("Build something")
    }
}

class Doctor extends Person{
    work(){
        super.sleep();
        console.log("Treat patients");
    }
}
//Btw a clashing function btw parent and child class the child's class function is prioritized

let obj1 = new Engineer();
console.log(obj1.work());
console.log(obj1.eat());
console.log(obj1.sleep());

let obj2 = new Doctor();
console.log(obj2.work());
console.log(obj2.eat());
console.log(obj2.sleep());

//-----------------------------------------------------------------------
//Q1) You are creating a website for your college. Create a class user with 2 properties, name and email. It also has a method called viewdata() that allows user to view website data.
//Q2) Create a new class called admin which inherits from User. Add a new method called editdata to admin that allows it to edit website data.
let data = "Website data"
class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log(data)
    }
}

let student1 = new User("abc", "abc@gmail.com");
let student2 = new User("xyz", "xyz@gmail.com");
console.log(student1);
console.log(student2);
console.log(student1.viewData());

class Admin extends User{
    editData(){
        data = "updated data";
        console.log(data);
    }
}

let admin1 = new Admin("admin", "admin@college.com");
console.log(admin1);
console.log(admin1.editData());