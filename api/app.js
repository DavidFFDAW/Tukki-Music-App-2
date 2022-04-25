require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const { authenticateTokenJWT } = require('./middlewares/jwt.middleware');
const { SongController } = require('./controllers/SongController');
const UserController = require('./controllers/UserController');
const port = process.env.PORT || 3525;

app.use(cors());
app.use(express.json());
app.use(helmet());

// app.disable('x-powered-by');

app.get('/', (_, res) => {
    res.status(200).send('Hello World!')
});

// ↓ -- This needs testing done to it -- ↓
app.post('/login', UserController.attemptLogIn);

app.get('/song', authenticateTokenJWT, SongController.getSongs);
  
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});