import express from 'express';
const app = express();
import bodyParser from 'body-parser';

import diaryRouter from './routes/diaries';

import cors from 'cors';

app.use(bodyParser.json());
app.use(cors());

app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong!');
});

app.use('/api/diaries', diaryRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
