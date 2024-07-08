### This Repository is For how to connect to postgresql database using node js

# Node js with postgresql


## Steps to connect to postgresql database using node js
1. Install the required packages
    - `npm install pg`
2. Create a connection to the database
    - `import {Client} from 'pg'`
    - `const client = new Client({
        connectionString: 'postgresql://username:password@localhost:5432/database_name'
    })


3. Connect to the database
    - `client.connect()`

4. Query the database
    - `client.query('SELECT * FROM table_name', (err, res) => {
        console.log(res.rows)
    })`


