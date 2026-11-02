const { Pool } = require('pg');

let pool;

try{
	pool = new Pool({
	connectionString: process.env.DATABASE_URL,
	ssl: { rejectUnauthorized: false },
	})
}catch (error) {
	console.error('Error creating database pool:', error);
}

if (!pool) {
	console.error('Database pool is not initialized.');
}
else {
	pool.query('SELECT NOW()', (err, res) => {
		if (err) {	console.error('Error connecting to the database:', err);	}
	})
}

module.exports = pool;
