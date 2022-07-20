const { Pool } = require('pg');

// post our PG_URI here

const PG_URI = 'postgres://gzsnrmcg:O6wPSpUSQcHLA6L0yTEsuZRjcJnOCi3A@kashin.db.elephantsql.com/gzsnrmcg';


const pool = new Pool({
  connectionString: PG_URI
});


module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};