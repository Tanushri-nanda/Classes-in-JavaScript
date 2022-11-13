class Employee {
  // creates a class named employee
  constructor(name, id, salary, experience) {
    //has four initial properties name,id,salary
    this.name = name;
    this.id = id;
    this.salary = salary;
    this.experience = experience;
  }
  get getSalary() {
    //using getter to get salary
    return this.salary;
  }
  //o/p: emp1.getSalary = 25000
  set setSalary(value) {
    //using setter to set the salary
    this.salary = value;
  }
  //o/p: emp1.setSalary = 50000 ==50000
  //o/p: emp1.getSalary = 50000
  //method declaration
  idNumber() {
    return this.id;
  }
  //o/p:emp1.idNumber()  114
}
let emp1 = new Employee("Abhi", 114, 25000, 8);
//o/p: emp1 = Employee {name: 'Abhi', id: 114, salary: 25000, experience: 8}
let emp2 = new Employee("avinash", 678, 30000, 9);

//------------------------inheritance------------------------------------

class Product {
  constructor(itemName) {
    this.itemName = itemName;
  }
  getItemName() {
    return this.itemName + " is a product";
  }
}
class Furniture extends Product {
  constructor(itemName) {
    super(itemName); //calls parent class constructor
  }
  getItemName() {
    return this.itemName + " is a furniture";
  }
}
let pen = new Product("pen");
let chair = new Furniture("chair");
