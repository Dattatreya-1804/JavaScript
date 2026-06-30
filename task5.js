//Task 1
console.log("Task 1 : Employee Salary ");

function yearlySalary(monthlySalary) {
    return monthlySalary * 12;
}

let salary = yearlySalary(50000);

console.log("Yearly Salary : ₹" + salary);

//task 2
console.log("\n Task 2 : Student Pass or Fail ");

function checkResult(marks) {
    if (marks >= 35) {
        return "Pass";
    } else {
        return "Fail";
    }
}

let result = checkResult(80);

console.log("Marks :", 80);
console.log("Result :", result);

//task 3
console.log("\nTask 3 : Food Bill");

function totalBill(price, quantity) {
    return price * quantity;
}

let bill = totalBill(180, 6);

console.log("Total Bill : ₹" + bill);

//task 4
console.log("\n Task 4 : Welcome Employee ");

function welcomeEmployee(name, department) {
    console.log("Welcome " + name);
    console.log("Department :", department);
}

welcomeEmployee("Datta", "Development");

//task 5
console.log("\n Task 5 : Shopping Discount ");

function finalAmount(price, discount) {
    return price - discount;
}

let amount = finalAmount(5000, 500);

console.log("Final Amount : ₹" + amount);


//task 6

console.log("\n Task 6 : Company Login ");

function dashboard() {
    console.log("Loading Dashboard...");
}

function login(callback) {
    console.log("Login Successful");
    callback();
}

login(dashboard);

//task 7
console.log("\nTask 7 : Food Delivery ");

function foodDelivery(step) {
    step();
}

function orderReceived() {
    console.log("Order Received");
}

function preparingFood() {
    console.log("Preparing Food");
}

function outForDelivery() {
    console.log("Out for Delivery");
}

function delivered() {
    console.log("Delivered");
}

foodDelivery(orderReceived);
foodDelivery(preparingFood);
foodDelivery(outForDelivery);
foodDelivery(delivered);

//task 8
console.log("\nTask 8 : Lucky Draw ");

function* coupons() {
    yield "10%";
    yield "20%";
    yield "50%";
    yield "Better Luck Next Time";
}

let offer = coupons();

console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);

//task 9
console.log("\nTask 9 : Employee Bonus ");

function bonus(salary) {
    return function (bonusAmount) {
        console.log("Total Salary :", salary + bonusAmount);
    };
}

bonus(50000)(5000);

//task 10
console.log("\nTask 10 : Merge Employee Details ");

let employeePersonal = {
    id: 101,
    name: "Dattatreya",
    age: 23
};

let employeeOffice = {
    department: "Development",
    salary: 50000
};

let employee = {
    ...employeePersonal,
    ...employeeOffice
};

console.log(employee);

// task 11
console.log("\nTask 11 : Shopping Cart ");

let cart1 = ["Mobile", "Laptop"];
let cart2 = ["Headphone", "Mouse"];

let totalCart = [...cart1, ...cart2];

console.log("Shopping Cart :", totalCart);

// task 12
console.log("\nTask 12 : Student Marks ");

function student(name, ...marks) {

    let total = 0;

    for (let mark of marks) {
        total += mark;
    }

    let average = total / marks.length;

    console.log("Student :", name);
    console.log("Total Marks :", total);
    console.log("Average :", average);
}

student("Dattatreya", 90, 85, 88, 95);

// task 13

console.log("\n Task 13 : Product Details ");

let product = {
    name: "Laptop",
    price: 65000,
    brand: "Dell",
    stock: 20
};

let { name, price } = product;

console.log("Name :", name);
console.log("Price :", price);

// task 14
console.log("\n Task 14 : Customer Details ");

let customer = [101, "datta", "kadapa", 8074754278];

let [id1, name1, city1] = customer;

console.log("ID :", id1);
console.log("Name :", name1);
console.log("City :", city1);

// task 15
console.log("\n Task 15 : Add Product ");

let cart = ["Mobile", "Laptop"];

cart.push("Headphone");

console.log("Updated Cart :", cart);

// task 16
console.log("\n Task 16 : Remove Last Product ");

let Addcart2 = ["Mobile", "Laptop", "Headphone"];

Addcart2.pop();

console.log("Updated Cart :", Addcart2);

//task 17

console.log("\nTask 17 : Replace Employee ");

let employees = ["abhi", "Amol", "amit", "Datta"];

employees.splice(2, 1, "datta");

console.log("Updated Employees :", employees);

// task 18

console.log("\nTask 18 : Search Product ");

let products = ["Mouse", "Keyboard", "Monitor", "Laptop"];

if (products.includes("Laptop")) {
    console.log("Laptop is Available");
} else {
    console.log("Laptop is Not Available");
}

// task 19

console.log("\nTask 19 : Employee Ranking ");

let salaries = [25000, 45000, 30000, 70000];

salaries.sort(function (a, b) {
    return a - b;
});

console.log("Sorted Salaries :", salaries);

//task 20

console.log("\nTask 20 : Reverse Chat Messages ");

let messages = ["Hi", "Hello", "How are you?", "Good Morning"];

messages.reverse();

console.log("Latest Messages :", messages);

// Bonus Task - Employee Management System

console.log("\n\n Bonus Task Employee Management System \n\n\n");

let employees1 = [
    {
        id: 101,
        name: "dattatreya",
        department: "Development",
        salary: 50000
    },
    {
        id: 102,
        name: "abhi",
        department: "Testing",
        salary: 40000
    }
];

// Add Employee
function addEmployee(id, name, department, salary) {

    employees1.push({
        id: id,
        name: name,
        department: department,
        salary: salary
    });

    console.log("\nEmployee Added Successfully");
}

// View Employees
function viewEmployees() {

    console.log("\n===== Employee List =====");

    employees1.forEach(function(employee) {
        console.log(employee);
    });

}

// Search Employee by ID
function searchEmployee(id) {

    let employee = employees1.find(function(emp) {
        return emp.id === id;
    });

    if (employee) {
        console.log("\nEmployee Found");
        console.log(employee);
    } else {
        console.log("\nEmployee Not Found");
    }

}

// Calculate Salary + Bonus
function salaryBonus(id, bonus) {

    let employee = employees1.find(function(emp) {
        return emp.id === id;
    });

    if (employee) {
        console.log("\nEmployee :", employee.name);
        console.log("Salary :", employee.salary);
        console.log("Bonus :", bonus);
        console.log("Total Salary :", employee.salary + bonus);
    }

}

// Remove Employee
function removeEmployee(id) {

    let index = employees1.findIndex(function(emp) {
        return emp.id === id;
    });

    if (index !== -1) {

        employees1.splice(index, 1);

        console.log("\nEmployee Removed Successfully");

    } else {

        console.log("\nEmployee Not Found");

    }

}

// Sort Employees by Salary
function sortSalary() {

    employees.sort(function(a, b) {
        return a.salary - b.salary;
    });

    console.log("\nEmployees Sorted By Salary");

    console.log(employees);

}

// Find Employee by Name
function findEmployee(name) {

    let employee = employees1.find(function(emp) {
        return emp.name.toLowerCase() === name.toLowerCase();
    });

    if (employee) {
        console.log("\nEmployee Found");
        console.log(employee);
    } else {
        console.log("\nEmployee Not Found");
    }

}

// Display Employee using Destructuring
function employeeDetails(id) {

    let employee = employees.find(function(emp) {
        return emp.id === id;
    });

    if (employee) {

        let { name, department, salary } = employee;

        console.log("\n===== Employee Details =====");

        console.log("Name :", name);
        console.log("Department :", department);
        console.log("Salary :", salary);

    }

}

// Function Calls

viewEmployees();

addEmployee(103, "arjun", "DevOps", 60000);

viewEmployees();

searchEmployee(103);

salaryBonus(103, 5000);

findEmployee("arjun");

sortSalary();

employeeDetails(103);

removeEmployee(102);

viewEmployees();