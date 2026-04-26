const express = require('express');

const app = express();
const Song = require('./models/song');
var cors = require('cors');

app.use(cors());

app.use(express.json());

const router = express.Router();

router.get('/songs', async (req, res) => {
    try {
        const songs = await Song.find({});
        res.send(songs);
        console.log(songs);
    }
    catch (err) {
        console.log(err);
    }
});

router.post('/songs', async(req, res) => {
    try {
        const song = new Song(req.body);
        await song.save();
        res.status(201).json(song);
        console.log(song);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.use('/api', router);
app.listen(3000);