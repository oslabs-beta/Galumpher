<<<<<<< HEAD
const { Pool, Client } = require('pg');

// post our PG_URI here

const PG_URI = 'postgres://uibmekip:VsaStnM05jRflUthJRed4PMeXJbUiZpz@heffalump.db.elephantsql.com/uibmekip';
=======
const { Pool } = require('pg');

// post our PG_URI here

const PG_URI = 'postgres://gzsnrmcg:O6wPSpUSQcHLA6L0yTEsuZRjcJnOCi3A@kashin.db.elephantsql.com/gzsnrmcg';
>>>>>>> dev


const pool = new Pool({
  connectionString: PG_URI
});


module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
<<<<<<< HEAD
};










  

// const {Client} = require('pg')
// const client = new Client({
//     host: "localhost",
//     user: "postgres",
//     port: 5432,
//     database: 'postgres'
// })


// client.connect();

// client.query('SELECT * from users', (err, res) => {
//     if(!err){
//         console.log(res.rows);
//     } else {
//         console.log(err.message);
//     }
//     client.end;
// })
=======
};
>>>>>>> dev
