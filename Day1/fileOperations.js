/* 
1. Create a JSON file named 'students.json' with the sample student data above from the code done
2. Implement both synchronous and asynchronous file operations
3. Create functions to:
   - Write the studentData to students.json
   - Read from students.json
   - Add a new student
   - (bonus) Update a student's course
   - (bonus) Delete a student
4. (bonus)Compare the behavior of sync vs async operations
*/

const fs = require('fs');
//  Implement both synchronous and asynchronous file operations

// --------------------- sync operation

//  ---- read file
const readfile = fs.readFileSync('students.json', 'utf-8');
const data = JSON.parse(readfile);
// console.log(data);

// // ----- write file
// fs.writeFileSync('copyFile.json',JSON.stringify(data));

// // ------------------- async operation
// fs.readFile('students.json','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         const readDataAsync=JSON.parse(data);
//         console.log(readDataAsync);
//     }
// })
// // ----------------- Add a new student
// data.push({
//     id:4,
//     name:'ahmed',
//     age:22,
//     course:'web development',
//     grades:{
//         html:95,
//         javascript:89
//     }

// });

// //---------- write file 
// fs.writeFile('copyFile.json',JSON.stringify(data),(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('file written successfully');
//     }
// })


// Update a student's course
// const updateCourse = (id, course) => {
//    for (let i = 0; i < data.length; i++) {
//       if (data[i].id === id) {
//          data[i].course = course;
//       }
//    }
// }

// updateCourse(1, 'node js');
// fs.writeFileSync('copyFile.json', JSON.stringify(data));

// // delete a student
const deleteStudent = (id) => {
   for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
         data.splice(i, 1);
      }
   }
}
deleteStudent(2);
fs.writeFileSync('copyFile.json', JSON.stringify(data));


// Compare the behavior of sync vs async operations
/*

Comparison
**  Blocking vs Non-blocking:

Sync operations block the execution until the operation completes.
Async operations allow other code to execute while waiting for the operation to complete.

** Performance:
 Sync operations can lead to performance issues in I/O-heavy applications because they block the event loop.
 Async operations can improve performance and responsiveness by not blocking the event loop.

 ** Error Handling:
 Sync operations typically use try/catch for error handling.
Async operations use callbacks, promises, or async/await for error handling.


*/