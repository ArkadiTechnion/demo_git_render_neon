require('dotenv').config();

const express = require('express');
const path = require('path');
const pool = require('./db');

const app = express();
const port = process.env.PORT || 3000;
const publicDirectory = path.join(__dirname, 'public');

app.use(express.json());

app.get('/api/profiles', async (request, response) => {
    try {
        const { rows } = await pool.query(`
            SELECT p.user_id, p.first_name, p.last_name, p.birth_date,
                   p.bio, p.gender, p.location_name, ph.url as photo_url
            FROM profiles p
            LEFT JOIN photos ph ON p.user_id = ph.user_id AND ph.is_primary = true
            LIMIT 20
        `);
        response.json(rows);
    } catch (error) {
        response.status(500).json({ error: error});
    }
});

app.get('/api/profiles/:id', async (request, response) => {
    try {
        const { rows } = await pool.query(`
            SELECT p.user_id, p.first_name, p.last_name, p.birth_date,
                   p.bio, p.gender, p.location_name, ph.url as photo_url
            FROM profiles p
            LEFT JOIN photos ph ON p.user_id = ph.user_id AND ph.is_primary = true
            WHERE p.user_id = $1
            LIMIT 20
        `, [request.params.id]);

        if (!rows[0]) {
            return response.status(404).json({ error: 'Profile not found' });
        }

        response.json(rows[0]);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
});

app.post('/api/swipe', async (request, response) => {
    try {
        const { swiper_id, swiped_id } = request.body;
        await pool.query(
            'INSERT INTO swipes (swiper_id, swiped_id) VALUES ($1, $2)',
            [swiper_id, swiped_id]
        );
        response.json({ success: true });
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
});

app.get('/', (request, response) => {
	response.sendFile(path.join(publicDirectory, 'index.html'));
});

app.use(express.static(publicDirectory));

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});


//  tryPoolConnection = async ()=>{
//     pool.query('SELECT NOW()', (err, res) => {
//     if (err) {
//         console.error('DB connection failed:', err);
//     } else {
//         console.log('DB connected! Server time:', res.rows[0].now);
//     }
// });

// tryPoolConnection();


//}
