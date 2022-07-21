const db = require('../../database/model.js');

const dbController = {};


dbController.createTable = (req, res, next) => {
  db.query('CREATE TABLE IF NOT EXISTS metrics (id SERIAL PRIMARY KEY NOT NULL, container_name TEXT, container_id TEXT, cpu_perc DECIMAL, avg_cpu_perc DECIMAL, mem_usage DECIMAL, mem_limit DECIMAL, memory_perc DECIMAL, net_input DECIMAL, net_output DECIMAL, block_input DECIMAL, block_output DECIMAL, pid INTEGER, created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP);')
    .then(() => {
      return next();
    })
    .catch((err) => {
      if (err) return next(err);
    });
};

dbController.insertData = (req, res, next) => {
  const { container_name, container_id, cpu_percent, avg_cpu, mem_usage, mem_limit, mem_percent, net_input, net_output, block_input, block_output, pids } = res.locals.metrics;
  db.query('INSERT INTO metrics (container_name, container_id, cpu_perc, avg_cpu_perc, mem_usage, mem_limit, memory_perc, net_input, net_output, block_input, block_output, pid) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12);', 
    [container_name, container_id, cpu_percent, avg_cpu, mem_usage, mem_limit, mem_percent, net_input, net_output, block_input, block_output, pids ])
    .then(() => {
      return next();
    })
    .catch((err) => {
      console.log(err);
      if (err) return next(err);
    });
};


dbController.getData = (req, res, next) => {
  const lastTen = 'SELECT * FROM metrics ORDER BY id DESC LIMIT 10;';
  db.query(lastTen)
    .then((data) => {
      res.locals.data = data.rows;
      return next();
    })
    .catch((err) => {
      if (err) return next(err);
    });
};


module.exports = dbController;