//Task 1

let empName = "dattatreya reddy";
const empID = "EMP101";
let department = "Development";
let salary = 50000;
const isPerEmployee = true;

console.log(`Employee Details
----------------
name       : ${empName}
iD         : ${empID}
Department : ${department}
salary     : ${salary}
permanent  : ${isPerEmployee}`);

// Task 2
let skills = ["HTML", "CSS", "JavaScript", "React", "Git", "Node.js"];

console.log("first Skill :", skills[0]);
console.log("third Skill :", skills[2]);
console.log("last Skill  :", skills[skills.length - 1]);
console.log("total Skills:", skills.length);

// Task 3
const company = {
    companyName: "Stackly",
    location: "Bangalore",
    employees: 150,
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"]
};

console.log("company Name      :", company.companyName);
console.log("location          :", company.location);
console.log("second technology :", company.technologies[1]);
console.log("total technologies:", company.technologies.length);

// Task 4
let basicSalary = 30000;
let bonus = 5000;
let totalSalary = basicSalary + bonus;
let tax = totalSalary * 0.10;
let finalSalary = totalSalary - tax;

console.log("basic Salary :", basicSalary);
console.log("bonus        :", bonus);
console.log("total Salary :", totalSalary);
console.log("tax (10%)    :", tax);
console.log("final Salary :", finalSalary);

// Task 5
let attendance = 92;
let result = attendance >= 75 ? "Eligible for Exam" : "Not Eligible";

console.log("attendance :", attendance);
console.log("status     :", result);

// Task 6
let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
    console.log("login successful");
} else {
    console.log("invalid credentials");
}

// Task 7
let productName = "Laptop";
let productPrice = 45000;
let quantity = 2;
let totalBill = productPrice * quantity;

console.log("product  :", productName);
console.log("price    :", productPrice);
console.log("quantity :", quantity);
console.log("total    :", totalBill);

// Task 8
let visitors = 100;

console.log("initial value :", visitors); 
console.log("pre increment :", ++visitors); 
console.log("post increment:", visitors++); 
console.log("After Post Increment:", visitors); 
console.log("pre decrement :", --visitors); 
console.log("post decrement:", visitors--); 
console.log("After Post decrement:", visitors); 

// Task 9
console.log(10 == "10");    // true

console.log(10 === "10");   // false

console.log(20 != "20");    // false

console.log(20 !== "20");   // true

console.log(5 < 10);        // true

console.log(15 >= 20);      // false

console.log(100 <= 100);    // true

// Task 10
let en = prompt("Enter Employee Name");
let ea = prompt("Enter Employee Age");
let jc = confirm("Do you want to join our company?");
if (jc) {
    alert("Welcome " + en);
} else {
    alert("Thank You");
}

//------------------------------------------------------------------------------------------------//
// final task
let un = prompt("Enter Username");
let pw = prompt("Enter Password");

let join = confirm("Do you want to access Employee Portal?");

if (join) {

    let emp = {
        name: "Dattatreya Reddy",
        id: "EMP101",
        dept: "Development",
        exp: 1,
        sal: 50000
    };

    let skills = ["HTML", "CSS", "JavaScript", "React", "Git", "Node.js"];

    let att = 85;
    let examStatus = att >= 75 ? "Eligible" : "Not Eligible";

    let loginStatus =
        (un === "admin" && pw === "12345")
            ? "success"
            : "failed";

    let bonus = emp.sal * 0.10;
    let finalSalary = emp.sal + bonus;

    let company = {
        name: "Stackly",
        location: "Bangalore"
    };

    alert("Welcome " + emp.name);

    console.log("==============================");
    console.log("      EMPLOYEE PORTAL");
    console.log("==============================");
    console.log("");
    console.log("Employee Name : " + emp.name);
    console.log("Employee ID   : " + emp.id);
    console.log("Department    : " + emp.dept);
    console.log("Experience    : " + emp.exp + " Year");
    console.log("Salary        : ₹" + emp.sal);
    console.log("Bonus         : ₹" + bonus);
    console.log("Final Salary  : ₹" + finalSalary);
    console.log("Skills        : " + skills.join(", "));
    console.log("Attendance    : " + att + "%");
    console.log("Exam Status   : " + examStatus);
    console.log("Login Status  : " + loginStatus);
    console.log("Company       : " + company.name);
    console.log("Location      : " + company.location);
    console.log("==============================");

} else {
    alert("Thank You");
}
 

//------------------------------------------------------------------------------------------------//
//Bonus Task
let sn = prompt("Enter Student Name");
let rn = prompt("Enter Roll Number");

let marks = [85, 90, 78, 88, 95];

let stu = {
    name: sn,
    rollNo: rn,
    school: "Narayana School"
};

let total = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];
let avg = total / marks.length;

let grade =
    avg >= 90 ? "A+" :
    avg >= 80 ? "A" :
    avg >= 70 ? "B" :
    avg >= 60 ? "C" : "fail";

let studentResult = avg >= 35 ? "Pass" : "fail";

let view = confirm("Do you want to view the Report Card?");

alert(`Welcome ${stu.name}`);

console.log("==============================");
console.log("      STUDENT REPORT CARD");
console.log("==============================");
console.log("student Name :", stu.name);
console.log("roll Number  :", stu.rollNo);
console.log("school       :", stu.school);
console.log("marks        :", marks);
console.log("total Marks  :", total);
console.log("average      :", avg);
console.log("grade        :", grade);
console.log("result       :", studentResult);
console.log("view Status  :", view);
console.log("==============================");