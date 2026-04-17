const express = require('express');
var cors = require('cors');

const app = express();
app.use(cors());
const router = express.Router();

router.get('/songs', (req, res) => {
    const songs = [
        {
            title: 'Hello',
            artist: 'Adele',
            popularity: 10,
            genre: ["funk", "boogie"]
        },
        {
            title: 'Happy',
            artist: 'Pharrell Williams',
            popularity: 9,
            genre: ["pop", "dancehall"]
        }
    ];
    res.json(songs);
});

app.use('/api', router);
app.listen(3000);