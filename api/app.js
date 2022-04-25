require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const { generateAccessToken } = require('./services/jwt/jwt.service');
const { authenticateTokenJWT } = require('./middlewares/jwt.middleware');
const { SongController } = require('./controllers/SongController');
const port = process.env.PORT || 3525;

app.use(cors());
app.use(express.json());
app.use(helmet());

// app.disable('x-powered-by');

app.get('/', (_, res) => {
    res.status(200).send('Hello World!')
});

// ↓ -- This needs testing done to it -- ↓
app.post('/login', (req, res) => {
    const user = { name: req.body.name, email: req.body.email };
    const generatedJWT = generateAccessToken(user);
    return res.status(200).json({ token: generatedJWT });
});

app.get('/song', authenticateTokenJWT, SongController.getSongs);
  
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});