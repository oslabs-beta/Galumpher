CREATE TABLE IF NOT EXISTS metrics (
    id SERIAL PRIMARY NOT NULL,
    container_id INTEGER,
    container_name TEXT,
    cpu_perc NUMBER,
    avg_cpu_perc NUMBER,
    memory_perc NUMBER,
    memory_usage NUMBER, 
    net_in_out NUMBER,
    pid INTEGER,
    CPU_time NUMBER
    created_at TIMESTAMPTZ 
);

DEFAULT CURRENT_TIMESTAMP