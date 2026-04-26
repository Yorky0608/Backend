const express = require('express');

const app = express();
const Song = require('./models/song');
var cors = require('cors');

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

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

router.get('/songs/:id', async (req, res) => {
    try {
        const song = await Song.findById(req.params.id)
        res.json(song);
    }

    catch (err) {
        res.status(400).send(err);
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

router.put('/songs/:id', async (req, res) => {
    try {
        const song = req.body;
        await Song.updateOne({ _id: req.params.id }, song);
        res.sendStatus(204);
    }

    catch (err) {
        res.status(400).send(err);
    }
});

app.use('/api', router);
app.listen(3000);