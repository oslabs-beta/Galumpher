const db = require('../../database/model.js');

const dbController = {};


dbController.createTable = (req, res, next) => {
  db.query('CREATE TABLE IF NOT EXISTS metrics (id SERIAL PRIMARY KEY NOT NULL, container_id INTEGER, container_name TEXT, cpu_perc DECIMAL, avg_cpu_perc DECIMAL, memory_perc DECIMAL, memory_usage INTEGER, net_in_out INTEGER, pid INTEGER, created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP);')
    .then(() => {
      return next();
    })
    .catch((err) => {
      if (err) return next(err);
    });
};

dbController.insertData = (req, res, next) => {
  const { container_id, container_name, cpu_perc, avg_cpu_perc, memory_perc, memory_usage, net_in_out, pid } = req.body;
  console.log(container_name);
  db.query('INSERT INTO metrics (container_id, container_name, cpu_perc, avg_cpu_perc, memory_perc, memory_usage, net_in_out, pid) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);', 
    [container_id, container_name, cpu_perc, avg_cpu_perc, memory_perc, memory_usage, net_in_out, pid])
    .then(() => {
      return next();
    })
    .catch((err) => {
      if (err) return next(err);
    });
};


dbController.getData = (req, res, next) => {
  db.query('SELECT * FROM metrics ORDER BY id DESC LIMIT 10;')
    .then((data) => {
      res.locals.data = data;
      return next();
    })
    .catch((err) => {
      if (err) return next(err);
    });
};


module.exports = dbController;