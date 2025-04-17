
//Seeding the database with initial user data
// This file contains the initial user data to be seeded into the database.
import bcrypt from 'bcryptjs';
 
 const users = [
   {
     name: 'Admin User',
     email: 'admin@email.com',
     password: bcrypt.hashSync('123456', 10),
     isAdmin: true,
   },
   {
     name: 'John Doe',
     email: 'john@email.com',
     password: bcrypt.hashSync('123456', 10),
   },
   {
     name: 'Jane Doe',
     email: 'jane@email.com',
     password: bcrypt.hashSync('123456', 10),
   },
 ];
 
 export default users;