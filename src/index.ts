import {Client} from 'pg'

const client = new Client({
  connectionString: "postgres://chaiaurcode:chaiaurcode@localhost:5432/chaiDB"
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to database");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
}

// connectToDatabase()

// // 1. create a new table in the database Run this only once
// async function createUserTable(){
//   await client.connect();
//   const result = await client.query(`
//     CREATE TABLE IF NOT EXISTS users22 (
//       id SERIAL PRIMARY KEY,
//       username VARCHAR(255) NOT NULL UNIQUE,
//       name VARCHAR(255),
//       email VARCHAR(255) UNIQUE NOT NULL,
//       password VARCHAR(255) NOT NULL,
//       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//     );
//   `);
//   await client.end();   // Close the connection
//   console.log(result);
// }
// createUserTable();


// 2.  insert a new user into the database
// async function insertUser(username: string, name: string, email: string, password: string) {
//   try {
//     await client.connect();
//     const result = await client.query(
//       `insert into users22 (username, name, email, password)
//        values ($1, $2, $3, $4) 
//        returning *`
//       , [username, name, email, password]
//     )

//     console.log("User inserted:", result.rows[0]);
//   } catch (error) {
//     console.error("Error inserting user:", error);
//   }
// }
// insertUser("anshaa", "ansha", "saqib@yahoo.com","12jsdhhj")
// // insertUser("anshu", "anshu", "saqib@gmail.com","12jsdhhj")


async function getAlluser() {

  try {
    await client.connect();
    const result= await client.query(`select email,username from users22`)
    console.log(result.rows)
  } catch (error) {
    console.error("Error getting user:", error);
    
  }
  
}

getAlluser()

// 3. Delete a user in the database
async function deleteUser(email: string) {
  try {
    await client.connect();
    const result = await client.query(`
          DELETE FROM users22
          WHERE email = $1
          RETURNING *
        `, [email]);

    console.log("User deleted:", result.rows[0]);
  } catch (error) {
    console.error("Error deleting user:", error);
  }
}

deleteUser("saqib@gmail121.com")


// 4. get all users2 from the database
async function getusers2() {
  try {
    const result = await client.query(`
      SELECT * FROM users2
    `);

    console.log("users2:", result.rows);
  } catch (error) {
    console.error("Error getting users2:", error);
  }
}


connectToDatabase()
  .then(async () => {
    // await insertUser("anshu2", "anshu", "anshu2@gmail.com", "12345")    // You can add more users2 here by calling this function multiple times with different values
    // await deleteUser("anshu2@gmail.com")
    // await getusers2()

    await client.end(); 
  }) 
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });