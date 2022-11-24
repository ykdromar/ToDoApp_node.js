const mongoose=require('mongoose');
main().catch(err => console.log(err)); // handeling the errors in connecting to database
// main function to establish and keep the connection alive with the database
async function main() {
  await mongoose.connect('mongodb://localhost:27017/ToDoList');
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
  console.log("Connected Sucessfully to database");
}