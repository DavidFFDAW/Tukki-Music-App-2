require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const JWTMiddleware = require('./middlewares/jwt.middleware');
const { SongController } = require('./controllers/SongController');
const UserController = require('./controllers/UserController');
const { MixesController } = require('./controllers/MixesController');
const port = process.env.PORT || 3525;

app.use(cors());
app.use(express.json());
app.use(helmet());

// app.disable('x-powered-by');

app.get('/api/', (_, res) => {
    res.status(200).send('Hello World!')
});

// Different components with different routes and different models (resource-types)

// ↓ -- (: It works :) -- ↓
app.post('/api/login', UserController.attemptLogIn);

app.get('/api/test', JWTMiddleware.authenticateTokenJWT, UserController.test);

app.get('/api/songs', JWTMiddleware.authenticateTokenJWT, SongController.getSongs);
app.get('/api/mixes', JWTMiddleware.authenticateTokenJWT, MixesController.getUserMixes);
  



app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});