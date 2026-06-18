// 1. Store employee name using var
var employeeName = "Dattatreya reddy";

// 2. Store employee age using let
let employeeAge = 23;

// 3. Store company name using const
const companyName = "Stackly";
// 4. Print all details
console.log("Employee Name :", employeeName);
console.log("Employee Age :", employeeAge);
console.log("Company Name :", companyName);

// 5. Show popup message
alert("Welcome to Employee Portal");

// 6. Ask employee task completion
let taskCompleted = confirm("Have you completed today's task?");

// Print result
console.log("Task Completed :", taskCompleted);

// 7. Ask employee name
let enteredName = prompt("Enter your name");

// Print entered name
console.log("Entered Name :", enteredName);

// 8. Display employee name on webpage
document.writeln("<h2>Welcome " + enteredName + "</h2>");

// 9. Success message
console.warn("Task submitted successfully");

// 10. Error message
console.error("Task submission failed");

// Bonus Task
employeeAge = 25;

console.log("Updated Employee Age :", employeeAge);