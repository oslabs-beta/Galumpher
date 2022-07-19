module.exports = {

CREATE TABLE IF NOT EXISTS metrics (
    id SERIAL PRIMARY,
    container_id INTEGER,
    container_name TEXT,
    cpu_perc INTEGER,
    avg_cpu_perc INTEGER,
    memory_perc INTEGER,
    memory_usage INTEGER, 
    net_in_out INTEGER,
    pid INTEGER,
    CPU_time INTEGER
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
    );

}