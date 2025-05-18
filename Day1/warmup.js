 /************** Part 1 *********************************** */

   /* create an array of users with name, age, and role */
 const users = [
  { name: "John Doe", age: 28, role: "developer" },
  { name: "Jane Smith", age: 32, role: "admin" },
  { name: "Bob Johnson", age: 24, role: "developer" },
  { name: "Sarah Williams", age: 27, role: "manager" },
  { name: "Mike Brown", age: 35, role: "admin" },
];
 
/* 
   2. Use array methods to:
   - Filter users above age 30
   - Transform the data to only include names
   - Find the first user with role "admin"

*/

const usersOver30=users.filter((user)=>user.age>30);
console.log(usersOver30);

const namesUsers=users.map((user)=>user.name);
console.log(namesUsers);

const firstAdmin=users.find((user)=>user.role==="admin");
console.log(firstAdmin);




